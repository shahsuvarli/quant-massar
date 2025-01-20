from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.transaction import Transaction
# from typing import List
from app.schemas.transaction import Transaction as TransactionSchema

router = APIRouter()


@router.get("/", response_model=list[TransactionSchema])
def get_transactions(db: Session = Depends(get_db)):
    transactions = db.query(Transaction).all()
    return transactions


@router.get("/{asset_id}", response_model=list[TransactionSchema])
def get_asset_transactions(asset_id: int, db: Session = Depends(get_db)):
    transaction = db.query(Transaction).filter(Transaction.asset_id == asset_id).all()
    return transaction