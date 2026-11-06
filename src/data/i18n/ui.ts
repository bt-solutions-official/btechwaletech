/**
 * Shared chrome copy: the topbar, nav, buttons and footer labels that appear on
 * every page regardless of which page it is. Translating this layer once makes the
 * whole site feel translated even while individual page bodies are still in English,
 * and it is the only translation that has to be right in all languages at once.
 *
 * Keys are English so a missing translation is obvious at a glance rather than
 * silently falling back to a key name.
 */
export interface UiStrings {
  offerPrefix: string;
  offerPrice: string;
  offerUpkeep: string;
  getQuote: string;
  whatsappUs: string;
  emailUs: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  services: string;
  countries: string;
  india: string;
  industries: string;
  portfolio: string;
  pricing: string;
  contact: string;
  footerBlurb: string;
  madeIn: string;
  reviewNotice: string;
}

const en: UiStrings = {
  offerPrefix: "Websites from",
  offerPrice: "₹10,000 (US$150)",
  offerUpkeep: "2 months maintenance free after launch",
  getQuote: "Get a quote",
  whatsappUs: "WhatsApp us",
  emailUs: "Email us",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  services: "Services",
  countries: "Countries",
  india: "India",
  industries: "Industries",
  portfolio: "Portfolio",
  pricing: "Pricing",
  contact: "Contact",
  footerBlurb:
    "Freelance IT services for websites, software, SEO, AI automation, and data workflows — built in India, delivered worldwide.",
  madeIn: "Made in India · Serving worldwide",
  reviewNotice: "This translation is awaiting review. The English pages are authoritative.",
};

const hi: UiStrings = {
  offerPrefix: "वेबसाइट शुरू",
  offerPrice: "₹10,000 (US$150)",
  offerUpkeep: "लॉन्च के बाद 2 महीने का रखरखाव मुफ़्त",
  getQuote: "क़ीमत जानें",
  whatsappUs: "WhatsApp करें",
  emailUs: "ईमेल करें",
  openMenu: "मेन्यू खोलें",
  closeMenu: "मेन्यू बंद करें",
  language: "भाषा",
  services: "सेवाएँ",
  countries: "देश",
  india: "भारत",
  industries: "इंडस्ट्री",
  portfolio: "काम",
  pricing: "क़ीमत",
  contact: "संपर्क",
  footerBlurb:
    "वेबसाइट, सॉफ़्टवेयर, SEO, AI ऑटोमेशन और डेटा वर्कफ़्लो के लिए फ्रीलांस IT सेवाएँ — भारत में बनी, दुनिया भर में दी जाने वाली।",
  madeIn: "भारत में निर्मित · पूरी दुनिया में सेवा",
  reviewNotice: "यह अनुवाद समीक्षा के अधीन है। अंग्रेज़ी पेज ही अंतिम माने जाएँगे।",
};

const gu: UiStrings = {
  offerPrefix: "વેબસાઇટ શરૂ",
  offerPrice: "₹10,000 (US$150)",
  offerUpkeep: "લૉન્ચ પછી 2 મહિનાની જાળવણી મફત",
  getQuote: "ભાવ મેળવો",
  whatsappUs: "WhatsApp કરો",
  emailUs: "ઈમેલ કરો",
  openMenu: "મેનુ ખોલો",
  closeMenu: "મેનુ બંધ કરો",
  language: "ભાષા",
  services: "સેવાઓ",
  countries: "દેશો",
  india: "ભારત",
  industries: "ઉદ્યોગો",
  portfolio: "કામ",
  pricing: "ભાવ",
  contact: "સંપર્ક",
  footerBlurb:
    "વેબસાઇટ, સૉફ્ટવેર, SEO, AI ઑટોમેશન અને ડેટા વર્કફ્લો માટે ફ્રીલાન્સ IT સેવાઓ — ભારતમાં બનેલી, દુનિયાભરમાં અપાતી.",
  madeIn: "ભારતમાં બનેલું · વિશ્વભરમાં સેવા",
  reviewNotice: "આ અનુવાદ સમીક્ષા હેઠળ છે. અંગ્રેજી પાનાં જ પ્રમાણભૂત ગણાશે.",
};

const ta: UiStrings = {
  offerPrefix: "இணையதளம் தொடக்க விலை",
  offerPrice: "₹10,000 (US$150)",
  offerUpkeep: "தொடங்கிய பின் 2 மாத பராமரிப்பு இலவசம்",
  getQuote: "விலை கேளுங்கள்",
  whatsappUs: "WhatsApp செய்யுங்கள்",
  emailUs: "மின்னஞ்சல் அனுப்புங்கள்",
  openMenu: "மெனுவைத் திறக்க",
  closeMenu: "மெனுவை மூட",
  language: "மொழி",
  services: "சேவைகள்",
  countries: "நாடுகள்",
  india: "இந்தியா",
  industries: "தொழில்துறைகள்",
  portfolio: "பணிகள்",
  pricing: "விலை",
  contact: "தொடர்பு",
  footerBlurb:
    "இணையதளம், மென்பொருள், SEO, AI ஆட்டோமேஷன் மற்றும் தரவுப் பணிப்பாய்வுகளுக்கான ஃப்ரீலான்ஸ் IT சேவைகள் — இந்தியாவில் உருவாக்கப்பட்டு, உலகம் முழுவதும் வழங்கப்படுகிறது.",
  madeIn: "இந்தியாவில் உருவாக்கப்பட்டது · உலகம் முழுவதும் சேவை",
  reviewNotice: "இந்த மொழிபெயர்ப்பு மதிப்பாய்வில் உள்ளது. ஆங்கிலப் பக்கங்களே இறுதியானவை.",
};

const ar: UiStrings = {
  offerPrefix: "مواقع إلكترونية تبدأ من",
  offerPrice: "150 دولارًا أمريكيًا",
  offerUpkeep: "شهران من الصيانة مجانًا بعد الإطلاق",
  getQuote: "اطلب عرض سعر",
  whatsappUs: "راسلنا على واتساب",
  emailUs: "راسلنا بالبريد",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  language: "اللغة",
  services: "الخدمات",
  countries: "الدول",
  india: "الهند",
  industries: "القطاعات",
  portfolio: "أعمالنا",
  pricing: "الأسعار",
  contact: "تواصل معنا",
  footerBlurb:
    "خدمات تقنية مستقلة للمواقع الإلكترونية والبرمجيات وتحسين محركات البحث وأتمتة الذكاء الاصطناعي وتدفقات البيانات — تُبنى في الهند وتُقدَّم حول العالم.",
  madeIn: "صُنع في الهند · نخدم العالم",
  reviewNotice: "هذه الترجمة قيد المراجعة. الصفحات الإنجليزية هي المرجع المعتمد.",
};

const byCode: Record<string, UiStrings> = { "": en, hi, gu, ta, ar };

export const ui = (code: string): UiStrings => byCode[code] ?? en;
