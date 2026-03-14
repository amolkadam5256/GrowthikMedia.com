import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Tag,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog/data";
import {
  formatDate,
  formatNumber,
  getInitials,
  stringToColor,
} from "@/lib/blog/utils";
import { CategoryBadge } from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import ReadingProgress from "@/components/Blog/ReadingProgress";
import ShareButtons from "@/components/Blog/ShareButtons";
import NewsletterForm from "@/components/Blog/NewsletterForm";

// ─── Full Blog Content Data (extends the data layer with HTML content) ────────

const POST_CONTENT: Record<string, React.ReactNode> = {
  "seo-audit-checklist": (
    <div className="blog-content">
      <p className="lead">
        A comprehensive SEO audit is the starting point for any successful SEO
        strategy. Without knowing what&apos;s broken, you can&apos;t fix it.
        This checklist covers every critical area — from technical foundations
        and on-page optimization to content quality and backlink profiles.
      </p>

      <h2>Section 1: Technical SEO Foundations</h2>
      <p>
        Technical SEO is the bedrock of all search performance. If Google
        can&apos;t crawl and index your site efficiently, even the best content
        won&apos;t rank.
      </p>
      <ul>
        <li>
          ✅ Is your site indexed by Google? (Check:{" "}
          <code>site:yourdomain.com</code>)
        </li>
        <li>✅ Is HTTPS enabled on all pages?</li>
        <li>
          ✅ Is there a robots.txt file? Does it block any important pages?
        </li>
        <li>✅ Is your XML sitemap submitted to Google Search Console?</li>
        <li>✅ Are there any crawl errors in Google Search Console?</li>
        <li>✅ Is the canonical tag properly set on all pages?</li>
        <li>✅ Are there duplicate pages (www vs non-www, HTTP vs HTTPS)?</li>
        <li>
          ✅ Is your site mobile-friendly? (Use Google&apos;s Mobile-Friendly
          Test)
        </li>
        <li>✅ What are your Core Web Vitals scores? (LCP, CLS, INP)</li>
        <li>✅ Is your page loading speed under 3 seconds?</li>
      </ul>

      <blockquote>
        A technically broken website is like a perfectly written book that no
        one can open. Fix the foundation before building the content.
      </blockquote>

      <h2>Section 2: On-Page SEO</h2>
      <p>
        On-page SEO ensures each page is properly optimized to target the right
        keywords and communicate relevance to Google.
      </p>
      <ul>
        <li>
          ✅ Does every page have a unique, keyword-rich title tag (50–60
          chars)?
        </li>
        <li>
          ✅ Does every page have a unique meta description (150–160 chars)?
        </li>
        <li>
          ✅ Is there a single H1 tag per page containing the target keyword?
        </li>
        <li>✅ Are H2/H3 headings used logically with secondary keywords?</li>
        <li>
          ✅ Is your target keyword used naturally in the first 100 words?
        </li>
        <li>✅ Are images compressed and do they have descriptive alt text?</li>
        <li>✅ Do internal links use descriptive anchor text?</li>
        <li>
          ✅ Are URLs short, descriptive, and keyword-rich (no IDs or ?=)?
        </li>
        <li>
          ✅ Is your content longer and more comprehensive than competing pages?
        </li>
        <li>
          ✅ Is schema markup (JSON-LD) implemented for your business type?
        </li>
      </ul>

      <h2>Section 3: Content Quality & E-E-A-T</h2>
      <p>
        Google&apos;s Helpful Content updates have made content quality more
        critical than ever. Thin, duplicate, or AI-spam content is actively
        penalized.
      </p>
      <ul>
        <li>
          ✅ Does your content demonstrate first-hand experience and expertise?
        </li>
        <li>
          ✅ Is there original research, data, or unique insights in your key
          pages?
        </li>
        <li>✅ Are there clear author bios with credentials?</li>
        <li>✅ Is your blog content regularly updated?</li>
        <li>
          ✅ Do you have thin content pages with under 300 words that need
          expansion?
        </li>
        <li>
          ✅ Are there any pages with duplicate or near-duplicate content?
        </li>
      </ul>

      <h2>Section 4: Backlink Profile</h2>
      <p>
        Your backlink profile is a powerful ranking signal. Both the quantity
        and quality of sites linking to you matter significantly.
      </p>
      <ul>
        <li>
          ✅ How many unique domains are linking to your site? (Check
          Ahrefs/SEMrush)
        </li>
        <li>✅ Are your top linking domains relevant to your industry?</li>
        <li>
          ✅ Are there any toxic or spammy backlinks pointing to your site?
        </li>
        <li>✅ Do competitors have significantly more backlinks than you?</li>
        <li>
          ✅ Have you submitted your business to key Indian directories
          (Justdial, IndiaMart)?
        </li>
        <li>✅ Is your Google Business Profile complete and optimized?</li>
      </ul>

      <h2>Section 5: Local SEO (For Pune Businesses)</h2>
      <p>
        Local SEO helps your business appear for &apos;near me&apos; and
        city-specific searches — critical for Pune-based businesses.
      </p>
      <ul>
        <li>
          ✅ Is your Google Business Profile fully completed with photos, hours,
          and services?
        </li>
        <li>
          ✅ Are your NAP details (Name, Address, Phone) consistent across all
          directories?
        </li>
        <li>
          ✅ Do you have 10+ Google reviews with responses from the business?
        </li>
        <li>
          ✅ Do you have location-specific pages for different Pune areas?
        </li>
        <li>
          ✅ Is LocalBusiness schema implemented on your contact/about page?
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Completing this SEO audit will give you a clear roadmap of what to fix
        and what to prioritize. The good news is that identifying these issues
        is the hard part — most fixes are straightforward once you know what to
        look for. At Growthik Media, we offer a free comprehensive SEO audit for
        Pune businesses. Book yours today and receive a detailed report within
        48 hours.
      </p>
    </div>
  ),
  "importance-of-seo": (
    <div className="blog-content">
      <p className="lead">
        In 2025, over 8.5 billion searches are performed on Google every single
        day. If your business doesn&apos;t appear in those results, a competitor
        does. Search Engine Optimization (SEO) is no longer optional — it&apos;s
        a fundamental business survival strategy.
      </p>
      <h2>What Is SEO and How Does It Work?</h2>
      <p>
        SEO is the process of optimizing your website so it ranks higher on
        search engines like Google for relevant keywords. SEO involves three
        core pillars: technical optimization (site speed, crawlability), on-page
        SEO (content, keywords, meta tags), and off-page SEO (backlinks,
        citations, brand mentions).
      </p>
      <h2>1. SEO Drives High-Intent, Free Traffic</h2>
      <p>
        Unlike paid advertising where traffic stops the moment your budget runs
        out, organic SEO traffic is essentially free and compounds over time.
      </p>
      <ul>
        <li>Organic traffic converts 5.8x better than paid ads on average</li>
        <li>SEO leads have a 14.6% close rate vs 1.7% for outbound leads</li>
        <li>70–80% of users skip paid ads and click on organic results</li>
      </ul>
      <blockquote>
        SEO is the only marketing channel where the results compound over time.
        Every backlink, every ranked page, every piece of content makes the next
        one easier.
      </blockquote>
      <h2>2. Builds Trust and Brand Credibility</h2>
      <p>
        When your website consistently appears on page 1 of Google for multiple
        relevant searches, users perceive your business as authoritative and
        trustworthy. Google&apos;s algorithms are increasingly rewarding E-E-A-T
        (Experience, Expertise, Authoritativeness, Trustworthiness).
      </p>
      <h2>3. Local SEO for Pune Businesses</h2>
      <p>
        For businesses serving local customers in Pune, Local SEO is the most
        impactful investment. When you optimize your Google Business Profile,
        build local citations, and create location-specific content, you appear
        in Google&apos;s &apos;Map Pack&apos; which gets 46% of all local search
        clicks.
      </p>
      <h2>4. Best ROI of Any Marketing Channel</h2>
      <p>
        SEO consistently delivers the highest long-term return on investment.
        While results take 3–6 months to fully materialize, the compounding
        effect means your investment works for you 24/7, years after you&apos;ve
        made it.
      </p>
      <h2>Conclusion</h2>
      <p>
        SEO is one of the few marketing investments that gets more valuable over
        time. Book a free SEO audit today and discover how much traffic
        you&apos;re missing.
      </p>
    </div>
  ),
  "how-to-choose-website-design-company": (
    <div className="blog-content">
      <p className="lead">
        Choosing the wrong website design company can cost you tens of thousands
        of rupees and months of productivity. Here are 7 critical factors to
        evaluate before you sign any contract.
      </p>
      <h2>1. Portfolio: Do They Have Proven Work?</h2>
      <p>
        A portfolio is your greatest window into a company&apos;s capabilities.
        Visit the actual live websites. Check how fast they load (use Google
        PageSpeed Insights), look at mobile responsiveness, and notice the
        quality of copywriting and UI design.
      </p>
      <h2>2. Reviews &amp; Client Testimonials</h2>
      <p>
        Third-party reviews on Google Maps, Clutch.co, or LinkedIn are more
        reliable than testimonials on the company&apos;s own website. Look for
        patterns — are clients happy with their communication? Did they deliver
        on time?
      </p>
      <h2>3. Their SEO Knowledge</h2>
      <p>
        A beautiful website that nobody finds is worthless. Ask them directly:
        &apos;What SEO practices do you include in every website you
        build?&apos;
      </p>
      <ul>
        <li>They should know Core Web Vitals (LCP, CLS, FID/INP)</li>
        <li>They should implement schema markup as standard</li>
        <li>Ask about their average PageSpeed score</li>
      </ul>
      <h2>4. Process &amp; Communication</h2>
      <p>
        Look for agencies with a defined process: discovery call → proposal →
        design mockups → feedback rounds → development → testing → launch.
      </p>
      <blockquote>
        The best indicator of a future project experience is the quality of
        communication during the sales process. If they&apos;re slow to respond
        now, they&apos;ll be worse once you&apos;ve signed.
      </blockquote>
      <h2>5. Timeline &amp; Realistic Expectations</h2>
      <p>
        Any reputable agency will tell you that a quality website takes at
        minimum 3–6 weeks for a business site. If someone promises a complete
        custom website in 5 days, that&apos;s a red flag.
      </p>
      <h2>6. Post-Launch Support</h2>
      <p>
        Ask about their maintenance packages. A good agency sees the
        relationship as long-term, not transactional.
      </p>
      <h2>7. Pricing Transparency</h2>
      <p>
        Demand a detailed breakdown: design cost, development hours, content
        migration, SEO setup, hosting setup, and monthly maintenance costs.
      </p>
    </div>
  ),
  "website-cost-in-pune": (
    <div className="blog-content">
      <p className="lead">
        One of the most common questions we hear is: &apos;How much does a
        website cost?&apos; In this guide, we break down every component of
        website pricing so you can make an informed decision.
      </p>
      <h2>Why Website Costs Vary So Much</h2>
      <p>
        A website&apos;s cost depends on your specific goals, the number of
        pages, complexity of features, design requirements, and who you hire to
        build it.
      </p>
      <h2>Basic Informational Website (₹8,000 – ₹35,000)</h2>
      <p>
        A basic website typically includes 5–10 pages: Home, About, Services,
        Blog, and Contact. These are built on WordPress or a website builder.
      </p>
      <ul>
        <li>Good for: Consultants, clinics, local shops</li>
        <li>Timeline: 1–3 weeks</li>
        <li>Includes: Responsive design, basic SEO setup, contact form</li>
      </ul>
      <h2>Business / Corporate Website (₹35,000 – ₹1,50,000)</h2>
      <p>
        A professional business website with custom design, performance
        optimization, on-page SEO, and features like team pages, case studies,
        and blogs.
      </p>
      <h2>eCommerce Website (₹80,000 – ₹5,00,000+)</h2>
      <p>
        An eCommerce site requires a product catalog, shopping cart, payment
        gateway integration (Razorpay, PayU, Stripe), inventory management, and
        order tracking.
      </p>
      <blockquote>
        Cost is what you pay. Value is what you get. A ₹15,000 website that
        generates zero leads has cost you more than a ₹1,50,000 website
        generating 50 leads per month.
      </blockquote>
      <h2>Hidden Costs to Budget For</h2>
      <ul>
        <li>Domain registration: ₹800–₹2,000/year</li>
        <li>Hosting: ₹3,000–₹30,000/year</li>
        <li>SSL certificate: Free to ₹15,000/year</li>
        <li>Website maintenance: ₹5,000–₹25,000/month</li>
      </ul>
    </div>
  ),
  "google-ads-vs-meta-ads": (
    <div className="blog-content">
      <p className="lead">
        Google Ads and Meta Ads are the two biggest paid advertising platforms in the world — but they work in fundamentally different ways. Choosing the wrong one (or wrong budget split) is one of the most expensive mistakes Pune businesses make.
      </p>
      <h2>The Core Difference: Intent vs. Interest</h2>
      <p>Google Ads shows your ads to people who are <strong>actively searching</strong> for what you offer. Meta Ads interrupts people while they&apos;re scrolling — so you need to create desire, not just capture it.</p>
      <blockquote>Google catches people when they&apos;re ready to buy. Meta builds the audience that will eventually be ready to buy.</blockquote>
      <h2>When Google Ads Wins</h2>
      <ul>
        <li>High-intent, transactional searches: &quot;website design company in Pune,&quot; &quot;emergency plumber near me&quot;</li>
        <li>Services where people search before buying (B2B, professional services)</li>
        <li>Local businesses targeting specific city-area searches</li>
        <li>Products with established search demand</li>
        <li>Faster ROI with proven keywords</li>
      </ul>
      <h2>When Meta Ads Wins</h2>
      <ul>
        <li>New products where search volume doesn&apos;t exist yet</li>
        <li>Brand awareness and top-of-funnel reach at scale</li>
        <li>Visual/lifestyle products (fashion, food, fitness)</li>
        <li>Retargeting website visitors for 30–90% lower CPC</li>
        <li>B2C impulse purchases</li>
      </ul>
      <h2>Cost Comparison for Pune Businesses (2025 Data)</h2>
      <p>Based on our client campaigns:</p>
      <ul>
        <li>Google Ads average CPC (Pune): ₹15–₹80 for competitive keywords</li>
        <li>Meta Ads average CPM (Pune): ₹80–₹200 per 1,000 impressions</li>
        <li>Google Ads typical CTR: 3–8% for well-optimized ads</li>
        <li>Meta Ads typical CTR: 0.5–2% for image ads, 1.5–4% for video</li>
      </ul>
      <h2>The Winning Strategy: Run Both</h2>
      <p>The highest-ROI approach is a funnel strategy: use Meta Ads at the top of the funnel for awareness, then retarget warm audiences with Google Display ads, and close with Google Search Ads for high-intent buyers.</p>
      <h2>Our Recommendation for Pune Businesses</h2>
      <p>Start with Google Search Ads (₹15,000–₹30,000/month minimum) targeting your highest-value service keywords. Once you&apos;ve proven ROI, layer in Meta Ads retargeting (₹8,000–₹15,000/month) to multiply conversions from your existing traffic.</p>
    </div>
  ),
  "core-web-vitals-guide": (
    <div className="blog-content">
      <p className="lead">
        In 2025, Core Web Vitals are a confirmed Google ranking factor. Websites with poor scores see measurable ranking drops. Here&apos;s the technical guide to get your LCP, CLS, and INP into the &quot;Good&quot; range — and how we scored 100/100 on PageSpeed for multiple client sites.
      </p>
      <h2>The Three Core Web Vitals Explained</h2>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> How quickly your largest above-the-fold element loads. Target: under 2.5s</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> How much your page layout shifts unexpectedly. Target: under 0.1</li>
        <li><strong>INP (Interaction to Next Paint):</strong> How fast your page responds to user interactions. Target: under 200ms</li>
      </ul>
      <h2>How to Fix LCP (Largest Contentful Paint)</h2>
      <p>LCP is almost always your hero image or H1 heading. The fixes:</p>
      <ul>
        <li>Add <code>priority</code> to your hero <code>next/image</code> component</li>
        <li>Preload your LCP image with <code>&lt;link rel=&quot;preload&quot;&gt;</code></li>
        <li>Use AVIF or WebP format (50–70% smaller than JPEG)</li>
        <li>Serve images from a CDN (Vercel, Cloudflare, or CloudFront)</li>
        <li>Reduce server response time — use Vercel Edge Functions or cache your pages</li>
        <li>Remove render-blocking CSS and JavaScript</li>
      </ul>
      <blockquote>The single biggest LCP win we see: switching from unoptimized PNG hero images to WebP with proper preloading. Average LCP improvement: 1.8 seconds.</blockquote>
      <h2>How to Fix CLS (Cumulative Layout Shift)</h2>
      <ul>
        <li>Always set explicit width/height on images and video elements</li>
        <li>Reserve space for ads and embeds with CSS aspect-ratio</li>
        <li>Avoid inserting content above existing content (popups, banners)</li>
        <li>Use <code>font-display: optional</code> for web fonts to avoid FOUT (Flash of Unstyled Text)</li>
        <li>Preload critical fonts in your <code>&lt;head&gt;</code></li>
      </ul>
      <h2>How to Fix INP (Interaction to Next Paint)</h2>
      <ul>
        <li>Reduce JavaScript bundle size — code split with dynamic imports</li>
        <li>Move heavy computations to Web Workers</li>
        <li>Debounce and throttle event handlers</li>
        <li>Defer non-critical third-party scripts (chat widgets, analytics)</li>
        <li>Use React <code>useTransition</code> for non-urgent state updates</li>
      </ul>
    </div>
  ),
  "local-seo-pune": (
    <div className="blog-content">
      <p className="lead">
        46% of all Google searches have local intent. For Pune businesses, ranking in the Google Map Pack — the 3 business listings that appear above organic results — is worth more than ranking #1 organically. Here&apos;s the complete 2025 local SEO strategy.
      </p>
      <h2>Step 1: Claim and Optimize Your Google Business Profile</h2>
      <p>Your Google Business Profile (GBP) is the single most important local SEO asset. Follow this optimization checklist:</p>
      <ul>
        <li>✅ Claim your GBP listing at business.google.com</li>
        <li>✅ Choose the most specific primary category (e.g., &quot;Digital Marketing Agency&quot; not just &quot;Marketing Agency&quot;)</li>
        <li>✅ Add all relevant secondary categories</li>
        <li>✅ Write a keyword-rich business description (750 chars max)</li>
        <li>✅ Upload 10+ high-quality photos of your office/team/work</li>
        <li>✅ Add complete services list with descriptions and prices</li>
        <li>✅ Set accurate business hours including special hours</li>
        <li>✅ Enable messaging and respond within 24 hours</li>
        <li>✅ Post weekly GBP updates (events, offers, news)</li>
      </ul>
      <h2>Step 2: Build Local Citations</h2>
      <p>Citations are mentions of your business Name, Address, and Phone (NAP) on other websites. Consistency is critical — even a small discrepancy can hurt rankings.</p>
      <ul>
        <li>Justdial, IndiaMart, Sulekha, UrbanClap (top Indian directories)</li>
        <li>Industry-specific directories relevant to your niche</li>
        <li>Chamber of Commerce listings</li>
        <li>Local news site mentions</li>
        <li>Yelp India, Bing Places, Apple Maps</li>
      </ul>
      <blockquote>We consistently see Pune businesses jump from position 12–15 in the Map Pack to the top 3 just by fixing NAP inconsistencies and building 20–30 high-quality local citations.</blockquote>
      <h2>Step 3: Generate and Respond to Google Reviews</h2>
      <p>Reviews are a massive local ranking factor. The key metrics Google watches: total review count, average rating, recency of reviews, and owner response rate.</p>
      <ul>
        <li>Ask every satisfied customer directly for a review</li>
        <li>Respond to every review — positive and negative — within 48 hours</li>
        <li>Target 50+ reviews for competitive local categories</li>
        <li>Never buy or fake reviews</li>
      </ul>
      <h2>Step 4: Create Location-Specific Content</h2>
      <p>Create dedicated pages for the Pune areas you serve: Hinjewadi, Baner, Kothrud, Viman Nagar, Wakad, Aundh, Hadapsar. Each page should target &quot;[service] in [locality]&quot; keywords with unique content, local landmarks, and a specific call to action.</p>
    </div>
  ),
  "fix-high-bounce-rate": (
    <div className="blog-content">
      <p className="lead">
        A high bounce rate (over 60–70%) is a symptom of a deeper problem — your website is failing to engage visitors before they can convert. Here are the 12 most common causes and their solutions.
      </p>
      <h2>What Is a &quot;Good&quot; Bounce Rate?</h2>
      <p>Context matters. A blog post getting 80% bounce rate is normal (people read and leave). An e-commerce product page with 80% bounce rate is a crisis. Benchmark by page type:</p>
      <ul>
        <li>Landing pages: 60–90% (acceptable)</li>
        <li>Blog posts: 65–90% (normal)</li>
        <li>Product/service pages: 30–55% (target)</li>
        <li>Homepage: 40–60% (acceptable)</li>
      </ul>
      <h2>Cause 1: Slow Page Speed</h2>
      <p>53% of mobile users abandon a page that takes over 3 seconds to load. Fix it: optimize images, reduce JavaScript, use a fast hosting provider (Vercel, Cloudflare Pages).</p>
      <h2>Cause 2: Poor Mobile Experience</h2>
      <p>Over 70% of Indian web traffic is mobile. If your website isn&apos;t perfectly responsive and finger-friendly, you&apos;re losing most visitors before they even see your offer.</p>
      <h2>Cause 3: Misleading Ad Copy or Title Tags</h2>
      <p>When your Google ad promises &quot;free SEO audit&quot; but your landing page leads with pricing, users bounce immediately. Match the message from ad → landing page precisely.</p>
      <h2>Cause 4: No Clear CTA Above the Fold</h2>
      <p>Within 5 seconds, a visitor must understand: What do you do? Who is it for? What should I do next? If they have to scroll to find a CTA, most won&apos;t.</p>
      <blockquote>Every second a visitor can&apos;t find what they&apos;re looking for increases your bounce rate by 10–15%. The first 5 seconds are everything.</blockquote>
      <h2>Cause 5: Poor Readability</h2>
      <p>Walls of text, tiny fonts (under 16px on mobile), and low contrast are conversion killers. Use short paragraphs, subheadings, bold key points, and a minimum 16px base font size.</p>
      <h2>Fixes to Implement This Week</h2>
      <ul>
        <li>Run a Google PageSpeed test and fix your top 3 issues</li>
        <li>Add a clear hero CTA above the fold on every key page</li>
        <li>Add 3+ client logos or testimonials to your homepage</li>
        <li>Test your site on a real mobile device (not just browser emulation)</li>
        <li>Set up Google Analytics heatmaps (via Clarity or Hotjar) to see exactly where users drop off</li>
      </ul>
    </div>
  ),
  "b2b-content-marketing-india": (
    <div className="blog-content">
      <p className="lead">
        Most Indian B2B companies copy Western content marketing playbooks — and then wonder why their blog gets zero traffic and their whitepapers have 12 downloads. Indian B2B buyers are different. Here&apos;s a strategy built specifically for the Indian market.
      </p>
      <h2>How Indian B2B Buyers Are Different</h2>
      <p>Understanding the Indian B2B purchase journey is the foundation of any effective content strategy:</p>
      <ul>
        <li>Decision cycles are longer — often 3–6 months for mid-market deals</li>
        <li>Multiple stakeholders (committee buying is more common than in the West)</li>
        <li>Price sensitivity is high — ROI and cost justification content performs well</li>
        <li>WhatsApp is a legitimate professional communication channel</li>
        <li>LinkedIn adoption is growing rapidly in tier-1 Indian cities</li>
        <li>Vernacular content (Hindi, Marathi) is increasingly effective in regional markets</li>
      </ul>
      <h2>What Content Actually Works in Indian B2B</h2>
      <h3>1. ROI-Focused Case Studies</h3>
      <p>Indian buyers want hard numbers. Vague &quot;results&quot; don&apos;t convert. Write case studies with specific metrics: &quot;We reduced client&apos;s customer acquisition cost from ₹2,400 to ₹680 in 4 months.&quot;</p>
      <h3>2. Comparison Guides</h3>
      <p>Indian decision-makers do extensive research before committing. Content that helps them compare options (your solution vs alternatives) gets high search volume and builds trust.</p>
      <h3>3. How-to Guides for Compliance and Regulation</h3>
      <p>GST compliance, SEBI regulations, labor law updates — content addressing India-specific regulatory challenges attracts highly qualified the B2B decision-makers.</p>
      <blockquote>The Indian B2B buyer wants to see that you understand their specific context — regulatory environment, budget constraints, team structure. Generic Western-style thought leadership falls flat.</blockquote>
      <h2>Content Distribution in India</h2>
      <ul>
        <li><strong>LinkedIn:</strong> B2B decision-makers in India are most active 8–10am and 5–7pm on weekdays</li>
        <li><strong>WhatsApp Business:</strong> Share content summaries with warm prospects (not cold blasts)</li>
        <li><strong>Email newsletters:</strong> Personalized, low-volume, high-value content sequences</li>
        <li><strong>YouTube:</strong> Hindi-language explainer videos for mid-market companies</li>
      </ul>
    </div>
  ),
};

