import os

replacements = {
    '"web-design-in-viman-nagar"': '"website-design-company-in-viman-nagar"',
    "'web-design-in-viman-nagar'": "'website-design-company-in-viman-nagar'",
    '"website-design-in-pcmc"': '"website-design-company-in-pcmc"',
    "'website-design-in-pcmc'": "'website-design-company-in-pcmc'",
    '"website-development-in-hadapsar"': '"website-design-company-in-hadapsar"',
    "'website-development-in-hadapsar'": "'website-design-company-in-hadapsar'",
    '"importance-of-seo"': '"why-seo-is-important"',
    "'importance-of-seo'": "'why-seo-is-important'",
    '"seo-audit-checklist"': '"technical-seo-audit-checklist"',
    "'seo-audit-checklist'": "'technical-seo-audit-checklist'",
}

base_dir = r'd:\Company\Growthikmedia.com\Website\GrowthikMedia.com\app\(public)'
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original = content
            for old, new in replacements.items():
                content = content.replace(old, new)
            if content != original:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {path}')
print('Done!')
