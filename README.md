# Growthik Media – Digital Marketing & Web Development Agency

### Modern Website Built with Next.js 16 • Turbo • Tailwind CSS

Welcome to the official repository of **Growthik Media's Website**, a fast, SEO-optimized, modern digital experience built using **Next.js (App Router)**.

This website represents our company portfolio, services, projectsand digital marketing offerings.

---

## 🏆 About Growthik Media

**Growthik Media** is a full-service Digital Marketing & Web Development agency.  
We help brands grow with:

- Performance Marketing (Meta Ads, Google Ads)
- 📈 SEO Optimization
- 🌐 Custom Website Development (Next.js, React, Node)
- 🎨 Brand Strategy & Creative Content
- 📱 Social Media Marketing
- 🧩 Complete Digital Marketing Solutions

Visit us at: **https://growthikmedia.com**

---

## 📦 Tech Stack Used

| Technology                  | Purpose              |
| --------------------------- | -------------------- |
| **Next.js 16 (App Router)** | Main framework       |
| **React 19**                | UI Components        |
| **Tailwind CSS**            | Styling              |
| **Turbopack**               | Fast bundling        |
| **TypeScript**              | Type safety          |
| **Prisma**                  | Database ORM         |
| **Vercel**                  | Deployment           |
| **Google Analytics + GTM**  | Tracking & analytics |
| **SEO + Structured Data**   | Improved ranking     |

---

## 📁 Project Structure

```
.next/
app/
├── (public)/
│   ├── layout.tsx                    # Public layout with header/footer
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── services/
│   │   ├── page.tsx                  # Services listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual service page
│   ├── portfolio/
│   │   ├── page.tsx                  # Portfolio listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual portfolio item
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog post
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   └── not-found.tsx                 # Public 404 page
│
├── admin/
│   ├── layout.tsx                    # Admin layout (requires auth)
│   ├── page.tsx                      # Admin redirect to dashboard
│   ├── login/
│   │   └── page.tsx                  # Admin OTP login
│   ├── verify-otp/
│   │   └── page.tsx                  # Admin OTP verification
│   ├── dashboard/
│   │   └── page.tsx                  # Admin dashboard
│   ├── users/
│   │   ├── page.tsx                  # User list
│   │   ├── create/
│   │   │   └── page.tsx              # Create user (Admin only)
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx          # Edit user (Admin only)
│   ├── services/
│   │   ├── page.tsx                  # Service management list
│   │   ├── create/
│   │   │   └── page.tsx              # Create service
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx          # Edit service
│   ├── portfolio/
│   │   ├── page.tsx                  # Portfolio management list
│   │   ├── create/
│   │   │   └── page.tsx              # Create portfolio item
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx          # Edit portfolio item
│   ├── blog/
│   │   ├── page.tsx                  # Blog management list
│   │   ├── create/
│   │   │   └── page.tsx              # Create blog post
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx          # Edit blog post
│   ├── settings/
│   │   └── page.tsx                  # Site settings
│   └── not-found.tsx                 # Admin 404 page
│
├── api/
│   ├── auth/
│   │   ├── send-otp/
│   │   │   └── route.ts              # Send OTP (email/mobile)
│   │   ├── verify-otp/
│   │   │   └── route.ts              # Verify OTP
│   │   ├── logout/
│   │   │   └── route.ts              # Logout
│   │   └── session/
│   │       └── route.ts              # Get current session
│   ├── admin/
│   │   ├── users/
│   │   │   ├── route.ts              # List/Create users
│   │   │   └── [id]/
│   │   │       └── route.ts          # Get/Update/Delete user
│   │   ├── services/
│   │   │   ├── route.ts              # List/Create services
│   │   │   └── [id]/
│   │   │       └── route.ts          # Get/Update/Delete service
│   │   ├── portfolio/
│   │   │   ├── route.ts              # List/Create portfolio items
│   │   │   └── [id]/
│   │   │       └── route.ts          # Get/Update/Delete portfolio
│   │   └── blog/
│   │       ├── route.ts              # List/Create blog posts
│   │       └── [id]/
│   │           └── route.ts          # Get/Update/Delete blog post
│   ├── public/
│   │   ├── services/
│   │   │   ├── route.ts              # Public services list
│   │   │   └── [slug]/
│   │   │       └── route.ts          # Public service detail
│   │   ├── portfolio/
│   │   │   ├── route.ts              # Public portfolio list
│   │   │   └── [slug]/
│   │   │       └── route.ts          # Public portfolio detail
│   │   ├── blog/
│   │   │   ├── route.ts              # Public blog list
│   │   │   └── [slug]/
│   │   │       └── route.ts          # Public blog detail
│   │   └── contact/
│   │       └── route.ts              # Contact form submission
│   └── upload/
│       └── route.ts                  # File upload (images, etc.)
│
├── layout.tsx                        # Root layout
├── not-found.tsx                     # Global 404
├── robots.txt                        # SEO robots file
└── sitemap.ts                        # Dynamic sitemap

components/
├── admin/
│   ├── Header.tsx                    # Admin header
│   ├── Sidebar.tsx                   # Admin sidebar navigation
│   ├── UserForm.tsx                  # User create/edit form
│   ├── ServiceForm.tsx               # Service form
│   ├── PortfolioForm.tsx             # Portfolio form
│   ├── BlogForm.tsx                  # Blog post form
│   ├── RichTextEditor.tsx            # Rich text editor component
│   ├── ImageUpload.tsx               # Image upload component
│   └── DataTable.tsx                 # Reusable data table
│
├── public/
│   ├── Header.tsx                    # Public site header
│   ├── Footer.tsx                    # Public site footer
│   ├── Hero.tsx                      # Hero section
│   ├── ServiceCard.tsx               # Service card component
│   ├── PortfolioCard.tsx             # Portfolio card component
│   ├── BlogCard.tsx                  # Blog card component
│   ├── ContactForm.tsx               # Contact form
│   └── CTASection.tsx                # Call-to-action section
│
└── common/
    ├── Button.tsx                    # Reusable button
    ├── Input.tsx                     # Form input
    ├── Modal.tsx                     # Modal component
    ├── Loading.tsx                   # Loading spinner
    ├── Alert.tsx                     # Alert/notification
    └── SEO.tsx                       # SEO meta tags component

lib/
├── auth.ts                           # Auth utilities
├── db.ts                             # Prisma client instance
├── otp.ts                            # OTP generation/validation
├── email.ts                          # Email service (SendGrid/Resend)
├── sms.ts                            # SMS service (Twilio)
├── upload.ts                         # File upload utilities
├── validation.ts                     # Zod schemas
└── utils.ts                          # General utilities

middleware.ts                         # Auth middleware for protected routes

prisma/
├── schema.prisma                     # Database schema
└── seed.ts                           # Database seed file

types/
├── index.ts                          # All TypeScript types
└── global.d.ts                       # Global type declarations

public/
├── images/
│   ├── logo.svg
│   └── placeholder.jpg
└── icons/
    └── favicon.ico

.env.local                            # Environment variables
.gitignore
next.config.ts
package.json
tsconfig.json
tailwind.config.js
postcss.config.mjs
README.md
```

