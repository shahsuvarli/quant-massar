from sqlalchemy import Column, ForeignKey, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime
from app.db.base import Base


class Portfolio(Base):
    __tablename__ = 'portfolios'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    total_value = Column(Float, nullable=False)
    risk_level = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow,
                        onupdate=datetime.utcnow)
    # Track performance (e.g., return on investment)
    performance = Column(Float, default=0.0)

    assets = relationship("PortfolioAsset", back_populates="portfolio")
    transactions = relationship("Transaction", back_populates="portfolio")
    user = relationship("User", back_populates="portfolios")


class PortfolioAsset(Base):
    __tablename__ = 'portfolio_assets'

    id = Column(Integer, primary_key=True)
    portfolio_id = Column(Integer, ForeignKey('portfolios.id'))
    asset_name = Column(String, nullable=False)
    ticker = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    purchase_price = Column(Float, nullable=False)
    current_price = Column(Float, nullable=False)
    value = Column(Float, nullable=False)
    weight = Column(Float, nullable=False)
    risk = Column(String, nullable=False)
    dividends = Column(Float, default=0.0)

    portfolio = relationship("Portfolio", back_populates="assets")
    transactions = relationship("Transaction", back_populates="asset")
