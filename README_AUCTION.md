# Catalogue d'Enchères de Véhicules au Mali

## 🚗 Project Overview
This project is a complete web application for the **Mali Customs Vehicle Auction Catalogue**. It allows users to browse available vehicles, view details, register, accept terms, and submit payment proof.

The design follows the official styling of the **Direction Générale des Douanes du Mali** to ensure authenticity and trust.

---

## 🌐 Website Access
The website is currently running locally. You can access it at:
```
http://localhost:3000
```

---

## 📄 Pages & Flow

### 1. Landing Page (`index.html`)
- **Purpose**: Welcome users and introduce the auction.
- **Features**: 
  - Hero banner with "Auction Teaser"
  - CTA to Catalogue
  - FAQ Section
  - Official Header/Footer

### 2. Catalogue (`catalogue.html`)
- **Purpose**: List all available vehicles.
- **Features**:
  - Grid of 15 vehicles (Toyota Hilux, Land Cruiser, Yaris, etc.)
  - Images, Prices, and Stock availability
  - "Voir les Détails" button for each vehicle

### 3. Vehicle Details (`detail.html`)
- **Purpose**: Show specific information about a selected vehicle.
- **Features**:
  - Detailed specs (Mileage, Condition, Fuel, etc.)
  - General model info
  - Document download links (PDF placeholders)
  - CTA to "Obtenir ce Véhicule" (Register)

### 4. Registration (`inscription.html`)
- **Purpose**: Collect user information.
- **Features**:
  - Form for Name, Phone, Email, City, NINA ID
  - Step indicator (1. Inscription)

### 5. Terms & Conditions (`conditions.html`)
- **Purpose**: Legal agreement.
- **Features**:
  - Summary of selected vehicle
  - Scrollable terms text
  - "Accept" checkbox (enables the proceed button)
  - Step indicator (2. Conditions)

### 6. Payment (`paiement.html`)
- **Purpose**: Payment instructions and proof submission.
- **Features**:
  - Bank details for transfer
  - File upload for payment proof
  - WhatsApp confirmation button
  - Step indicator (3. Paiement)

---

## 🎨 Assets
- **Images**: High-quality generated images for the hero banner and vehicles are stored in the `images/` directory.
- **CSS**: `css/style.css` contains all styles, including new components for the auction site.
- **JS**: `js/main.js` handles interactions.

---

## 🚀 Next Steps
- **Backend Integration**: Connect the forms to a real backend (PHP/Node.js) to save user data.
- **Database**: Replace the static JavaScript array in `catalogue.html` with a database query.
- **Dynamic Details**: Update `detail.html` to dynamically fetch vehicle data based on the ID.

---

**Developed for**: Direction Générale des Douanes du Mali (Project Mandate 2023-2025)
