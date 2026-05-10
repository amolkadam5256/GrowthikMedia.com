# Growthik Media Tracking Events

Last updated: 2026-05-11

## Tools

- Meta Pixel: `911738005183270`
- Google Tag Manager: `GTM-PBHC6WLL`
- GA4 config ID used in page tracking: `G-30C78ZK2G8`

## Active Standard Events

| Event | Trigger |
| --- | --- |
| `PageView` | Every route change from `MetaPixel.tsx` |
| `ViewContent` | Service pages, service links, portfolio links, blog links |
| `Contact` | Contact CTA clicks, WhatsApp clicks, phone clicks, AI chat open, contact form success |
| `Lead` | Contact form success, audit form success, newsletter success, progressive lead capture success, AI chat lead success |
| `Schedule` | Google Calendar booking links |
| `CompleteRegistration` | Newsletter success, progressive lead capture completion, AI chat lead completion |
| `InitiateCheckout` | Audit request success and matching checkout/book-call CTA clicks |

## Developer Checks

| Check | Implemented event | Where it comes from |
| --- | --- | --- |
| Page View | `page_view`, `PageView` | Route changes |
| Button Click | `cta_click`, `contact_click`, `ViewContent`, ecommerce intent events | Global click listener |
| Form Submit | `form_submit_success`, `Lead`, `Contact`, `CompleteRegistration` | Successful form handlers |
| Scroll | `scroll_depth` | 25%, 50%, 75%, 90% scroll |
| Purchase | `Purchase` | Matching purchase/buy/pay/order buttons or links |
| Lead | `Lead` | Contact, audit, newsletter, progressive lead capture, AI chat |

## Supported Standard Events

These are implemented in `lib/analytics.ts` and can be fired from any component with `trackMetaStandardEvent`.

| Event | Current auto trigger |
| --- | --- |
| `AddPaymentInfo` | Buttons/links mentioning payment, billing, or card details |
| `AddToCart` | Buttons/links mentioning add to cart or cart |
| `AddToWishlist` | Buttons/links mentioning wishlist, save for later, or bookmark |
| `CompleteRegistration` | Real registration/subscription/lead capture completions |
| `Contact` | Contact actions |
| `Donate` | Buttons/links mentioning donate, donation, or contribute |
| `InitiateCheckout` | Audit/booking/checkout intent actions |
| `Purchase` | Buttons/links mentioning purchase, buy now, pay now, or order |
| `ViewContent` | Content and service views |

## Custom Events

| Event | Trigger |
| --- | --- |
| `page_view` | Every public page route change with page group and referrer source |
| `cta_click` | Contact, audit, phone, email, WhatsApp, and booking CTA clicks |
| `contact_click` | Phone, email, WhatsApp, and calendar clicks with channel |
| `form_start` | Contact, audit, and newsletter form start |
| `form_submit_success` | All successful lead/subscription forms |
| `form_submit_error` | Failed form submissions |
| `form_step_complete` | Progressive lead capture step completion |
| `scroll_depth` | User reaches 25%, 50%, 75%, or 90% of a page |
| `service_intent` | Service page view intent |

## GTM Dashboard Setup

### 1. Built-In Variables To Enable

In GTM, go to **Variables > Configure** and enable:

| Variable | Use |
| --- | --- |
| `Page URL` | Full page URL |
| `Page Path` | URL path |
| `Page Hostname` | Domain |
| `Click Element` | Click debugging |
| `Click Classes` | Button/class targeting |
| `Click ID` | Button ID targeting |
| `Click Text` | Button text |
| `Click URL` | Link destination |
| `Form ID` | Form targeting |
| `Form Classes` | Form targeting |
| `Form URL` | Form destination |

### 2. Data Layer Variables To Create

Create these in **Variables > New > Data Layer Variable**:

| GTM variable name | Data layer variable name |
| --- | --- |
| `DLV - page_path` | `page_path` |
| `DLV - page_group` | `page_group` |
| `DLV - page_title` | `page_title` |
| `DLV - content_name` | `content_name` |
| `DLV - content_category` | `content_category` |
| `DLV - content_type` | `content_type` |
| `DLV - cta_text` | `cta_text` |
| `DLV - destination` | `destination` |
| `DLV - channel` | `channel` |
| `DLV - form_type` | `form_type` |
| `DLV - service` | `service` |
| `DLV - goal` | `goal` |
| `DLV - percent_scrolled` | `percent_scrolled` |
| `DLV - value` | `value` |
| `DLV - currency` | `currency` |

### 3. Triggers To Create

Create these in **Triggers > New**:

| Trigger name | Trigger type | Condition |
| --- | --- | --- |
| `CE - page_view` | Custom Event | Event name equals `page_view` |
| `CE - cta_click` | Custom Event | Event name equals `cta_click` |
| `CE - contact_click` | Custom Event | Event name equals `contact_click` |
| `CE - form_submit_success` | Custom Event | Event name equals `form_submit_success` |
| `CE - form_submit_error` | Custom Event | Event name equals `form_submit_error` |
| `CE - scroll_depth` | Custom Event | Event name equals `scroll_depth` |
| `CE - Lead` | Custom Event | Event name equals `Lead` |
| `CE - Contact` | Custom Event | Event name equals `Contact` |
| `CE - ViewContent` | Custom Event | Event name equals `ViewContent` |
| `CE - CompleteRegistration` | Custom Event | Event name equals `CompleteRegistration` |
| `CE - InitiateCheckout` | Custom Event | Event name equals `InitiateCheckout` |
| `CE - AddPaymentInfo` | Custom Event | Event name equals `AddPaymentInfo` |
| `CE - AddToCart` | Custom Event | Event name equals `AddToCart` |
| `CE - AddToWishlist` | Custom Event | Event name equals `AddToWishlist` |
| `CE - Purchase` | Custom Event | Event name equals `Purchase` |
| `CE - Donate` | Custom Event | Event name equals `Donate` |

