from sqlalchemy import Column, ForeignKey, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime
from app.db.base import Base


class Transaction(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey('portfolios.id'))
    asset_id = Column(Integer, ForeignKey('portfolio_assets.id'))
    # 'buy', 'sell', 'deposit', 'withdrawal'
    transaction_type = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    price = Column(Float, nullable=False)
    # total value after transaction
    total_value = Column(Float, nullable=False)
    transaction_date = Column(DateTime, default=datetime.utcnow)

    portfolio = relationship("Portfolio", back_populates="transactions")
    asset = relationship("PortfolioAsset", back_populates="transactions")
