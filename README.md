# Discipline.AI Marketing Website

This is the production-ready marketing website for [Discipline.AI](https://discipline.ai).
Built with Next.js 14, Tailwind CSS, and TypeScript.

## Project Structure

```bash
discipline-ai-site/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Global layout (Fonts, Navbar, Footer)
│   ├── page.tsx          # Home Page
│   ├── upsc/page.tsx     # UPSC Landing Page
│   ├── neet/page.tsx     # NEET Landing Page
│   ├── fitness/page.tsx  # Fitness Landing Page
│   ├── privacy/page.tsx  # Privacy Policy (Compliance)
│   └── globals.css       # Global styles & Tailwind
├── components/           # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WhatsAppMock.tsx  # Hero animation
│   └── ...
├── config/               # Site configuration (Links, Pricing)
├── utils/                # Helper functions
└── public/               # Static assets
```

## Setup & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit `config/site.ts` to update:
- WhatsApp Join Link (`WHATSAPP_JOIN_LINK` logic is hardcoded there)
- Pricing
- Contact Email

## Deployment to Azure Static Web Apps

This site is designed to be deployed as a Next.js Hybrid application on Azure Static Web Apps.

### Prerequisites
- Azure Account
- GitHub Repository linked to Azure

### Build Configuration

When setting up the Azure Static Web App in the Azure Portal:

1. **Build Presets**: Choose **Next.js**.
2. **App Location**: `/discipline-ai-site` (if this folder is in the root of your repo) or `./` if it is the root.
   * *Note: Since this is inside `Discipline_AI` repo, set App Location to `discipline-ai-site`.*
3. **Api Location**: Leave empty (unless you add API functions later).
4. **Output Location**: `.next` (or leave empty, Azure detects it for Next.js).

### Launch Checklist
- [ ] Update `config/site.ts` with the actual WhatsApp Business Link.
- [ ] Update `config/site.ts` with the real support email.
- [ ] Verify Privacy Policy details in `app/privacy/page.tsx`.
- [ ] Push to GitHub and verify Azure Build pipeline.
- [ ] Test mobile responsiveness on actual devices.
