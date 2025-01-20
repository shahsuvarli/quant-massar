from pydantic import BaseModel
from datetime import datetime


class Transaction(BaseModel):
    id: int
    portfolio_id: int
    asset_id: int
    transaction_type: str
    quantity: float
    price: float
    total_value: float
    transaction_date: datetime

    class Config:
        orm_mode = True
