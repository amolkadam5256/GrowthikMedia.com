import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../lib/blog/data';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NEXT_BLOG_DIR = path.join(__dirname, '..', '.next', 'server', 'app', 'blog');
const OUTPUT_BASE_DIR = path.join(__dirname, '..', 'blog_exports');

async function exportBlogs() {
  await fs.mkdir(OUTPUT_BASE_DIR, { recursive: true });

  for (let i = 0; i < BLOG_POSTS.length; i++) {
    const post = BLOG_POSTS[i];
    const slug = post.slug;
    const dateObj = new Date(post.publishDate);
    const year = dateObj.getFullYear().toString();
    const monthStr = dateObj.toLocaleString('default', { month: 'short' });
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');

    const htmlFilePath = path.join(NEXT_BLOG_DIR, `${slug}.html`);

    try {
      const htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
      const $ = cheerio.load(htmlContent);

      // Extract only the blog content
      let articleHtml = '';
      if ($('.blog-content').length > 0) {
        articleHtml = $('.blog-content').html();
      } else {
        articleHtml = $('article').html() || $('main').html() || $('body').html();
      }

      // Re-parse the isolated article to clean it up further
      const $art = cheerio.load(articleHtml || '', null, false);
      $art('script, style, iframe').remove();

      // Remove all class and style attributes from all tags
      $art('*').removeAttr('class');
      $art('*').removeAttr('style');

      // Apply inline CSS styles to standard HTML tags
      $art('h2').attr('style', "border-left: 5px solid #E32929; color: #0a0a0a; font-family: 'Playfair Display',Georgia,serif; font-size: 1.7rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.3; margin: 48px 0 16px; padding-left: 16px;");
      $art('h3').attr('style', "color: #0a0a0a; font-family: 'Playfair Display',Georgia,serif; font-size: 1.2rem; font-weight: 700; margin: 0 0 14px;");
      $art('h4').attr('style', "color: #0a0a0a; font-family: 'Playfair Display',Georgia,serif; font-size: 1.1rem; font-weight: 700; margin: 0 0 12px;");
      $art('p').attr('style', "color: #2a2a2a; font-family: 'DM Sans',sans-serif; margin-bottom: 18px; line-height: 1.6; font-size: 1.05rem;");
      $art('ul').attr('style', "margin: 0 0 24px 20px; padding: 0;");
      $art('ol').attr('style', "margin: 0 0 24px 20px; padding: 0;");
      $art('li').attr('style', "color: #2a2a2a; font-family: 'DM Sans',sans-serif; margin-bottom: 10px; line-height: 1.6; font-size: 1.05rem;");
      $art('a').attr('style', "border-bottom: 1px solid rgba(227,41,41,0.3); color: #e32929; text-decoration: none;");
      $art('blockquote').attr('style', "background: #f7f7f7; border-left: 5px solid #E32929; margin: 44px 0; padding: 28px 32px; font-family: 'Playfair Display',Georgia,serif; font-size: 1.2rem; font-style: italic;");
      $art('strong, b').attr('style', "font-weight: 700; color: #0a0a0a;");

      const styledArticleHtml = $art.html();

      const featuredImgUrl = post.featuredImage.startsWith('http') ? post.featuredImage : `https://www.growthikmedia.com${post.featuredImage}`;
      const authorInitials = post.author.name.split(' ').map(n => n[0]).join('');

      // We will create a fresh HTML document using the user's template
      const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>${post.metaTitle}</title>
<meta content="${post.metaDescription}" name="description">
<meta content="${post.seoKeywords.join(', ')}" name="keywords">
<meta content="${post.author.name}, Growthik Media" name="author">
<meta content="${post.title}" property="og:title">
<meta content="${post.metaDescription}" property="og:description">
<meta content="article" property="og:type">
<meta content="https://www.growthikmedia.com/blog/${slug}/" property="og:url">
<link href="https://www.growthikmedia.com/blog/${slug}/" rel="canonical">
<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body style="-webkit-font-smoothing: antialiased; background: #ffffff; color: #1a1a1a; font-family: 'DM Sans',sans-serif; font-size: 17px; line-height: 1.75; margin: 0; padding: 0;">

<!-- BREADCRUMB -->
<div style="background: #f5f5f5; border-bottom: 1px solid #e5e5e5; padding: 12px 32px;">
  <span style="color: #888888; font-size: 0.78rem; letter-spacing: 0.05em; text-transform: uppercase;">
    <a href="https://www.growthikmedia.com/" style="color: #e32929; text-decoration: none;">Home</a>
    <span style="color: #cccccc; margin: 0 8px;">›</span>
    <a href="https://www.growthikmedia.com/blog/" style="color: #e32929; text-decoration: none;">Blog</a>
    <span style="color: #cccccc; margin: 0 8px;">›</span>
    <span style="color: #888888;">${post.category.name}</span>
  </span>
</div>

<!-- HERO -->
<div style="background: #0a0a0a; overflow: hidden; padding: 64px 32px 56px; position: relative;">
  <div style="margin: 0 auto; max-width: 800px; position: relative; z-index: 1;">
    <span style="background: #E32929; color: white; display: inline-block; font-family: 'DM Sans',sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; margin-bottom: 22px; padding: 5px 14px; text-transform: uppercase;">
      ${post.category.name} · Pune SEO · Updated ${year}
    </span>
    <h1 style="color: white; font-family: 'Playfair Display',Georgia,serif; font-size: 2.6rem; font-weight: 900; letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 24px; max-width: 680px;">
      ${post.title}
    </h1>
    
    <!-- Author Row -->
    <div style="align-items: center; display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 28px;">
      <div style="align-items: center; display: flex; gap: 12px;">
        <div style="align-items: center; background: #E32929; border-radius: 50%; color: white; display: flex; flex-shrink: 0; font-family: 'DM Sans',sans-serif; font-size: 0.9rem; font-weight: 700; height: 42px; justify-content: center; width: 42px;">
          ${authorInitials}
        </div>
        <div style="line-height: 1.35;">
          <div style="color: white; font-family: 'DM Sans',sans-serif; font-size: 0.9rem; font-weight: 600;">${post.author.name}</div>
          <div style="color: #888888; font-family: 'DM Sans',sans-serif; font-size: 0.78rem;">${post.author.role}, Growthik Media</div>
        </div>
      </div>
      <div style="background: #333; height: 32px; width: 1px;"></div>
      <span style="color: #888888; font-family: 'DM Sans',sans-serif; font-size: 0.82rem;"><strong style="color: white;">${day} ${monthStr} ${year}</strong></span>
      <div style="background: #333; height: 32px; width: 1px;"></div>
      <span style="color: #888888; font-family: 'DM Sans',sans-serif; font-size: 0.82rem;"><strong style="color: white;">${post.readingTime} min</strong> read · <strong style="color: white;">${post.views || '1.2k'}</strong> views</span>
    </div>

    <!-- Tags -->
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      ${post.tags.map((t: any) => `<span style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: #aaaaaa; font-family: 'DM Sans',sans-serif; font-size: 0.75rem; padding: 4px 13px;">#${t.name.replace(/\\s+/g, '')}</span>`).join('\n      ')}
    </div>
  </div>
</div>

<!-- THUMBNAIL -->
<div style="margin: 0 auto; max-width: 800px; padding: 40px 32px 0;">
  <img src="${featuredImgUrl}" alt="${post.featuredImageAlt}" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: block;" />
</div>

<!-- ARTICLE BODY -->
<div style="margin: 0 auto; max-width: 800px; padding: 40px 32px;">
  
  <div style="background: #0a0a0a; border-left: 5px solid #E32929; color: white; font-family: 'DM Sans',sans-serif; font-size: 1.05rem; line-height: 1.75; margin-bottom: 44px; padding: 28px 32px;">
    ${post.excerpt}
  </div>

  ${styledArticleHtml}
  
  <!-- AUTHOR BOX -->
  <div style="align-items: flex-start; border-top: 4px solid #E32929; border: 1px solid #ebebeb; display: flex; gap: 20px; margin: 48px 0 0; padding: 28px;">
    <div style="align-items: center; background: #E32929; border-radius: 50%; color: white; display: flex; flex-shrink: 0; font-family: 'DM Sans',sans-serif; font-size: 1.1rem; font-weight: 700; height: 56px; justify-content: center; width: 56px;">
      ${authorInitials}
    </div>
    <div>
      <div style="color: #0a0a0a; font-family: 'Playfair Display',Georgia,serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 4px;">${post.author.name}</div>
      <div style="color: #e32929; font-family: 'DM Sans',sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 8px; text-transform: uppercase;">${post.author.role}  -  Growthik Media</div>
      <p style="color: #5a5a5a; font-family: 'DM Sans',sans-serif; font-size: 0.88rem; margin: 0;">${post.author.bio}</p>
    </div>
  </div>

  <!-- SHARE BAR -->
  <div style="align-items: center; background: #f7f7f7; border-top: 3px solid #E32929; display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; margin-top: 48px; margin: 0 -32px; padding: 24px 32px;">
    <span style="color: #888888; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Found this helpful? Share it</span>
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <a href="https://twitter.com/intent/tweet?url=https://www.growthikmedia.com/blog/${slug}/&text=${encodeURIComponent(post.title)}" style="border: 1.5px solid #0a0a0a; color: #0a0a0a; display: inline-block; font-family: 'DM Sans',sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; padding: 9px 18px; text-decoration: none; text-transform: uppercase;" target="_blank">Twitter / X</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.growthikmedia.com/blog/${slug}/" style="border: 1.5px solid #0a0a0a; color: #0a0a0a; display: inline-block; font-family: 'DM Sans',sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; padding: 9px 18px; text-decoration: none; text-transform: uppercase;" target="_blank">LinkedIn</a>
      <a href="https://wa.me/?text=https://www.growthikmedia.com/blog/${slug}/" style="border: 1.5px solid #0a0a0a; color: #0a0a0a; display: inline-block; font-family: 'DM Sans',sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; padding: 9px 18px; text-decoration: none; text-transform: uppercase;" target="_blank">WhatsApp</a>
    </div>
  </div>

</div>
<!-- END ARTICLE BODY -->

<!-- FOOTER -->
<div style="background: #0a0a0a; padding: 48px 32px 28px; text-align: center;">
  <div style="color: white; font-family: 'Playfair Display',Georgia,serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 14px;">Growthik<span style="color: #e32929;">.</span>Media</div>
  <p style="color: #888888; font-family: 'DM Sans',sans-serif; font-size: 0.85rem; line-height: 1.75; margin: 0 auto 20px; max-width: 500px;">Helping Pune-based brands grow their online presence with SEO, Google Ads and websites that actually work. No jargon, just real results for local businesses in Baner, Hinjewadi, Kharadi and across Pune.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 18px; justify-content: center; margin-bottom: 28px;">
    <a href="https://www.growthikmedia.com/" style="color: #666666; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; text-decoration: none;">Home</a>
    <a href="https://www.growthikmedia.com/about/" style="color: #666666; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; text-decoration: none;">About</a>
    <a href="https://www.growthikmedia.com/blog/" style="color: #666666; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; text-decoration: none;">Blog</a>
    <a href="https://www.growthikmedia.com/contact/" style="color: #666666; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; text-decoration: none;">Contact</a>
    <a href="tel:+918055754054" style="color: #e32929; font-family: 'DM Sans',sans-serif; font-size: 0.82rem; text-decoration: none;">+91 80557 54054</a>
  </div>
  <div style="border-top: 1px solid #1e1e1e; color: #444444; font-family: 'DM Sans',sans-serif; font-size: 0.78rem; padding-top: 20px;">© ${year} Growthik Media, Pune. All rights reserved.</div>
</div>

</body>
</html>`;

      const safeTitle = post.title.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase();
      const outputDir = path.join(OUTPUT_BASE_DIR, year, month);
      await fs.mkdir(outputDir, { recursive: true });

      // Format: 01_title.html
      const fileIndex = (i + 1).toString().padStart(2, '0');
      const filename = `${fileIndex}_${safeTitle}.html`;
      const outputPath = path.join(outputDir, filename);

      await fs.writeFile(outputPath, cleanHtml.trim());
      console.log(`Exported: ${year}/${month}/${filename}`);

    } catch (err) {
      console.error(`Error processing ${slug}:`, err.message);
    }
  }

  console.log(`\nSuccessfully exported ${BLOG_POSTS.length} blogs to the "blog_exports" directory.`);
}

exportBlogs().catch(console.error);
