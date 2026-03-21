import os
import re

updates = {
    '/services/youtube-seo': 'YouTube Video SEO Services in Pune | Growthik Media',
    '/services/email-marketing': 'Top Email Marketing Services Pune | Growthik Media',
    '/services/social-media-promotions': 'Expert Social Media Promotions Pune | Growthik Media',
    '/services/branding-consulting': 'Best Brand Consulting Agency Pune | Growthik Media',
    '/services/brand-marketing-communications': 'Brand Marketing Communications Pune | Growthik Media',
    '/services/meta-ads': 'Expert Meta Ads Management in Pune | Growthik Media',
    '/services/brand-identity': 'Brand Identity Design Agency Pune | Growthik Media',
    '/services/web-application': 'Custom Web App Development in Pune | Growthik Media',
    '/services/business-card-design': 'Business Card Design Company Pune | Growthik Media',
    '/services/brochure-design': 'Creative Brochure Design Company Pune | Growthik Media',
    '/services/political-digital-marketing': 'Top Political Digital Marketing Pune | Growthik Media',
    '/services/ecommerce-development': 'Ecommerce Development Agency Pune | Growthik Media',
    '/services/logo-design': 'Professional Logo Design Agency Pune | Growthik Media',
    '/services/website-development': 'Expert Website Development in Pune | Growthik Media',
    '/services/whatsapp-marketing': 'Top WhatsApp Marketing Services Pune | Growthik Media',
    '/services/sms-marketing': 'Bulk SMS Marketing Services in Pune | Growthik Media',
    '/services/website-development/full-stack': 'Full Stack Web Development in Pune | Growthik Media',
    '/services/influencer-management': 'Influencer Management Agency Pune | Growthik Media',
    '/services/letterhead-design': 'Custom Letterhead Design Agency Pune | Growthik Media',
    '/services/media-planning-buying': 'Expert Media Planning & Buying Pune | Growthik Media',
    '/services/content-marketing': 'Top Content Marketing Agency Pune | Growthik Media',
    '/services/website-maintenance': 'Website Maintenance Services Pune | Growthik Media',
    '/services/lead-generation-company-in-pune': 'Best Lead Generation Agency in Pune | Growthik Media',
    '/services/brand-name': 'Creative Brand Naming Agency Pune | Growthik Media',
    '/services/wordpress-development': 'WordPress Development Agency Pune | Growthik Media',
    '/services/branding-design': 'Bespoke Branding Design Agency Pune | Growthik Media',
    '/services/ppc-google-ads': 'Top PPC & Google Ads Agency in Pune | Growthik Media',
    '/services/website-design-company-pune': 'Best Website Design Company in Pune | Growthik Media',
    '/about': 'About Top Digital Marketing Agency | Growthik Media',
    '/blog': 'Digital Marketing & SEO Blog Pune | Growthik Media',
    '/services/brand-strategy': 'Expert Brand Strategy Agency Pune | Growthik Media',
    '/services/performance-marketing': 'Performance Marketing Agency Pune | Growthik Media',
    '/services/lead-generation': 'B2B Lead Generation Services Pune | Growthik Media',
    '/services': 'All Digital Marketing Services Pune | Growthik Media',
    '/services/digital-marketing': 'Best Digital Marketing Agency Pune | Growthik Media',
    '/portfolio/education-content-strategy': 'Education Content Strategy Portfolio | Growthik Media',
    '/services/social-media-marketing': 'Social Media Marketing Agency Pune | Growthik Media',
    '/': 'Best Digital Marketing Agency Pune | Growthik Media',
}

def replace_title(content, new_title):
    pattern = r'(title\s*:\s*)[\'\"`].*?[\'\"`]'
    replacement = r'\g<1>"' + new_title + '"'
    
    # We want to replace only the first occurrence which is usually in the metadata block
    new_content, count = re.subn(pattern, replacement, content, count=1, flags=re.DOTALL)
    
    if count == 0:
        # Check for title: { default: "..." } format
        pattern2 = r'(title\s*:\s*\{\s*default\s*:\s*)[\'\"`].*?[\'\"`]'
        replacement2 = r'\g<1>"' + new_title + '"'
        new_content, count = re.subn(pattern2, replacement2, content, count=1, flags=re.DOTALL)
        
    return new_content

app_dir = r"d:\Company\Growthikmedia.com\Website\GrowthikMedia.com\app\(public)"

for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f == 'page.tsx':
            filepath = os.path.join(root, f)
            rel_path = filepath.replace(app_dir, '').replace('\\', '/')
            
            parts = rel_path.split('/')
            url_parts = [p for p in parts if not p.startswith('(') and not p.startswith('_') and p != 'page.tsx' and p != '']
            url_path = '/' + '/'.join(url_parts)
            if url_path == '': 
                url_path = '/'
                
            if url_path in updates:
                new_title = updates[url_path]
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = replace_title(content, new_title)
                
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Updated {url_path}")
                else:
                    print(f"Failed to update or no change for {url_path} in {filepath}")
