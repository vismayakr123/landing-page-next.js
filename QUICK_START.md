# Quick Start Guide - Bikin Landing Page

## 🚀 Get Started in 5 Minutes

### Terminal 1: Start the Backend

```bash
# Navigate to backend folder
cd python-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

**Expected Output:**
```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

✅ Backend running at: `http://localhost:8000`  
✅ API Docs at: `http://localhost:8000/docs`

---

### Terminal 2: Start the Frontend

```bash
# Navigate to frontend folder
cd nextjs-frontend

# Install dependencies (first time only)
npm install

# Run development server
npm run dev
```

**Expected Output:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

✅ Frontend running at: `http://localhost:3000`

---

## 🎨 What You'll See

**At `http://localhost:3000`:**

1. **Navigation Bar**
   - "Bikin" logo
   - Menu items (Home, Feature, Gallery, Price & Plan, Our Team, Contact)
   - Smooth scrolling on mobile

2. **Hero Section**
   - "Modern Design" headline
   - Subtitle with description
   - "Live Demo" button (blue)
   - "Get Now" button (white with border)

3. **Features Section**
   - 4 feature cards:
     - 📱 Fully Responsive
     - ✨ Retina Ready
     - 🎨 Easily Customize
     - ⚙️ Quality Code

4. **Footer**
   - Company links
   - Quick navigation

---

## 🔗 Test the Integration

1. Open `http://localhost:3000` in your browser
2. Click **"Live Demo"** button
3. Check the backend console - you should see the request logged
4. A success alert will appear in the browser

Try the same with **"Get Now"** button!

---

## 📝 Project Files Structure

```
landing page/
├── nextjs-frontend/
│   ├── components/
│   │   ├── Navbar.tsx          ← Navigation bar
│   │   ├── HeroSection.tsx      ← Hero section + buttons
│   │   ├── FeaturesSection.tsx  ← Feature cards
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── index.tsx            ← Main page
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── .env.local               ← API URL config
│   └── next.config.js
│
├── python-backend/
│   ├── main.py                  ← FastAPI app & endpoints
│   ├── requirements.txt
│   ├── .env
│   └── README.md
│
└── README.md                    ← Full documentation
```

---

## 🎯 Next Steps

### 1. **Add Your Logo Image**
   - Replace "Bikin" text with your logo
   - Add image to `nextjs-frontend/public/images/`
   - Update `components/Navbar.tsx`

### 2. **Customize Colors**
   - Edit `nextjs-frontend/tailwind.config.js`
   - Change primary color from `#3B82F6` to your brand color

### 3. **Add Hero Image**
   - Place image in `nextjs-frontend/public/images/hero.png`
   - Update `components/HeroSection.tsx` to use the image

### 4. **Build More Sections**
   - Gallery section
   - Pricing section
   - Team section
   - Contact section

### 5. **Add Database to Backend**
   - Install: `pip install sqlalchemy psycopg2`
   - Update `main.py` with database models
   - Save form submissions to database

### 6. **Add Email Notifications**
   - Install: `pip install sendgrid`
   - Send confirmation emails to users
   - Send notifications to your email

---

## 🐛 Troubleshooting

### Port 3000 is already in use?
```bash
# Run on different port
npm run dev -- -p 3001
```

### Port 8000 is already in use?
```bash
# Run on different port
uvicorn main:app --port 8001 --reload
```

### Backend not responding?
1. Make sure backend is running (`python main.py`)
2. Check `nextjs-frontend/.env.local` has correct API URL
3. Check browser console for errors

### Frontend not loading?
1. Make sure frontend is running (`npm run dev`)
2. Check console for errors
3. Clear browser cache and refresh

---

## 📚 Documentation

- **Full README**: See `README.md` in root folder
- **Frontend Docs**: See `nextjs-frontend/README.md`
- **Backend Docs**: See `python-backend/README.md`

---

## 🎓 Learn More

- **Next.js**: https://nextjs.org/docs
- **FastAPI**: https://fastapi.tiangolo.com
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 💡 Tips

- Use `http://localhost:8000/docs` to test backend API
- Use browser DevTools (F12) to see API requests
- Both servers support hot reload - edit code and it updates automatically

---

**Ready to build? Start both terminals and enjoy! 🎉**
