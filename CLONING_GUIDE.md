# Client Template Cloning Guide

This repository contains 13 industry-specific demos designed to be easily cloned and adapted for new clients.

## 🚀 How to Start a New Client Project

### 1. Duplicate a Template
Choose the demo that best matches your new client's industry.
- **Copy** the folder: `src/demos/[existing-demo]`
- **Paste** and **Rename** it: `src/demos/[new-client-name]`

### 2. Rename the Component
Open `src/demos/[new-client-name]/index.jsx`:
- Rename the main component (e.g., `RestaurantDemo` -> `MyNewClientDemo`).
- Update the `UniversalAdmin` config with the client's branding (Name, Logo, Colors).

### 3. Register the Route
Open `src/App.jsx`:
- Import your new component:
  ```jsx
  import MyNewClientDemo from './demos/new-client-name';
  ```
- Add a new route:
  ```jsx
  <Route path="/new-client" element={<DemoLayout><MyNewClientDemo /></DemoLayout>} />
  ```

### 4. Customize Admin Tabs
In `src/demos/[new-client-name]/index.jsx`:
- Locate the `customTabs` array.
- Modify the tabs to match the client's specific needs (e.g., change "Menu" to "Services" or "Products").
- Update sample data in `rows` to look like real client data.

### 5. Update Content
- Replace `Hero.jsx`, `About.jsx`, etc., with the client's actual copy and images.
- All text and amenities are modular content components.

## 🎨 Design System
- **Colors**: Uses Tailwind utility classes.
- **Icons**: Uses `lucide-react`.
- **Animations**: Uses `framer-motion`.

## 📱 Mobile Responsiveness
All templates are mobile-first. When customizing, ensure you maintain the responsive classes (e.g., `grid-cols-1 md:grid-cols-2`).
