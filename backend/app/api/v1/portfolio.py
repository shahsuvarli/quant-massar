from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.portfolio import Portfolio, PortfolioAsset
from app.models.user import User
from app.schemas.portfolio import Portfolio as PortfolioSchema
from app.schemas.portfolio import PortfolioAsset as PortfolioAssetSchema
from sqlalchemy import desc

router = APIRouter()


@router.get("/", response_model=list[PortfolioSchema])
async def get_portfolios(db: Session = Depends(get_db)):
    portfolios = db.query(Portfolio).order_by(
        desc(Portfolio.total_value)).all()
    return portfolios


@router.get("/assets", response_model=list[PortfolioAssetSchema])
def get_portfolio_assets(db: Session = Depends(get_db)):
    portfolio_assets = db.query(PortfolioAsset).all()
    return portfolio_assets


@router.get("/{portfolio_id}/assets", response_model=list[PortfolioAssetSchema])
def get_portfolio_assets(portfolio_id: int, db: Session = Depends(get_db)):
    portfolio_assets = db.query(PortfolioAsset).filter(
        PortfolioAsset.portfolio_id == portfolio_id).all()
    return portfolio_assets