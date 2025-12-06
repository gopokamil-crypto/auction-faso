# Mali Customs Website - Complete Style Guide & Documentation

## Project Overview
This is a clean, modern implementation of the Mali Customs (Douanes du Mali) website. The original website has been analyzed, and all styling has been extracted and reorganized into a maintainable structure using HTML, CSS, and JavaScript.

---

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: `#00008b` - Used for main navigation, headers, and primary actions
- **Primary Blue Dark**: `#043d56` - Hover state for primary elements
- **Secondary Blue**: `#5EB4E7` - Used for icons, social media, and accents

### Accent Colors (Line Decorations)
- **Green**: `#79AF33` - First line in title decorations
- **Yellow**: `#fbff00` - Second line in title decorations
- **Red**: `#ff0000` - Third line in title decorations

### Neutral Colors
- **White**: `#ffffff`
- **Black**: `#000000`
- **Light Gray**: `#f3f4f9` - Background color for main sections
- **Gray**: `#999999` - Secondary text
- **Dark Gray**: `#a6a6a6` - Hover states
- **Text Dark**: `#333333` - Primary text color

---

## 📝 Typography

### Font Family
- **Primary Font**: `Poppins, sans-serif`
- Weights used: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

### Font Sizes
- **Base**: 14px
- **Small**: 12px
- **Medium**: 16px
- **Large**: 20px
- **Extra Large**: 24px
- **Hero**: 48px

### Line Heights
- **Base**: 1.6
- **Headings**: 1.2

---

## 📐 Spacing System

### Spacing Scale
- **XS**: 5px
- **SM**: 10px
- **MD**: 20px
- **LG**: 30px
- **XL**: 50px

### Container
- **Max Width**: 1200px
- **Padding**: 20px (left/right)

---

## 🎭 Component Styles

