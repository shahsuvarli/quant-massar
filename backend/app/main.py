from fastapi import FastAPI
from sqlalchemy.orm import Session
from app.api.v1 import api_v1_router
from app.core.config import settings

app = FastAPI()

app.include_router(api_v1_router, prefix=settings.API_V1_STR)
# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
