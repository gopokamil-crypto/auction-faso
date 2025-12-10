# Burkina Faso Auction Website - Production Deployment Checklist

## ✅ Pre-Deployment Checklist

### Database Configuration
- [ ] Create Supabase account at [supabase.com](https://supabase.com)
- [ ] Create new project: `douanes-burkina-faso-encheres`
- [ ] Run SQL schema from `database/schema.sql` in Supabase SQL Editor
- [ ] Set up Row Level Security policies (see `SUPABASE_SETUP.md`)
- [ ] Copy Supabase URL and anon key
- [ ] Update `js/supabase-config.js` with real credentials
- [ ] Test database connection

### Contact Information
- [ ] Update WhatsApp number in `index.html`
- [ ] Update WhatsApp number in `database/schema.sql`
- [ ] Update Orange Money account in `database/schema.sql`
- [ ] Update contact email (if applicable)
- [ ] Test WhatsApp links on mobile

### Content Updates
- [ ] Add real vehicle images to `images/` folder
- [ ] Update vehicle catalogue with actual vehicles
- [ ] Set correct auction dates in `index.html`
- [ ] Set correct visit dates
- [ ] Set correct registration deadline
- [ ] Verify participation fee amount
- [ ] Update terms and conditions if needed

### Branding (Optional)
- [ ] Upload Burkina Faso customs logo
- [ ] Replace logo file: `Accueil _ Douanes_files/Douanes-Logo_1.gif`
- [ ] Update logo references in HTML files
- [ ] Replace hero banner image if desired
- [ ] Verify all colors are correct (red scheme)

### Security
- [ ] Implement admin authentication (Supabase Auth)
- [ ] Create admin user accounts
- [ ] Restrict admin panel access
- [ ] Review and tighten RLS policies
- [ ] Remove or secure any test data
- [ ] Ensure API keys are not in public repository

### Testing
- [ ] Test registration form submission
- [ ] Test vehicle catalogue display
- [ ] Test vehicle detail pages
- [ ] Test payment information display
- [ ] Test admin dashboard
- [ ] Test WhatsApp contact links
- [ ] Test on desktop browser
- [ ] Test on mobile browser
- [ ] Test on tablet browser
- [ ] Verify all images load
- [ ] Check all internal links
- [ ] Verify responsive design

### Performance
- [ ] Optimize images (compress large files)
- [ ] Test page load speed
- [ ] Verify mobile performance
- [ ] Check for console errors
- [ ] Test with slow internet connection

### SEO & Meta
- [ ] Update page titles for all pages
- [ ] Update meta descriptions
- [ ] Add favicon (optional)
- [ ] Verify Open Graph tags (for social sharing)
- [ ] Submit sitemap to search engines (optional)

---

## 🚀 Deployment Steps

### Choose Deployment Platform

#### Option A: Vercel
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Navigate to project: `cd douane-burkina-faso`
- [ ] Run deployment: `vercel`
- [ ] Follow prompts to deploy
- [ ] Configure custom domain (optional)
- [ ] Set up environment variables for Supabase keys

#### Option B: Netlify
- [ ] Create Netlify account
- [ ] Drag and drop `douane-burkina-faso` folder
- [ ] Configure build settings (if needed)
- [ ] Deploy site
- [ ] Configure custom domain (optional)
- [ ] Set up environment variables

#### Option C: GitHub Pages
- [ ] Create GitHub repository
- [ ] Push project files to repo
- [ ] Go to repo Settings → Pages
- [ ] Select branch and folder
- [ ] Wait for deployment
- [ ] Access at `username.github.io/repo-name`

#### Option D: Custom Server
- [ ] Set up VPS or hosting
- [ ] Install web server (nginx/apache)
- [ ] Upload project files
- [ ] Configure domain and SSL
- [ ] Set up firewall rules
- [ ] Configure backups

---

## ✅ Post-Deployment Checklist

### Verification
- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Test registration form works
- [ ] Verify database writes to Supabase
- [ ] Test admin panel access
- [ ] Check WhatsApp links on mobile
- [ ] Verify payment information displays
- [ ] Test catalogue and vehicle details
- [ ] Check responsive design on real devices

### Monitoring
- [ ] Set up Supabase monitoring
- [ ] Configure error tracking (optional: Sentry)
- [ ] Set up uptime monitoring (optional)
- [ ] Monitor database usage
- [ ] Track form submissions

### Documentation
- [ ] Document admin credentials (secure location)
- [ ] Document Supabase credentials (secure location)
- [ ] Create user guide for admin panel
- [ ] Document backup procedures
- [ ] Create incident response plan

### Marketing
- [ ] Share URL with stakeholders
- [ ] Create social media posts (if applicable)
- [ ] Update any existing links
- [ ] Notify users of new system
- [ ] Prepare support materials

---

## 🔧 Configuration Files to Update

### Required Updates
1. **`js/supabase-config.js`**
   ```javascript
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_ANON_KEY = 'your-anon-key-here';
   ```

2. **`database/schema.sql`**
   - Line 34: Update WhatsApp number
   - Line 34: Update Orange Money account
   - Line 39: Update contact WhatsApp

3. **`index.html`**
   - Line 60: Update WhatsApp link
   - Lines 47-56: Update auction dates

### Optional Updates
1. **Logo Files**
   - `Accueil _ Douanes_files/Douanes-Logo_1.gif`

2. **Banner Images**
   - `images/auction_hero_banner.jpg`

3. **Vehicle Images**
   - Add to `images/` folder

---

## ⚠️ Common Issues & Solutions

### Issue: Forms not submitting
**Solution**: Check Supabase credentials and RLS policies

### Issue: Images not loading
**Solution**: Verify image paths and file existence

### Issue: WhatsApp links not working
**Solution**: Ensure phone numbers include country code (+226)

### Issue: Admin panel not working
**Solution**: Verify database connection and RLS policies

### Issue: Slow page load
**Solution**: Optimize images, enable caching

### Issue: Mobile display issues
**Solution**: Clear cache, test on real device

---

## 📊 Success Criteria

Before marking deployment as complete:

- [ ] All pages accessible via production URL
- [ ] Registration form successfully saves to database
- [ ] Admin can view submissions in admin panel
- [ ] Payment information displays correctly
- [ ] Vehicle catalogue loads with images
- [ ] WhatsApp contact works on mobile
- [ ] Site is responsive on all devices
- [ ] No console errors in browser
- [ ] Database connection is stable
- [ ] SSL/HTTPS is active (if applicable)

---

## 📞 Support Contacts

**Technical Issues**:
- Supabase: [supabase.com/support](https://supabase.com/support)
- Hosting: Check your platform's support

**Project Documentation**:
- Setup Guide: `BURKINA_FASO_SETUP.md`
- Deployment Summary: `DEPLOYMENT_SUMMARY.md`
- Quick Start: `QUICK_START.md`

---

## 🎯 Final Steps

1. ✅ Complete all checklist items above
2. ✅ Test thoroughly on production
3. ✅ Document admin credentials
4. ✅ Create backup plan
5. ✅ Monitor for first 24-48 hours
6. ✅ Gather user feedback
7. ✅ Plan for maintenance and updates

---

**Deployment Date**: _________________
**Deployed By**: _________________
**Production URL**: _________________
**Admin Credentials Location**: _________________
**Status**: _________________ (Testing / Live / Issues)

---

## 📝 Notes

_Use this space to document any deployment-specific notes, issues encountered, or custom configurations:_

---

**Good luck with your deployment! 🚀**