### 📂 Key Directories Explained

#### `/app` Directory

- **(public)/** - Public-facing pages with shared layout
- **admin/** - Protected admin panel with authentication
- **api/** - API routes for backend functionality

#### `/components` Directory

- **admin/** - Admin panel specific components
- **public/** - Public website components
- **common/** - Shared reusable components

#### `/lib` Directory

Core utility functions and configurations for auth, database, file uploadsand external services.

#### `/prisma` Directory

Database schema and seeding scripts for development.

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm/yarn/pnpm/bun package manager
- PostgreSQL database (or your preferred database)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/growthik-media-website.git
cd growthik-media-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file with:

```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email Service (SendGrid/Resend)
EMAIL_API_KEY="your-email-api-key"

# SMS Service (Twilio)
TWILIO_ACCOUNT_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"

# File Upload
UPLOAD_DIR="./public/uploads"
```

5. Set up the database:

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

6. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Panel

Access the admin panel at `/admin/login`

Default credentials will be created during database seeding.

### Features:

- OTP-based authentication (Email/SMS)
- User management (Admin only)
- Content management (Services, Portfolio, Blog)
- File upload system
- Role-based access control

---

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/growthik-media-website)

### Environment Variables on Vercel

Make sure to add all environment variables from `.env.local` to your Vercel project settings.

---

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npx prisma studio    # Open Prisma Studio (Database GUI)
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Growthik Media**

- Website: [https://growthikmedia.com](https://growthikmedia.com)
- Email: contact@growthikmedia.com
- LinkedIn: [Growthik Media](https://linkedin.com/company/growthik-media)
- Instagram: [@growthikmedia](https://instagram.com/growthikmedia)

---

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Vercel for hosting and deployment
- All open-source contributors

---

**Built with ❤️ by Growthik Media Team**
