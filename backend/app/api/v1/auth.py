from app.schemas.user import UserCreate
from app.schemas.auth import Token
from sqlalchemy.orm import Session
from fastapi import Depends, APIRouter, status, HTTPException
from app.db.session import get_db, db_dependency, bcrypt_context, SECRET_KEY, ALGORITHM
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from typing import Annotated
from app.models.user import User
import bcrypt


router = APIRouter()


def authenticate_user(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user


def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = {"sub": username, 'id': user_id}
    expires = datetime.utcnow() + expires_delta
    encode.update({"exp": expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency, create_user_request: UserCreate):
    last_user_id = db.query(User).order_by(User.id.desc()).first().id
    create_user_model = User(
        id=last_user_id + 1,
        username=create_user_request.username,
        email=create_user_request.email,
        full_name=create_user_request.full_name,
        hashed_password = bcrypt.hashpw(create_user_request.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    )
    db.add(create_user_model)
    db.commit()


@router.post('/token', response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")
    token = create_access_token(
        user.username, user.id, timedelta(minutes=15))
    return {"access_token": token, "token_type": "bearer"}