### 4. GA4 Tags To Create

Create one **Google Tag**:

| Field | Value |
| --- | --- |
| Tag type | Google Tag |
| Tag ID | `G-30C78ZK2G8` |
| Trigger | Initialization - All Pages or All Pages |

Then create **GA4 Event** tags:

| Tag name | Event name | Trigger |
| --- | --- | --- |
| `GA4 - page_view` | `page_view` | `CE - page_view` |
| `GA4 - CTA Click` | `cta_click` | `CE - cta_click` |
| `GA4 - Contact Click` | `contact_click` | `CE - contact_click` |
| `GA4 - Form Submit Success` | `generate_lead` | `CE - form_submit_success` |
| `GA4 - Lead` | `generate_lead` | `CE - Lead` |
| `GA4 - Contact` | `contact` | `CE - Contact` |
| `GA4 - Registration` | `sign_up` | `CE - CompleteRegistration` |
| `GA4 - Scroll Depth` | `scroll_depth` | `CE - scroll_depth` |
| `GA4 - View Content` | `view_item` | `CE - ViewContent` |
| `GA4 - Begin Checkout` | `begin_checkout` | `CE - InitiateCheckout` |
| `GA4 - Purchase` | `purchase` | `CE - Purchase` |

Recommended event parameters:

| Parameter | Value |
| --- | --- |
| `page_path` | `{{DLV - page_path}}` |
| `page_group` | `{{DLV - page_group}}` |
| `content_name` | `{{DLV - content_name}}` |
| `content_category` | `{{DLV - content_category}}` |
| `cta_text` | `{{DLV - cta_text}}` |
| `destination` | `{{DLV - destination}}` |
| `channel` | `{{DLV - channel}}` |
| `form_type` | `{{DLV - form_type}}` |
| `percent_scrolled` | `{{DLV - percent_scrolled}}` |
| `value` | `{{DLV - value}}` |
| `currency` | `{{DLV - currency}}` |

### 5. Google Ads Conversion Tags

Create these after copying the conversion ID and label from Google Ads:

| Conversion action | GTM tag type | Trigger |
| --- | --- | --- |
| Lead form submit | Google Ads Conversion Tracking | `CE - Lead` or `CE - form_submit_success` |
| Contact click | Google Ads Conversion Tracking | `CE - Contact` |
| Phone/WhatsApp click | Google Ads Conversion Tracking | `CE - contact_click` |
| Purchase | Google Ads Conversion Tracking | `CE - Purchase` |

Use `{{DLV - value}}` and `{{DLV - currency}}` for purchase value when available.

### 6. Meta Pixel Through GTM

The site already has Meta Pixel code in React. If you also add Meta Pixel in GTM, do not duplicate the same event from both places unless you use event IDs and deduplication.

Recommended clean setup:

| Option | What to do |
| --- | --- |
| Current setup | Keep Meta Pixel in code, use GTM mainly for GA4/Google Ads/other tools |
| GTM-only setup | Remove code pixel later, add Meta base pixel and event tags inside GTM |

### 7. Apollo.io Through GTM

If Apollo gives you a website tracking script:

1. Go to **Tags > New > Custom HTML**.
2. Paste Apollo tracking script.
3. Trigger: **All Pages**.
4. Preview in Tag Assistant.
5. Publish only after Apollo dashboard shows visits.

Do not paste Apollo scripts into page components if you want GTM to manage all marketing scripts centrally.

## Tag Assistant Testing

Use this testing flow:

1. Open GTM dashboard.
2. Click **Preview**.
3. Enter `https://www.growthikmedia.com` or your local/dev URL.
4. Connect Tag Assistant.
5. Test these actions:

| Test | Website action | Tag Assistant should show |
| --- | --- | --- |
| Page View | Open any page | `gtm.js`, `page_view`, `PageView` |
| Button Click | Click Contact / WhatsApp / Audit button | `cta_click`, `contact_click`, `Contact` or `Lead` |
| Form Submit | Submit contact/audit/newsletter/chat form | `form_submit_success`, `Lead`, maybe `Contact` or `CompleteRegistration` |
| Scroll | Scroll to 25%, 50%, 75%, 90% | `scroll_depth` with `percent_scrolled` |
| Purchase | Click real buy/pay/order CTA if added | `Purchase` |
| Lead | Submit lead form | `Lead` |

Inside Tag Assistant, check:

| Tab | What to verify |
| --- | --- |
| Tags | Correct tags fired |
| Variables | Data layer values are filled |
| Data Layer | Event name and parameters are present |
| Errors | No blocked or broken tags |

After testing, go to **Submit > Publish** in GTM.

## Implementation Notes

- All events push to `window.dataLayer`, `window.gtag`, and Meta Pixel.
- Meta standard events use `fbq("track", eventName, params)`.
- Non-standard events use `fbq("trackCustom", eventName, params)`.
- Common page metadata is attached automatically: `page_location`, `page_path`, and `page_title`.
- Fake ecommerce events are not fired on page load. `Purchase`, `AddToCart`, `AddPaymentInfo`, `AddToWishlist`, and `Donate` only fire when a matching real action exists.
