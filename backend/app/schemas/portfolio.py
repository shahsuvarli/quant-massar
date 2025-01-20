from pydantic import BaseModel
from datetime import datetime


class Portfolio(BaseModel):
    id: int
    user_id: int
    total_value: float
    risk_level: str
    created_at: datetime
    updated_at: datetime
    performance: float
    # full_name: str

    class Config:
        orm_mode = True


class PortfolioAsset(BaseModel):
    id: int
    portfolio_id: int
    asset_name: str
    ticker: str
    quantity: float
    purchase_price: float
    current_price: float
    value: float
    weight: float
    risk: str
    dividends: float

    class Config:
        orm_mode = True
