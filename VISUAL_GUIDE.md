# 🎨 Bikin Landing Page - Visual Components Guide

This guide shows you what each component looks like and how to customize it.

---

## 📱 Navbar Component

### What It Looks Like

```
┌─────────────────────────────────────────────────────────────┐
│  Bikin    [Home] [Feature] [Gallery] [Price & Plan] [More]  │
└─────────────────────────────────────────────────────────────┘
```

### On Mobile

```
┌──────────────────────────────────────┐
│  Bikin                          ☰    │
├──────────────────────────────────────┤
│  Home                                │
│  Feature                            │
│  Gallery                            │
│  Price & Plan                       │
│  Our Team                           │
│  Contact                            │
└──────────────────────────────────────┘
```

### Features
- ✅ Fixed at top (doesn't scroll)
- ✅ Blue logo "Bikin"
- ✅ Smooth scroll to sections
- ✅ Hamburger menu on mobile
- ✅ Hover effects on menu items

### File Location
`nextjs-frontend/components/Navbar.tsx`

### Customize

**Change Logo Text:**
```tsx
// Line ~30
<Link href="/" className="text-2xl font-bold text-primary">
  Bikin  {/* Change this text */}
</Link>
```

**Change Menu Items:**
```tsx
// Lines ~36-43 (desktop menu)
<button onClick={() => scrollToSection('features')}>
  Feature  {/* Change label */}
</button>
```

**Change Colors:**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3B82F6',  // Change primary color
}
```

---

## 🦸 Hero Section Component

### What It Looks Like

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  Modern Design                    [  Hero Image    ]   │
│                                    [  Placeholder  ]   │
│  Lorem ipsum dolor sit amet,                           │
│  consectetur adipisicing elit.                         │
│                                                        │
│  [Live Demo]  [Get Now]                               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### On Mobile

```
┌─────────────────────┐
│  Modern Design      │
│                     │
│  Lorem ipsum dolor  │
│  sit amet           │
│                     │
│  [Hero Image]       │
│                     │
│  [Live Demo]        │
│  [Get Now]          │
└─────────────────────┘
```

### Features
- ✅ Large headline
- ✅ Subtitle text
- ✅ Two CTA buttons
- ✅ Image placeholder
- ✅ Responsive layout
- ✅ Button interactions

### File Location
`nextjs-frontend/components/HeroSection.tsx`

### Customize

**Change Headline:**
```tsx
// Line ~31
<h1 className="text-5xl md:text-6xl font-bold">
  Modern Design  {/* Change this */}
</h1>
```

**Change Button Text:**
```tsx
// Lines ~48, 58
<button> {/* Change button label */}
  Live Demo
</button>
```

**Add Your Image:**
```tsx
// Replace the blue placeholder with:
import Image from 'next/image'

<Image
  src="/images/hero.png"
  alt="Hero"
  fill
  className="object-cover"
/>
```

**Change Button Colors:**
```tsx
// Update className:
className="bg-primary hover:bg-secondary"  // Change colors
className="bg-white hover:bg-light"
```

---

## ⭐ Features Section Component

### What It Looks Like

```
                    Features
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit

┌─────────────┬─────────────┬─────────────┬─────────────┐
│   📱        │    ✨       │    🎨       │    ⚙️       │
│ Fully       │  Retina     │  Easily     │  Quality    │
│ Responsive  │  Ready      │  Customize  │  Code       │
│             │             │             │             │
│ Lorem ipsum │ Lorem ipsum │ Lorem ipsum │ Lorem ipsum │
│ dolor sit   │ dolor sit   │ dolor sit   │ dolor sit   │
│ amet...     │ amet...     │ amet...     │ amet...     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### On Mobile (Stacked)

```
┌────────────────┐
│      📱        │
│ Fully          │
│ Responsive     │
│ Lorem ipsum... │
└────────────────┘

┌────────────────┐
│      ✨        │
│ Retina Ready   │
│ Lorem ipsum... │
└────────────────┘

┌────────────────┐
│      🎨        │
│ Easily         │
│ Customize      │
│ Lorem ipsum... │
└────────────────┘

┌────────────────┐
│      ⚙️        │
│ Quality Code   │
│ Lorem ipsum... │
└────────────────┘
```

