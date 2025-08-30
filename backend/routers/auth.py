from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/auth", tags=["auth"])

# Pydantic models for request and response validation
class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(request: LoginRequest):
    # Dummy authentication logic
    if request.email == "client@example.com" and request.password == "password123":
        return {"message": "Login successful", "user": "client"}
    elif request.email == "model@example.com" and request.password == "password123":
        return {"message": "Login successful", "user": "model"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")