// ─── Generate Static Params ───────────────────────────────────────────────────

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Growthik Media" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.map((t) => t.name).join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `${CONTACT_INFO.website}/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${CONTACT_INFO.website}/blog/${slug}`,
      siteName: "Growthik Media",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
      creator: "@growthikmedia",
    },
  };
}

// ─── Author Avatar ────────────────────────────────────────────────────────────
function AuthorAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const bg = stringToColor(name);
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-black shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        fontSize: size * 0.35,
        minWidth: size,
        minHeight: size,
      }}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
    return null;
  }

  const related = getRelatedPosts(post, 3);
  const pageUrl = `${CONTACT_INFO.website}/blog/${slug}`;

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    url: pageUrl,
    keywords: post.tags.map((t) => t.name).join(", "),
    wordCount: post.readingTime * 200,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: CONTACT_INFO.companyName,
        url: CONTACT_INFO.website,
      },
    },
    publisher: {
      "@type": "Organization",
      name: CONTACT_INFO.companyName,
      url: CONTACT_INFO.website,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    articleSection: post.category.name,
  };

  const content = POST_CONTENT[slug];

  return (
    <>
      <Script
        id={`schema-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Reading progress bar */}
      <ReadingProgress />

      <div className="min-h-screen bg-(--background) pt-24">
        <header className="bg-(--background) pt-12 pb-8 border-b border-(--border)/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-(--text-secondary) font-medium mb-8">
              <Link href="/" className="hover:text-(--color-primary) transition-colors">
                Home
              </Link>
              <ArrowRight className="w-3 h-3 text-(--border)" />
              <Link href="/blog" className="hover:text-(--color-primary) transition-colors">
                Blog
              </Link>
              <ArrowRight className="w-3 h-3 text-(--border)" />
              <span className="text-(--text-primary) truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            {/* Category + Trending */}
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <span
                className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: `${post.category.color}15`,
                  color: post.category.color,
                  border: `1px solid ${post.category.color}30`,
                }}
              >
                {post.category.name}
              </span>
              {post.trending && (
                <span className="bg-(--color-primary)/10 text-(--color-primary) border border-(--color-primary)/20 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  Trending
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-(--text-primary) leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-(--text-secondary) font-medium py-4 border-y border-(--border)/50">
              <div className="flex items-center gap-2">
                <AuthorAvatar name={post.author.name} size={32} />
                <span className="font-bold text-(--text-primary)">
                  {post.author.name}
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {formatNumber(post.views)} views
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-6xl mx-auto px-6 mt-12">
            <div className="relative aspect-video lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </header>

        {/* ──────────── MAIN CONTENT ──────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
            {/* Sticky Sidebar (Left) */}
            <div className="order-2 lg:order-1 sticky top-28">
              <BlogSidebar currentPostId={post.id} />
            </div>

            {/* Article (Right) */}
            <article className="order-1 lg:order-2">
              {/* Share buttons — top */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-(--border) flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              {/* Article body */}
              {content ? (
                <div className="blog-body">{content}</div>
              ) : (
                /* Fallback for posts without content override */
                <div className="blog-body">
                  <p className="lead">{post.excerpt}</p>
                  <p className="text-(--text-secondary) font-medium leading-relaxed">
                    Full article content for this post is being prepared by our
                    editorial team and will be published shortly. In the
                    meantime, feel free to explore our other articles or contact
                    us for expert advice.
                  </p>
                  <div className="flex gap-4 mt-8">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all"
                    >
                      Get Free Consultation
                    </Link>
                    <Link
                      href="/blog"
                      className="px-6 py-3 border border-(--border) text-(--text-primary) font-bold rounded-xl text-sm hover:border-(--color-primary)/50 transition-all"
                    >
                      Browse All Articles
                    </Link>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-(--border)">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-(--text-secondary)">
                    <Tag className="w-4 h-4" /> Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.slug}`}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-(--surface) border border-(--border) text-(--text-secondary) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share buttons — bottom */}
              <div className="mt-8 pt-8 border-t border-(--border)">
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              {/* Author Card */}
              <div className="mt-10 p-6 bg-(--surface) border border-(--border) rounded-2xl">
                <div className="flex gap-4 items-start">
                  <AuthorAvatar name={post.author.name} size={56} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-(--color-primary) uppercase tracking-wider mb-0.5">
                      Written by
                    </p>
                    <h3 className="text-lg font-black text-(--text-primary)">
                      {post.author.name}
                    </h3>
                    <p className="text-sm font-semibold text-(--text-secondary) mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-sm text-(--text-secondary) font-medium leading-relaxed">
                      {post.author.bio}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      {post.author.socialLinks.linkedin && (
                        <a
                          href={post.author.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink className="w-3 h-3" /> LinkedIn
                        </a>
                      )}
                      {post.author.socialLinks.website && (
                        <a
                          href={post.author.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink className="w-3 h-3" /> Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-10 rounded-2xl overflow-hidden bg-gradient-to-br from-(--color-primary) via-rose-600 to-rose-700 p-6 md:p-8 text-white relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-wider opacity-90">
                      Free Offer
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    Get a Free Website & SEO Audit
                  </h3>
                  <p className="text-sm text-white/85 font-medium mb-6 max-w-lg">
                    Let our experts audit your website for performance, SEO, and
                    conversion opportunities — completely free, no strings
                    attached.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/audit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-(--color-primary) font-black rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Start Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/30 transition-all"
                    >
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={related} />
            </article>
          </div>
        </div>

        {/* Newsletter section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
