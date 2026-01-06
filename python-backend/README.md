# Bikin Landing Page - Python FastAPI Backend

This is the FastAPI backend for the Bikin landing page project.

## Getting Started

### Prerequisites
- Python 3.9 or higher
- pip package manager

### Installation

1. Create a virtual environment (recommended):

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

### Running the Server

```bash
python main.py
```

Or using uvicorn directly:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- **API**: `http://localhost:8000`
- **API Docs (Swagger)**: `http://localhost:8000/docs`
- **Alternative Docs (ReDoc)**: `http://localhost:8000/redoc`

## API Endpoints

### Health Check
- **GET** `/` - API health check
- **GET** `/health` - Health status

### Demo Request
- **POST** `/api/demo-request` - Submit a live demo request
  ```json
  {
    "type": "live_demo",
    "timestamp": "2024-01-06T10:30:00",
    "email": "user@example.com",
    "name": "John Doe"
  }
  ```

### Purchase Request
- **POST** `/api/purchase-request` - Submit a purchase request
  ```json
  {
    "type": "get_now",
    "timestamp": "2024-01-06T10:30:00",
    "email": "user@example.com",
    "name": "John Doe",
    "company": "Acme Corp"
  }
  ```

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in your product"
  }
  ```

### Request Management (Development/Testing)
- **GET** `/api/requests` - Get all requests
- **GET** `/api/requests/{id}` - Get request by ID
- **DELETE** `/api/requests` - Clear all requests

## Environment Variables

Create a `.env` file in the backend directory:

```
DEBUG=True
ENVIRONMENT=development
```

## Project Structure

- `main.py` - FastAPI application and all endpoints
- `requirements.txt` - Python dependencies
- `.env` - Environment variables

## Database Integration (Future)

Currently, the backend uses in-memory storage. For production, integrate:
- PostgreSQL
- MongoDB
- MySQL

Update the endpoints to save data to your chosen database.

## Email Integration (Future)

Add email notifications using:
- SendGrid
- Mailgun
- AWS SES

Update the endpoints to send emails after receiving requests.

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Next.js frontend)
- All origins (for development) - **restrict in production**

Edit the `CORSMiddleware` configuration in `main.py` to change allowed origins.