### Header
- **Background**: Light Gray (#f3f4f9)
- **Logo Height**: Max 80px
- **Position**: Sticky (stays at top when scrolling)
- **Shadow**: 0 2px 5px rgba(0, 0, 0, 0.1)

### Navigation Menu
- **Background**: White
- **Menu Item Font Size**: 13.2px
- **Menu Item Background**: Light Gray (#f3f4f9)
- **Menu Item Padding**: 10px
- **Submenu Width**: Min 300px
- **Submenu Transition**: 0.9s ease-out
- **Hover Color**: Primary Blue Dark (#043d56)

### Hero Section
- **Background**: Linear gradient from Primary Blue to Secondary Blue
- **Min Height**: 500px
- **Title Font Size**: 48px (Desktop), 28px (Mobile)
- **Animation**: Fade in from bottom

### News Cards
- **Background**: White
- **Border Radius**: 5px
- **Shadow**: 0 2px 5px rgba(0, 0, 0, 0.1)
- **Hover Effect**: Translate up 5px, increased shadow
- **Image Height**: 200px
- **Grid**: Auto-fit, minimum 280px columns

### Service Icons
- **Icon Size**: 40px
- **Icon Color**: Secondary Blue (#5EB4E7)
- **Hover Icon Color**: Primary Blue (#00008b)
- **Grid**: Auto-fit, minimum 150px columns

### Organization Cards
- **Background**: White
- **Border Radius**: 5px
- **Padding**: 20px
- **Title Color**: Primary Blue
- **Border Bottom**: 2px solid Light Gray

### Useful Links Section
- **Background**: Black (#000000)
- **Text Color**: White
- **Card Background**: rgba(255, 255, 255, 0.1)
- **Image Height**: 200px

### Footer
- **Background**: Primary Blue (#00008b)
- **Text Color**: White
- **Padding**: 30px 0
- **Border Top**: 1px solid rgba(255, 255, 255, 0.2)

---

## 📱 Responsive Breakpoints

### Desktop
- **Above 991px**: Full desktop layout

### Tablet
- **768px - 991px**: 
  - Hero title: 36px
  - News grid: 2 columns
  - Services grid: 4 columns

### Mobile
- **Below 768px**:
  - Mobile menu with hamburger icon
  - All grids: 1 column (except services: 2 columns)
  - Hero title: 28px
  - Reduced spacing

### Small Mobile
- **Below 480px**:
  - Hero title: 24px
  - Services grid: 1 column
  - Further reduced spacing

---

## 🎯 Key Features

### 1. **Sticky Header**
The header stays visible when scrolling down the page for easy navigation access.

### 2. **Mobile-First Navigation**
- Hamburger menu on mobile devices
- Smooth transitions for submenu appearance
- Touch-friendly menu items

### 3. **Smooth Animations**
- Fade-in effects on scroll
- Hover effects on all interactive elements
- Image zoom on hover

### 4. **Accessibility**
- Keyboard navigation support
- Skip to main content link
- Proper ARIA labels
- High contrast ratios

### 5. **Performance**
- Lazy loading for images
- Debounced scroll and resize handlers
- Optimized animations

---

## 🔧 File Structure

```
/douane-mali/
│
├── index.html                 # Main HTML file
│
├── css/
│   └── style.css             # Complete stylesheet with all styles
│
├── js/
│   └── main.js               # JavaScript for interactions
│
└── Accueil _ Douanes_files/  # Original assets
    ├── Douanes-Logo_1.gif
    ├── ss.jpg
    ├── s_2.jpg
    ├── 1AEC1A43-5429-425D-8FC3-09D2068CCE0B.jpeg
    ├── playstore1-doxtzc.png
    ├── appstore1-fdie1o.png
    ├── unnamed-td2rgx.png
    ├── EN8_1000(1)-x8v0ds.jpg
    └── 81391427-commerce-global-de-container-cargo-train-de-marchandises-pour-l-exportation-logistique-d-importation-sz93aj.png
```

---

## 🚀 Getting Started

### Local Development

1. **Simple HTTP Server (Python)**:
   ```bash
   cd "/Users/MAC/Downloads/douane mali"
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

2. **Node.js HTTP Server**:
   ```bash
   npx http-server -p 8000
   ```
   Then visit: http://localhost:8000

3. **Live Server (VS Code Extension)**:
   - Install "Live Server" extension
   - Right-click on index.html
   - Select "Open with Live Server"

---

## 📋 CSS Variables Reference

All design tokens are defined as CSS custom properties for easy customization:

```css
:root {
    /* Colors */
    --color-primary: #00008b;
    --color-primary-dark: #043d56;
    --color-secondary: #5EB4E7;
    --color-accent-green: #79AF33;
    --color-accent-yellow: #fbff00;
    --color-accent-red: #ff0000;
    
    /* Typography */
    --font-primary: 'Poppins', sans-serif;
    --font-size-base: 14px;
    
    /* Spacing */
    --spacing-xs: 5px;
    --spacing-sm: 10px;
    --spacing-md: 20px;
    --spacing-lg: 30px;
    --spacing-xl: 50px;
    
    /* Container */
    --container-width: 1200px;
    
    /* Border Radius */
    --border-radius-sm: 3px;
    --border-radius-md: 5px;
    --border-radius-lg: 10px;
    
    /* Shadows */
    --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

---

## 🎨 Component Usage Examples

### Section Header with Decorative Line
```html
<div class="section-header">
    <h2 class="section-title">
        <span>Your Title Here</span>
    </h2>
    <div class="title-line">
        <span class="line-green"></span>
        <span class="line-yellow"></span>
        <span class="line-red"></span>
    </div>
</div>
```

### News Card
```html
<div class="news-card">
    <div class="news-image">
        <img src="image.jpg" alt="Description">
    </div>
    <div class="news-content">
        <h3 class="news-title">
            <a href="#">Title</a>
        </h3>
    </div>
</div>
```

### Service Item
```html
<div class="service-item">
    <div class="service-icon">
        <i class="fas fa-truck"></i>
    </div>
    <div class="service-title">
        <a href="#">SERVICE NAME</a>
    </div>
</div>
```

---

## 🌟 Design Principles

1. **Clean & Professional**: Official government website aesthetic
2. **User-Friendly**: Easy navigation and clear information hierarchy
3. **Accessible**: WCAG 2.1 AA compliant
4. **Responsive**: Mobile-first approach
5. **Fast**: Optimized performance with lazy loading
6. **Maintainable**: Well-organized code with CSS variables

---

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔄 Future Enhancements

Suggested improvements for the website:
1. Add search functionality
2. Implement language switcher (French/English)
3. Add carousel/slider for hero section
4. Integrate with CMS for content management
5. Add contact form validation
6. Implement news filtering and pagination
7. Add social media integration

---

## 📞 Support & Contact

For questions about this implementation, refer to the original website:
- **Website**: https://douanes.gouv.ml/
- **Email**: ccentreprises@douanes.ml
- **Phone**: (00223) 20 20 34 07

---

## 📜 License & Usage

This is a study/reference implementation of the Mali Customs website. The original design and content belong to the Direction Générale des Douanes du Mali.

**Purpose**: Educational and development reference for creating similar government/official websites.

---

## ✅ Checklist for Development

- [x] Extract and document all colors
- [x] Identify typography system
- [x] Define spacing scale
- [x] Create component library
- [x] Implement responsive design
- [x] Add animations and transitions
- [x] Optimize for performance
- [x] Ensure accessibility
- [x] Document code thoroughly
- [x] Create style guide

---

**Last Updated**: December 2024
**Version**: 1.0.0
