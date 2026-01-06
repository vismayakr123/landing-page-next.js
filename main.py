from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from typing import Optional
import json
import os

# Initialize FastAPI app
app = FastAPI(
    title="Bikin Landing Page API",
    description="Backend API for Bikin landing page",
    version="1.0.0"
)

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request validation
class DemoRequest(BaseModel):
    type: str
    timestamp: datetime
    email: Optional[str] = None
    name: Optional[str] = None

class PurchaseRequest(BaseModel):
    type: str
    timestamp: datetime
    email: Optional[str] = None
    name: Optional[str] = None
    company: Optional[str] = None

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str
    timestamp: datetime = None

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "message": "I'm interested in your landing page template"
            }
        }

# In-memory storage for demo purposes (replace with database in production)
requests_storage = []

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Bikin Landing Page API",
        "status": "healthy",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "ok", "timestamp": datetime.now()}

# Demo request endpoint
@app.post("/api/demo-request")
async def submit_demo_request(request: DemoRequest):
    """
    Handle live demo requests from the landing page
    """
    try:
        request_data = {
            "id": len(requests_storage) + 1,
            "type": "demo_request",
            "data": request.dict(),
            "created_at": datetime.now().isoformat()
        }
        requests_storage.append(request_data)
        
        # Here you would typically:
        # 1. Send an email to the user
        # 2. Save to database
        # 3. Trigger a workflow
        
        return {
            "status": "success",
            "message": "Demo request received successfully",
            "request_id": request_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Purchase request endpoint
@app.post("/api/purchase-request")
async def submit_purchase_request(request: PurchaseRequest):
    """
    Handle purchase/get now requests from the landing page
    """
    try:
        request_data = {
            "id": len(requests_storage) + 1,
            "type": "purchase_request",
            "data": request.dict(),
            "created_at": datetime.now().isoformat()
        }
        requests_storage.append(request_data)
        
        # Here you would typically:
        # 1. Send a confirmation email
        # 2. Save to database
        # 3. Initiate checkout process
        
        return {
            "status": "success",
            "message": "Purchase request received successfully",
            "request_id": request_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Contact form endpoint
@app.post("/api/contact")
async def submit_contact_form(contact: ContactMessage):
    """
    Handle contact form submissions
    """
    try:
        if not contact.timestamp:
            contact.timestamp = datetime.now()
            
        request_data = {
            "id": len(requests_storage) + 1,
            "type": "contact_message",
            "data": contact.dict(),
            "created_at": datetime.now().isoformat()
        }
        requests_storage.append(request_data)
        
        # Here you would typically:
        # 1. Send email to support team
        # 2. Send confirmation email to user
        # 3. Save to database
        
        return {
            "status": "success",
            "message": "Contact message received successfully",
            "request_id": request_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Get all requests (for admin purposes)
@app.get("/api/requests")
async def get_all_requests():
    """
    Get all received requests (demo, purchase, contact)
    WARNING: In production, this should be protected with authentication
    """
    return {
        "total": len(requests_storage),
        "requests": requests_storage
    }

# Get request by ID
@app.get("/api/requests/{request_id}")
async def get_request(request_id: int):
    """
    Get a specific request by ID
    """
    for request in requests_storage:
        if request["id"] == request_id:
            return request
    raise HTTPException(status_code=404, detail="Request not found")

# Clear all requests (for testing purposes)
@app.delete("/api/requests")
async def clear_requests():
    """
    Clear all stored requests (for testing/development only)
    """
    global requests_storage
    requests_storage.clear()
    return {"status": "success", "message": "All requests cleared"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
