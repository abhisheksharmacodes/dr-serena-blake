# Dr. Serena Blake — Psychological Services Website

A modern, elegant website for a psychological services practice, built with Next.js and Tailwind CSS. Features a responsive landing page, service descriptions, rates and insurance info, FAQ accordion, contact form with validation and reCAPTCHA, and a visually engaging design.

---

## 🚀 Features

- 🧑‍⚕️ **Professional Introduction:** Beautiful hero section and about area for Dr. Serena Blake.
- 📝 **Service Descriptions:** Clear, accessible information about therapy focus areas.
- 💲 **Rates & Insurance:** Transparent session fees and insurance details, with Mentaya out-of-network tool integration.
- ❓ **FAQ Accordion:** Expandable/collapsible FAQ section for common client questions.
- 📬 **Contact Form:** Secure, validated contact form with Google reCAPTCHA v2.
- 🌊 **Quote & Visuals:** Inspirational quote section and elegant, calming imagery.
- 📱 **Responsive Design:** Optimized for all devices.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Forms & Validation:** React state, custom validation, [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)
- **Styling:** Tailwind CSS, custom fonts
- **Deployment:** Vercel, Netlify, or any Next.js-compatible host

---

## 📁 Folder Structure

```
/therapy
  /public         # Static assets (images, fonts, video)
  /src/app        # Main Next.js app (pages, components, styles)
  package.json    # Project dependencies
  README.md       # Project documentation
  ...
```

---

## 🏁 How to Run Locally

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/abhisheksharmacodes/dr-serena-blake.git
cd therapy

# Install dependencies
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

- App will be available at [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment

- Deploy to [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), or any platform supporting Next.js.
- Set any required environment variables (e.g., for reCAPTCHA site key) in your deployment environment.

---

## 📝 Customization

- **Content:** Edit `src/app/page.tsx` for main content, services, rates, FAQ, and contact form.
- **Images:** Place images and video in `/public`.
- **Fonts:** Add or adjust custom fonts in `/public/fonts` and reference in `globals.css`.
- **reCAPTCHA:** Set your site key in the contact form component.

---

## 🤝 Credits

> Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and ❤️ for mental health.
