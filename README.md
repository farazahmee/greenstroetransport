<<<<<<< HEAD
# GreenStone Transport - Premium Bus & Coach Rental Services

A modern, responsive, static website for GreenStone Transport built with HTML5, CSS3, and JavaScript.

**Live Site:** [Ready for deployment on Vercel]
**Domain:** greenstonetransport.com
**Phone:** +971 58 295 3085
**Email:** info@greenstonetransport.com

---

## 🌟 Features

### Website Features
- ✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Outstanding design with smooth animations and transitions
- ✅ **Fast Performance** - Optimized for speed and SEO
- ✅ **Interactive Navigation** - Smooth scrolling and mobile hamburger menu
- ✅ **Contact Forms** - WhatsApp integration for instant messaging
- ✅ **Service Showcase** - 6 different transportation services
- ✅ **Fleet Gallery** - High-quality images of vehicles
- ✅ **Testimonials** - Customer reviews and ratings
- ✅ **Founder Section** - About Sheikh Haseeb Ur Rehman
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Social Links** - Facebook, Twitter, Instagram, LinkedIn integration

### Technical Features
- ✅ **Static HTML** - No server-side processing required
- ✅ **Pure CSS** - No CSS framework dependencies
- ✅ **Vanilla JavaScript** - No jQuery or external dependencies (except Font Awesome)
- ✅ **Smooth Animations** - CSS and JS animations throughout
- ✅ **Form Validation** - Client-side form validation
- ✅ **Lazy Loading** - Images load on scroll
- ✅ **Mobile Optimized** - Touch-friendly interface
- ✅ **Accessibility** - WCAG compliant design

---

## 📁 File Structure

```
greenstonetransport/
├── index.html              # Main homepage
├── styles.css              # All styling
├── script.js               # Interactive features
├── vercel.json             # Vercel configuration
├── package.json            # Project metadata
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🚀 Local Development

### Prerequisites
- Git installed
- Node.js (optional, for using npm scripts)
- A modern web browser

### Running Locally

#### Option 1: Using Python (Recommended)
```bash
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

#### Option 2: Using PHP
```bash
php -S localhost:8000
```
Then open: `http://localhost:8000`

#### Option 3: Using Node.js
```bash
npx http-server
```

#### Option 4: Using VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 🌐 Deployment on Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd greenstonetransport
   vercel
   ```

4. **Follow the prompts** and select your settings

### Method 2: Using Vercel Web Interface

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/greenstonetransport.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings
   - Navigate to "Domains"
   - Add your custom domain: `greenstonetransport.com`
   - Update DNS records as instructed

### Method 3: Using GitHub Desktop

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/greenstonetransport.git
   cd greenstonetransport
   ```

