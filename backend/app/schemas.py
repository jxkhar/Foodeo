from pydantic import BaseModel
from typing import Optional
class ProjectDetails(BaseModel):
    product_name: str
    ingredient: str
    weight: float
    tone: str
class ProjectUpdate(BaseModel):
    product_name: Optional[str] = None
    ingredient: Optional[str] = None
    weight: Optional[float] = None
    tone: Optional[str] = None