# 🏗️ Bikin Landing Page - Architecture & Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER'S BROWSER                                 │
│                 http://localhost:3000                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   NEXT.JS FRONTEND                                │
│              (nextjs-frontend folder)                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   Navbar     │  │   Hero       │  │  Features    │           │
│  │  Component   │  │  Component   │  │  Component   │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│         │                 │                  │                    │
│         └─────────────────┼──────────────────┘                   │
│                           ↓                                       │
│                  ┌─────────────────┐                              │
│                  │  Tailwind CSS   │                              │
│                  │   Responsive    │                              │
│                  │    Styling      │                              │
│                  └─────────────────┘                              │
│                           ↓                                       │
│           [Button Click Events]                                   │
│           - Live Demo (POST)                                     │
│           - Get Now (POST)                                       │
│           - Contact (POST)                                       │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓ (HTTP Requests)
┌─────────────────────────────────────────────────────────────────┐
│                   FASTAPI BACKEND                                 │
│              (python-backend folder)                              │
│              http://localhost:8000                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              FASTAPI Application                         │    │
│  │  main.py (340+ lines)                                   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                           ↓                                      │
│  ┌──────────────┬──────────────────┬──────────────────────┐    │
│  │   Health     │   Demo Request   │  Purchase Request    │    │
│  │   Endpoints  │   /api/demo-     │  /api/purchase-      │    │
│  │              │   request        │  request             │    │
│  │ GET /        │                  │                      │    │
│  │ GET /health  │   Handles        │  Handles "Get Now"   │    │
│  └──────────────┴──────────────────┴──────────────────────┘    │
│                                                                   │
│  ┌──────────────────────┬──────────────────────────────────┐   │
│  │  Contact Endpoint    │  Request Management             │   │
│  │  /api/contact        │  /api/requests                  │   │
│  │                      │  /api/requests/{id}             │   │
│  │  Handles contact     │  (GET, DELETE for testing)      │   │
│  │  form submissions    │                                 │   │
│  └──────────────────────┴──────────────────────────────────┘   │
│                           ↓                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │   CORS Middleware                                         │  │
│  │   - Allows requests from localhost:3000                  │  │
│  │   - Handles preflight requests                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↓                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │   Data Storage (Currently In-Memory)                      │  │
│  │   requests_storage = []                                  │  │
│  │                                                           │  │
│  │   Can be replaced with:                                  │  │
│  │   - PostgreSQL                                           │  │
│  │   - MongoDB                                              │  │
│  │   - MySQL                                                │  │
│  │   - etc.                                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

### "Live Demo" Button Click Flow

```
User clicks "Live Demo" button
         ↓
JavaScript onClick handler triggered
         ↓
axios.post() called
         ↓
HTTP POST request sent to:
POST http://localhost:8000/api/demo-request
{
  type: "live_demo",
  timestamp: "2024-01-06T10:30:00"
}
         ↓
FastAPI receives request
         ↓
Route handler processes:
@app.post("/api/demo-request")
async def submit_demo_request(request: DemoRequest):
         ↓
Pydantic validates data
         ↓
Request stored in-memory
         ↓
Response sent back:
{
  "status": "success",
  "message": "Demo request received successfully",
  "request_id": 1
}
         ↓
Frontend receives response
         ↓
Success alert shown to user
```

### "Get Now" Button Click Flow

```
User clicks "Get Now" button
         ↓
JavaScript onClick handler triggered
         ↓
axios.post() called
         ↓
HTTP POST request sent to:
POST http://localhost:8000/api/purchase-request
{
  type: "get_now",
  timestamp: "2024-01-06T10:30:00"
}
         ↓
FastAPI processes (same as demo request)
         ↓
Response returned
         ↓
Frontend shows success message
```

---

## File Dependencies

```
Frontend Entry Point: pages/index.tsx
         ↓
         ├─→ imports Navbar.tsx
         │        ↓
         │        └─→ uses Tailwind CSS from styles/globals.css
         │
         ├─→ imports HeroSection.tsx
         │        ↓
         │        ├─→ calls axios POST to /api/demo-request
         │        ├─→ calls axios POST to /api/purchase-request
         │        └─→ uses Tailwind CSS from styles/globals.css
         │
         ├─→ imports FeaturesSection.tsx
         │        ↓
         │        └─→ uses Tailwind CSS from styles/globals.css
         │
         └─→ imports Footer.tsx
                  ↓
                  └─→ uses Tailwind CSS from styles/globals.css


Backend Entry Point: main.py
         ↓
         ├─→ Pydantic models for validation
         │        ├─→ DemoRequest
         │        ├─→ PurchaseRequest
         │        └─→ ContactMessage
         │
         ├─→ CORS Middleware configuration
         │        ↓
         │        └─→ Allows frontend to communicate
         │
         ├─→ Health endpoints
         │        ├─→ GET /
         │        └─→ GET /health
         │
         ├─→ API endpoints
         │        ├─→ POST /api/demo-request
         │        ├─→ POST /api/purchase-request
         │        ├─→ POST /api/contact
         │        ├─→ GET /api/requests
         │        ├─→ GET /api/requests/{id}
         │        └─→ DELETE /api/requests
         │
         └─→ Storage
                  └─→ requests_storage list
```

