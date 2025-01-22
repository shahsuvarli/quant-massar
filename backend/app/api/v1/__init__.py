from fastapi import APIRouter
from .user import router as user_router
from .portfolio import router as portfolio_router
from .transaction import router as transaction_router
from .auth import router as auth_router

api_v1_router = APIRouter()

# Include individual routers
api_v1_router.include_router(user_router, prefix="/users", tags=["Users"])
api_v1_router.include_router(
    portfolio_router, prefix="/portfolios", tags=["Portfolios"])
api_v1_router.include_router(
    transaction_router, prefix="/transactions", tags=["Transactions"])
api_v1_router.include_router(auth_router, prefix="/auth", tags=["Auth"])