2. **Connect Vercel**
   - Push to GitHub using GitHub Desktop
   - Visit [vercel.com](https://vercel.com)
   - Import the repository
   - Deploy automatically

---

## 🎯 Post-Deployment Steps

### 1. Configure Custom Domain
1. Visit your Vercel dashboard
2. Go to Project Settings → Domains
3. Add `greenstonetransport.com`
4. Update your domain registrar's DNS:
   - **CNAME:** `cname.vercel.com`
   - Or use the nameservers Vercel provides

### 2. Enable HTTPS
- Automatically enabled by Vercel

### 3. Set Environment Variables (if needed)
- Go to Settings → Environment Variables
- Add any necessary variables

### 4. Configure Analytics
- Optional: Connect Google Analytics
- Add your GA tracking code in a `<script>` tag in `index.html`

### 5. Test the Website
- Visit `greenstonetransport.com`
- Test all links and forms
- Test on mobile devices
- Check page load speed

---

## 📱 Mobile Optimization

The website is fully optimized for mobile devices:
- Responsive grid layouts
- Touch-friendly buttons (min 44x44px)
- Mobile hamburger menu
- Optimized images
- Fast load times

---

## 🎨 Color Scheme

- **Primary Green:** #1a472a
- **Secondary Green:** #2d6a4f
- **Accent Green:** #40916c
- **Light Green:** #52b788
- **Gold Accent:** #d4af37
- **White:** #ffffff
- **Dark:** #1a1a1a

---

## 🔧 Customization Guide

### Change Contact Information
Edit the following in `index.html`:
```html
<!-- Phone number -->
<a href="tel:+971582953085">+971 58 295 3085</a>

<!-- Email -->
<a href="mailto:info@greenstonetransport.com">info@greenstonetransport.com</a>

<!-- WhatsApp number (in script.js) -->
const whatsappUrl = `https://wa.me/971582953085?text=...`;
```

### Change Founder Information
Update in the `<!-- Founder Section -->`:
```html
<h2>Sheikh Haseeb Ur Rehman</h2>
<p>Your founder description...</p>
```

### Update Fleet Information
Modify fleet cards in the `<!-- Fleet Section -->`:
```html
<div class="fleet-card">
    <div class="fleet-image">
        <img src="your-image-url" alt="Vehicle Name">
    </div>
    <h3>Vehicle Name</h3>
    <p class="fleet-capacity"><i class="fas fa-users"></i> X Passengers</p>
    <!-- ... -->
</div>
```

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-green: #1a472a;
    --secondary-green: #2d6a4f;
    --accent-green: #40916c;
    --light-green: #52b788;
    --gold: #d4af37;
    /* ... */
}
```

---

## ⚡ Performance Optimization

The website includes:
- **Image Optimization:** Using Unsplash for high-quality images
- **Lazy Loading:** Images load when visible
- **CSS Minification:** Ready for production
- **JavaScript Optimization:** Vanilla JS, no heavy libraries
- **Caching:** Configured via vercel.json

### Page Load Metrics
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## 🔒 Security Features

- **HTTPS:** Automatically enabled on Vercel
- **Headers:** Security headers configured in vercel.json
- **CSP:** Content Security Policy ready
- **XSS Protection:** Enabled via headers
- **Clickjacking Protection:** X-Frame-Options set

---

## 📊 SEO Optimization

The website includes:
- ✅ Meta descriptions
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Structured data
- ✅ Mobile viewport
- ✅ Robots meta tag
- ✅ Semantic HTML
- ✅ Fast load times

---

## 🎯 Key Sections

### 1. **Hero Section**
- Compelling headline
- Subtitle with value proposition
- Call-to-action buttons
- Animated background

### 2. **Statistics**
- Quick stats showcasing company achievements
- Animated counter effects

### 3. **Services**
- 6 main services described
- Icons for visual appeal
- Hover effects

### 4. **Fleet**
- 6 different vehicle options
- Real images of buses and coaches
- Pricing information
- Feature highlights

### 5. **Why Choose Us**
- 6 key benefits
- Professional layout
- Supporting image

### 6. **Testimonials**
- 3 customer reviews
- Star ratings
- Customer names and positions

### 7. **About Us**
- Company description
- Key highlights
- Supporting image

### 8. **Contact Section**
- Contact information cards
- Contact form with validation
- WhatsApp integration

### 9. **Founder Section**
- Founder image
- Founder name: Sheikh Haseeb Ur Rehman
- Vision and mission
- Professional presentation

### 10. **Footer**
- Quick links
- Contact information
- Social media links
- Copyright notice

---

## 🤝 Support & Maintenance

### Regular Updates
- Review analytics monthly
- Update testimonials as new ones come in
- Refresh fleet images with new vehicles
- Monitor form submissions

### Backup
- Vercel automatically maintains version history
- Source code backed up on GitHub

### Monitoring
- Use Vercel Analytics dashboard
- Monitor page speed
- Check for broken links
- Review user behavior

---

## 📝 Content Management

### Adding a New Service
1. Edit `index.html`
2. Add a new `<div class="service-card">` in the services grid
3. Update content and icon
4. Styling will apply automatically

### Adding a New Fleet Vehicle
1. Edit `index.html`
2. Add a new `<div class="fleet-card">` in the fleet grid
3. Update vehicle details and image URL
4. Styling will apply automatically

### Updating Testimonials
1. Edit `index.html`
2. Find the testimonials section
3. Update existing testimonials or add new ones
4. Maintain the same HTML structure

---

## 🚨 Troubleshooting

### Images not loading
- Check image URLs are correct
- Ensure URLs are HTTPS
- Use Unsplash URLs or other CDNs

### Form not working
- Check browser console for errors
- Verify WhatsApp number format
- Test on different browsers

### Styling issues
- Clear browser cache
- Check CSS file is linked correctly
- Verify no CSS conflicts

### Mobile menu not working
- Check JavaScript is enabled
- Verify hamburger HTML structure
- Test on different devices

---

## 📞 Contact

**Company:** GreenStone Transport
**Phone:** +971 58 295 3085
**Email:** info@greenstonetransport.com
**Founder/CEO:** Sheikh Haseeb Ur Rehman

---

## 📜 License

MIT License - Feel free to use and modify

---

## 🎉 Deployment Checklist

Before going live:
- [ ] Update all contact information
- [ ] Check all links work correctly
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Check images load correctly
- [ ] Verify phone links work
- [ ] Test email links
- [ ] Check social media links
- [ ] Review all content for typos
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Configure custom domain
- [ ] Set up email forwarding
- [ ] Enable HTTPS
- [ ] Set up analytics
- [ ] Submit sitemap to Google
- [ ] Test form submissions

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub:** https://github.com
- **Unsplash Images:** https://unsplash.com
- **Font Awesome:** https://fontawesome.com
- **Google Analytics:** https://analytics.google.com

---

## 💡 Tips for Success

1. **Regular Content Updates:** Keep services and testimonials fresh
2. **Monitor Analytics:** Track visitor behavior and optimize
3. **Maintain Responsiveness:** Test on all devices regularly
4. **Optimize Images:** Use high-quality but compressed images
5. **Update SEO:** Keep meta descriptions and keywords current
6. **Gather Reviews:** Encourage customers to leave testimonials
7. **Maintain Security:** Keep domain renewal active
8. **Monitor Performance:** Use Vercel analytics regularly

---

**Created with ❤️ for GreenStone Transport**

**Last Updated:** April 2024
**Version:** 1.0.0
=======
# greenstroetransport
>>>>>>> 8e34dcaa3f62f18a62d219492950fddfa6c7e855
