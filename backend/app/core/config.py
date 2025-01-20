from pydantic_settings import BaseSettings, SettingsConfigDict
import os


class Settings(BaseSettings):
    API_V1_STR: str
    DATABASE_URL: str
    API_BASE_URL: str
    DEBUG: bool

    model_config = SettingsConfigDict(env_file='.env')

env = os.getenv("ENV", "development")

if env == "development":
    settings = Settings(API_BASE_URL="http://localhost:8000", DEBUG=True)
else:
    settings = Settings(API_BASE_URL=os.getenv("API_BASE_URL"), DEBUG=False)