---

## Component Hierarchy

### Frontend Components

```
Home (pages/index.tsx)
│
├─ Navbar (components/Navbar.tsx)
│  └─ State: isOpen (menu toggle)
│  └─ Functions: toggleMenu(), scrollToSection()
│
├─ HeroSection (components/HeroSection.tsx)
│  └─ State: loading (button state)
│  └─ Functions: handleLiveDemo(), handleGetNow()
│  └─ API Calls: POST /api/demo-request, POST /api/purchase-request
│
├─ FeaturesSection (components/FeaturesSection.tsx)
│  └─ Static content: 4 feature cards
│  └─ No API calls
│
├─ Footer (components/Footer.tsx)
│  └─ Static content: company info and links
│  └─ No API calls
│
└─ Styling
   └─ Global CSS (styles/globals.css)
   └─ Tailwind Config (tailwind.config.js)
```

---

## State Management

### Frontend State
```
Navbar Component:
  - isOpen: boolean (mobile menu visibility)

HeroSection Component:
  - loading: boolean (button loading state during API call)
```

### Backend State
```
In-Memory (current):
  - requests_storage: array of request objects

Each request object:
  {
    id: number,
    type: "demo_request" | "purchase_request" | "contact_message",
    data: object,
    created_at: ISO timestamp
  }
```

---

## API Request/Response Examples

### Demo Request
```
REQUEST:
POST /api/demo-request
Content-Type: application/json

{
  "type": "live_demo",
  "timestamp": "2024-01-06T10:30:00.123456",
  "email": null,
  "name": null
}

RESPONSE (200 OK):
{
  "status": "success",
  "message": "Demo request received successfully",
  "request_id": 1
}
```

### Purchase Request
```
REQUEST:
POST /api/purchase-request
Content-Type: application/json

{
  "type": "get_now",
  "timestamp": "2024-01-06T10:30:00.123456",
  "email": null,
  "name": null,
  "company": null
}

RESPONSE (200 OK):
{
  "status": "success",
  "message": "Purchase request received successfully",
  "request_id": 2
}
```

### Get All Requests
```
REQUEST:
GET /api/requests

RESPONSE (200 OK):
{
  "total": 2,
  "requests": [
    {
      "id": 1,
      "type": "demo_request",
      "data": {...},
      "created_at": "2024-01-06T10:30:00.123456"
    },
    {
      "id": 2,
      "type": "purchase_request",
      "data": {...},
      "created_at": "2024-01-06T10:31:00.654321"
    }
  ]
}
```

---

## Environment Configuration

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```
DEBUG=True
ENVIRONMENT=development
DATABASE_URL=sqlite:///./test.db
SECRET_KEY=your-secret-key-here-change-in-production
```

---

## Development Workflow

### Step 1: Start Backend
```
Terminal 1:
$ cd python-backend
$ python main.py
→ Listening on http://localhost:8000
→ Auto-reload on file changes
```

### Step 2: Start Frontend
```
Terminal 2:
$ cd nextjs-frontend
$ npm run dev
→ Running on http://localhost:3000
→ Hot reload on file changes
```

### Step 3: Test Integration
```
Browser:
1. Open http://localhost:3000
2. Click "Live Demo" button
3. Check Terminal 1 for request logs
4. Verify success alert
```

---

## Deployment Architecture (Future)

```
Production Setup:

┌─────────────────────────────────────────────────────┐
│           User's Browser / Client                   │
└────────────────────┬────────────────────────────────┘
                     ↓
         ┌───────────────────────┐
         │    Vercel / Netlify   │
         │   (Next.js Frontend)  │
         │  https://your-app.com │
         └───────────┬───────────┘
                     ↓
         ┌───────────────────────────┐
         │  Railway / Render         │
         │  (FastAPI Backend)        │
         │  https://api.your-app.com │
         └───────────┬───────────────┘
                     ↓
         ┌───────────────────────────┐
         │  PostgreSQL / MongoDB     │
         │  (Database)               │
         └───────────────────────────┘
```

---

## Technology Interaction Matrix

| Frontend | Backend | Purpose |
|----------|---------|---------|
| Navbar.tsx | - | Navigation & routing |
| HeroSection.tsx | /api/demo-request | Demo requests |
| HeroSection.tsx | /api/purchase-request | Purchase requests |
| globals.css | - | Styling all components |
| .env.local | .env | Configuration |
| axios | FastAPI | HTTP communication |
| React hooks | Pydantic | Data validation |
| Tailwind | - | UI styling |
| Next.js | Uvicorn | Framework pairing |

---

This architecture provides a solid foundation for scaling your landing page with additional sections, features, and integrations.
