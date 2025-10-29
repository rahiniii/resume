# PWA Code Usage - Angular & React Examples

The PWA code (`manifest.json` and `sw.js`) can be used in **any framework**! Here's how to adapt it:

---

## ✅ What Works Everywhere

### 1. **manifest.json** - Works as-is
```json
{
  "name": "Your App Name",
  "short_name": "App",
  "theme_color": "#03045e",
  "background_color": "#ffffff",
  "start_url": "/",
  "display": "standalone",
  "icons": [...]
}
```
✅ Same in Angular, React, Vue, or vanilla HTML

### 2. **Meta Tags** - Same everywhere
```html
<meta name="theme-color" content="#03045e">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="manifest" href="manifest.json">
```
✅ Works in all frameworks

---

## 🔧 Framework-Specific Adjustments

---

## 📱 For **ANGULAR** Apps:

### Step 1: Add `manifest.json` to `src/`
```
angular-app/
  src/
    manifest.json  ← Copy your manifest.json here
    index.html
    ...
```

### Step 2: Update `angular.json` to include manifest
```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/manifest.json"  ← Add this
            ]
          }
        }
      }
    }
  }
}
```

### Step 3: Add meta tags to `src/index.html`
```html
<head>
  <meta name="theme-color" content="#03045e">
  <link rel="manifest" href="manifest.json">
  <!-- ... other tags -->
</head>
```

### Step 4: Create `sw.js` in `src/`
```javascript
// Same service worker code, but adjust paths for Angular build:
const CACHE_NAME = 'angular-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.js',      // Angular bundles to main.js
  '/polyfills.js', // Angular polyfills
  '/styles.css',    // Your styles
  '/favicon.ico'
];
// ... rest of your service worker code
```

### Step 5: Register in `main.ts` or `app.component.ts`
```typescript
// app.component.ts or main.ts
import { Component, OnInit } from '@angular/core';

@Component({...})
export class AppComponent implements OnInit {
  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered:', reg))
        .catch(err => console.log('SW registration failed:', err));
    }
  }
}
```

**Or use Angular Service Worker:**
```bash
ng add @angular/pwa
```
This creates an optimized service worker automatically!

---

## ⚛️ For **REACT** Apps (Create React App):

### Step 1: Add `manifest.json` to `public/`
```
react-app/
  public/
    manifest.json  ← Copy your manifest.json here
    index.html
    ...
```

### Step 2: Update `public/index.html`
```html
<head>
  <meta name="theme-color" content="#03045e">
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <!-- ... other tags -->
</head>
```

### Step 3: Create `public/sw.js`
```javascript
// Same code, adjust paths for React build:
const CACHE_NAME = 'react-app-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',    // React bundles
  '/static/css/main.css',    // Your CSS
  '/favicon.ico'
];
// ... rest of service worker code
```

### Step 4: Register in `src/index.js` or `src/App.js`
```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Or use React build-in PWA (CRA):**
```bash
npm run build
# Service worker auto-generated if configured
```

---

## 🔥 For **VUE** Apps:

### Step 1: Add `manifest.json` to `public/`
### Step 2: Add meta tags to `public/index.html`
### Step 3: Create `public/sw.js`
### Step 4: Register in `src/main.js`

**Or use Vue PWA plugin:**
```bash
vue add pwa
```

---

## 📋 Quick Comparison

| Feature | HTML/Static | Angular | React | Vue |
|---------|-------------|---------|-------|-----|
| `manifest.json` | ✅ Root | ✅ `src/` | ✅ `public/` | ✅ `public/` |
| Meta tags | ✅ `<head>` | ✅ `index.html` | ✅ `index.html` | ✅ `index.html` |
| Service Worker | ✅ Root | ✅ `src/` or use `@angular/pwa` | ✅ `public/` | ✅ `public/` |
| Registration | ✅ `<script>` tag | ✅ `main.ts` or component | ✅ `index.js` | ✅ `main.js` |

---

## 🎯 Key Points:

1. ✅ **manifest.json** works everywhere (just place it correctly)
2. ✅ **Meta tags** are identical in all frameworks
3. ⚠️ **Service worker paths** may need adjustment based on build output
4. ✅ **Registration code** is the same JavaScript everywhere

---

## 💡 Best Practice:

Use framework-specific PWA tools when available:
- **Angular**: `@angular/pwa` (auto-generates optimized SW)
- **React**: Create React App has built-in PWA support
- **Vue**: `@vue/cli-plugin-pwa`

But your manual code works perfectly too! 🚀