### Features
- ✅ 4 feature cards
- ✅ Icons in circles
- ✅ Title and description
- ✅ Hover effects (grows, shadow)
- ✅ Responsive grid (2, 2, or 4 columns)
- ✅ Blue icon backgrounds

### File Location
`nextjs-frontend/components/FeaturesSection.tsx`

### Customize

**Change Feature Cards:**
```tsx
// Lines ~6-23, add to features array:
{
  id: 5,
  title: 'Your Feature',
  description: 'Your description here',
  icon: '🚀',  // Change emoji
}
```

**Change Icons:**
```tsx
// Replace emoji icons with:
icon: '🚀',    // Rocket
icon: '💡',    // Lightbulb
icon: '🔒',    // Lock
icon: '⚡',    // Lightning
// etc.
```

**Change Card Colors:**
```tsx
// Line ~38, update className:
className="bg-light rounded-lg p-8 bg-blue-50"  // Change background
```

**Change Hover Effect:**
```tsx
// Line ~38, update className:
className="hover:shadow-2xl hover:scale-110"  // Increase scale
```

---

## 🔗 Footer Component

### What It Looks Like

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│  Bikin                Product              Company    │
│  Modern design       • Features            • About    │
│  landing page        • Pricing             • Blog     │
│  template            • Security            • Careers  │
│                                                       │
│                      Legal                           │
│                      • Privacy                       │
│                      • Terms                         │
│                      • Contact                       │
│                                                       │
├───────────────────────────────────────────────────────┤
│      © 2024 Bikin. All rights reserved.              │
└───────────────────────────────────────────────────────┘
```

### Features
- ✅ Multi-column layout
- ✅ Company info
- ✅ Navigation links
- ✅ Copyright text
- ✅ Dark background
- ✅ Responsive design

### File Location
`nextjs-frontend/components/Footer.tsx`

### Customize

**Change Company Description:**
```tsx
// Line ~17
<p>
  Your company description here
</p>
```

**Add/Remove Footer Links:**
```tsx
// Lines ~22-33, update link items:
<li>
  <a href="#" className="hover:text-white">
    Your Link Text
  </a>
</li>
```

**Change Copyright Year:**
```tsx
// Line ~55
<p>&copy; 2025 Bikin. All rights reserved.</p>
```

**Change Footer Colors:**
```tsx
// Line ~8, update className:
className="bg-gray-900 text-white"  // Change background/text color
```

---

## 🎨 Color Scheme

### Current Colors

```
Primary Blue:
████████████████████████████
HEX: #3B82F6  RGB: 59, 130, 246

Secondary Blue:
████████████████████████████
HEX: #1E40AF  RGB: 30, 64, 175

Light Gray:
████████████████████████████
HEX: #F3F4F6  RGB: 243, 244, 246

White:
████████████████████████████
HEX: #FFFFFF  RGB: 255, 255, 255

Dark Gray:
████████████████████████████
HEX: #374151  RGB: 55, 65, 81
```

### Where Colors Are Used

- **Primary Blue (#3B82F6)**
  - Logo text
  - Active menu items
  - Primary buttons
  - Feature card icons
  - Links on hover

- **Secondary Blue (#1E40AF)**
  - Button hover state
  - Accents
  - Section headers

- **Light Gray (#F3F4F6)**
  - Section backgrounds
  - Card backgrounds
  - Light overlays

- **White**
  - Main background
  - Text on dark backgrounds
  - Button text

- **Dark Gray**
  - Body text
  - Dark headings
  - Navigation text

### Change All Colors

Edit `nextjs-frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_NEW_COLOR',      // Change primary
      secondary: '#YOUR_NEW_COLOR',    // Change secondary
      light: '#YOUR_NEW_COLOR',        // Change light background
    },
  },
}
```

**Color Tools:**
- Figma Colors: https://www.figma.com/colors
- Color Picker: https://htmlcolorcodes.com
- Palette Generator: https://coolors.co

---

## 📐 Typography

### Font Sizes

```
Page Title (Hero)     → 48-64px (text-5xl to text-6xl)
Section Title         → 36-48px (text-4xl to text-5xl)
Card Title           → 20px (text-xl)
Body Text            → 16px (text-base)
Small Text           → 14px (text-sm)
```

### Font Weights

```
Bold (headings)      → font-bold
Semibold (buttons)   → font-semibold
Normal (body)        → default
```

### Font Family

Current: System fonts (best cross-platform performance)
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.
```

