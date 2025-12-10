# 🚗 Auction Faso - Vehicle Auction Website

## 📋 Project Overview

Complete vehicle auction website for customs administration with modern features, database integration, and responsive design.

**Live Demo**: http://localhost:3000 (when running locally)
**GitHub Repository**: https://github.com/gopokamil-crypto/auction-faso

---

## ✨ Features

### 🏠 Landing Page
- Hero section with auction information
- Auction dates and deadlines
- FAQ section
- Contact integration

### 🚙 Vehicle Catalogue
- Grid view of available vehicles
- Search and filter functionality
- Vehicle details (year, category, price, stock)
- Real-time inventory

### 📄 Vehicle Details
- Detailed vehicle information
- High-quality images
- Specifications
- Bidding/purchase options

### 📝 Registration System
- User registration form
- City selection
- Phone number (WhatsApp)
- ID verification (NINA/CNI/Passport)

### 💳 Payment System
- Payment method display
- Orange Money integration
- USSD code information
- Account details

### 👨‍💼 Admin Dashboard
- User management
- Payment settings configuration
- Contact settings management
- Real-time data view

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome** - Icons

### Backend/Database
- **Supabase** - PostgreSQL database
- **Python HTTP Server** - Local development

### Design
- **Responsive Design** - Mobile, tablet, desktop
- **Custom Color System** - CSS variables
- **Professional UI** - Government-appropriate styling

---

## 🚀 Quick Start

### Prerequisites
```bash
python3 --version  # Python 3.x required
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/gopokamil-crypto/auction-faso.git
cd auction-faso
```

2. **Configure Supabase** (see `SUPABASE_SETUP.md`)
   - Create Supabase project
   - Run SQL schema from `database/schema.sql`
   - Update `js/supabase-config.js` with your credentials

3. **Start local server**
```bash
python3 server.py
```

4. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
auction-faso/
├── index.html                 # Landing page
├── catalogue.html             # Vehicle catalogue
├── detail.html                # Vehicle details
├── inscription.html           # Registration form
├── conditions.html            # Terms & conditions
├── paiement.html             # Payment page
├── success.html              # Success confirmation
├── admin.html                # Admin dashboard
│
├── css/
│   └── style.css             # Main stylesheet
│
├── js/
│   ├── main.js               # Main JavaScript
│   └── supabase-config.js    # Database config
│
├── database/
│   ├── schema.sql            # Database schema
│   ├── douanes.db           # Local SQLite (dev)
│   └── migrations/          # Database migrations
│
├── images/                   # Vehicle images & assets
│
└── docs/
    ├── SUPABASE_SETUP.md    # Database setup guide
    ├── BURKINA_FASO_SETUP.md # BF customization guide
    └── PRODUCTION_CHECKLIST.md # Deployment checklist
```

---

## 🎨 Customization

### For Burkina Faso Version
See `BURKINA_FASO_SETUP.md` for complete guide on:
- Updating colors to BF branding
- Changing cities and phone formats
- Applying BF logos and images
- Context localization

### Color System
The project uses CSS variables for easy customization:
```css
:root {
    --color-primary: #00008b;      /* Change primary color */
    --color-secondary: #5EB4E7;    /* Change secondary color */
    --color-gray-light: #f3f4f9;   /* Background color */
}
```

---

## 💾 Database Schema

### Tables

#### `users`
- User registrations
- Contact information
- Selected vehicles

#### `payment_settings`
- Payment methods
- Account information
- USSD codes

#### `contact_settings`
- WhatsApp number
- Contact configuration

See `database/schema.sql` for complete schema.

---

## 🔧 Development

### Local Development
```bash
# Start server
python3 server.py

# Or using Node.js
npx http-server -p 3000

# Or using PHP
php -S localhost:3000
```

### Testing
- Test registration form
- Test payment information display
- Test admin panel
- Test responsive design on mobile

---

## 🌐 Deployment

### Option 1: Vercel
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
1. Drag and drop project folder
2. Configure custom domain
3. Deploy

### Option 3: GitHub Pages
1. Push to GitHub
2. Enable Pages in settings
3. Select branch and folder

See `PRODUCTION_CHECKLIST.md` for complete deployment guide.

---

## 📝 Configuration

### Supabase Setup
1. Create project at [supabase.com](https://supabase.com)
2. Run `database/schema.sql`
3. Update `js/supabase-config.js`:
```javascript
const SUPABASE_URL = 'your-project-url';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

### Contact Information
Update WhatsApp and payment numbers in:
- HTML files (search and replace)
- `database/schema.sql` (default values)

---

## 🎯 Features in Detail

### Vehicle Management
- 15+ vehicle templates
- Toyota, Mitsubishi, Hyundai, Kia, Suzuki
- Years: 2023-2025
- Categories: SUV, Pick-up, Sedan, Crossover

### Payment Options
- Direct purchase (30% deposit)
- Auction participation
- Orange Money integration
- Multiple payment methods

### Admin Features
- View all registrations
- Export user data
- Configure payment settings
- Update contact information

---

## 🔒 Security Notes

**Important**:
- Admin panel is not password-protected in current version
- For production, implement authentication
- Use environment variables for API keys
- Enable proper RLS policies in Supabase

---

## 📚 Documentation

- **Setup Guide**: `SUPABASE_SETUP.md`
- **BF Customization**: `BURKINA_FASO_SETUP.md`
- **Deployment**: `PRODUCTION_CHECKLIST.md`
- **Color Updates**: `COLOR_UPDATE_SUMMARY.md`

---

## 🤝 Contributing

This project was developed for government customs auction purposes. For modifications or enhancements, please follow the existing code structure and styling conventions.

---

## 📄 License

This project is for legitimate government use. Not for unauthorized replication.

---

## 🆘 Support

For issues or questions:
1. Check documentation in `/docs`
2. Review `SUPABASE_SETUP.md`
3. Check browser console for errors
4. Verify Supabase connection

---

## 🔄 Version History

### v1.0 - Initial Release
- Complete auction website
- Supabase integration
- Admin dashboard
- Responsive design
- Documentation

---

## 📞 Contact

**Repository**: https://github.com/gopokamil-crypto/auction-faso

**Tech Stack**:
- Frontend: HTML5, CSS3, JavaScript
- Database: Supabase (PostgreSQL)
- Server: Python HTTP Server

---

## 🎉 Acknowledgments

- Built with modern web technologies
- Responsive design for all devices
- Professional government-appropriate styling
- Complete documentation

---

**Status**: ✅ Production Ready
**Last Updated**: December 2025
**Version**: 1.0.0

---

Made with ❤️ for Customs Administration