---

## 📊 Responsive Breakpoints

### How It Adapts

```
Mobile (< 640px)
├─ Single column layout
├─ Hamburger menu
├─ Stacked feature cards
└─ Smaller text sizes

Tablet (640px - 1024px)
├─ 2-column layouts
├─ Desktop menu
├─ Medium spacing
└─ Medium text sizes

Desktop (> 1024px)
├─ Multi-column layouts
├─ Full desktop menu
├─ Maximum spacing
└─ Largest text sizes
```

### Tailwind Breakpoints Used

- **sm**: 640px (small devices)
- **md**: 768px (medium devices)
- **lg**: 1024px (large devices)

---

## 🎯 Interactive Elements

### Button States

```
Default:
┌────────────┐
│ Live Demo  │  (Blue background)
└────────────┘

Hover:
┌────────────┐
│ Live Demo  │  (Darker blue)
└────────────┘
  shadow appears

Click:
┌────────────┐
│ Live Demo  │  (Pressed appearance)
└────────────┘

Loading:
┌────────────┐
│ Loading... │  (Disabled, opacity reduced)
└────────────┘
```

### Menu Item States

```
Default:
Home  (Gray text)

Hover:
Home  (Blue text, underline appears)

Active:
Home  (Blue text)
```

---

## 📸 Image Placeholders

### Hero Image Placeholder

Current: Blue gradient rectangle with icon

To replace:
1. Create your image (recommended: 600x400px)
2. Save to `nextjs-frontend/public/images/hero.png`
3. Update `HeroSection.tsx` to use `<Image>` component

### Recommended Image Dimensions

- Hero Image: 600x400px or 800x600px
- Feature Icons: 100x100px
- Logo: 200x60px (or your preference)

---

## 🚀 Animation Details

### Currently Implemented

1. **Navbar Menu**
   - Hamburger menu slides in/out
   - Menu items fade in on click

2. **Feature Cards**
   - Scale up slightly on hover (105%)
   - Shadow grows on hover
   - Smooth transition (300ms)

3. **Buttons**
   - Color change on hover
   - Smooth transition (300ms)

4. **Smooth Scrolling**
   - Click menu item → smooth scroll to section
   - Uses CSS `scroll-behavior: smooth`

### Add More Animations

Add to `styles/globals.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
```

Then use in components:
```tsx
<div className="fade-in">Your content</div>
```

---

## 🎓 Customization Examples

### Example 1: Change Primary Color to Green

Edit `nextjs-frontend/tailwind.config.js`:
```javascript
colors: {
  primary: '#10B981',      // Green
  secondary: '#059669',    // Dark green
}
```

Result: All blue elements become green!

### Example 2: Add a New Feature Card

Edit `FeaturesSection.tsx`:
```tsx
{
  id: 5,
  title: 'Lightning Fast',
  description: 'Your description here',
  icon: '⚡',
}
```

### Example 3: Change Button Text

Edit `HeroSection.tsx`:
```tsx
<button>
  Schedule Demo  {/* Was: Live Demo */}
</button>
```

### Example 4: Add More Menu Items

Edit `Navbar.tsx`:
```tsx
<button onClick={() => scrollToSection('faq')}>
  FAQ
</button>
```

---

## 📝 Component Checklist

When customizing, make sure to:

- [ ] Update text content
- [ ] Add your images
- [ ] Change colors to match brand
- [ ] Update button labels
- [ ] Add new sections
- [ ] Test on mobile
- [ ] Verify all links work
- [ ] Check hover states
- [ ] Test API integration
- [ ] Add your logo

---

This visual guide helps you understand and customize every part of your landing page!
