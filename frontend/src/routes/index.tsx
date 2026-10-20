import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Clock,
  MapPin,
  ChevronRight,
  Star,
  Award,
  ArrowRight,
  ChevronDown,
  Building,
  Home,
  Check,
  Send,
  Instagram,
  Youtube,
  Facebook,
  Video,
  Globe,
  Languages,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_LOGO_URL } from "@/lib/branding";
import { fetchCompany, parseLandingConfig, DEFAULT_LANDING_CONFIG } from "@/lib/crm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Best PVC Ceiling & Interior Designer in Nashik | Owais Interior",
      },
      {
        name: "description",
        content:
          "Looking for expert PVC ceiling, false ceiling and interior design work in Nashik? Contact Owais Interior Designer for best POP false ceiling, waterproof PVC wall panels, gypsum ceiling & modular home decor. Call +91 7756043214 for free site estimate.",
      },
      {
        name: "keywords",
        content:
          "best pvc ceiling in nashik, pvc ceiling nashik, interior designer in nashik, best interior designer nashik, pop false ceiling nashik, false ceiling contractor nashik, pvc wall panel nashik, gypsum false ceiling nashik, pvc ceiling design, pop design for hall nashik, home interior decorator nashik, false ceiling rates in nashik, owais interior nashik, owais interior, owaisinterior, nashikpop, wadala nashik interior",
      },
      { property: "og:site_name", content: "Owais Interior Designer" },
      {
        property: "og:title",
        content: "Best PVC Ceiling & Interior Designer in Nashik | Owais Interior",
      },
      {
        property: "og:description",
        content:
          "Looking for expert PVC ceiling, false ceiling and interior design work in Nashik? Contact Owais Interior for stylish and affordable home decor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://owais-interior.vercel.app/" },
      { property: "og:image", content: "/images/pop-ceiling-nashik.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Best PVC Ceiling & Interior Designer in Nashik | Owais Interior",
      },
      {
        name: "twitter:description",
        content:
          "Looking for expert PVC ceiling, false ceiling and interior design work in Nashik? Contact Owais Interior for stylish and affordable home decor.",
      },
      { name: "twitter:image", content: "/images/pop-ceiling-nashik.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
          "@id": "https://owais-interior.vercel.app/#business",
          name: "Owais Interior Designer",
          alternateName: [
            "Owais Interior Nashik",
            "Nashik POP & PVC Contractor",
            "Owais Interior",
            "nashikpop",
          ],
          url: "https://owais-interior.vercel.app/",
          logo: "https://owais-interior.vercel.app/owais-logo.png",
          image: "https://owais-interior.vercel.app/images/pop-ceiling-nashik.jpg",
          description:
            "Premier POP false ceiling, PVC wall panel, and interior design contractor based in Nashik, Maharashtra. Offering customized false ceiling, modular kitchens, and turnkey interior solutions.",
          telephone: "+91-7756043214",
          email: "onlyw6469@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rahmat Nagar, Wadala",
            addressLocality: "Nashik",
            addressRegion: "Maharashtra",
            postalCode: "422006",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.9975,
            longitude: 73.7898,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "20:30",
            },
          ],
          priceRange: "₹₹",
          areaServed: [
            { "@type": "City", name: "Nashik" },
            { "@type": "AdministrativeArea", name: "Wadala, Nashik" },
            { "@type": "AdministrativeArea", name: "Indira Nagar, Nashik" },
            { "@type": "AdministrativeArea", name: "Gangapur Road, Nashik" },
            { "@type": "AdministrativeArea", name: "College Road, Nashik" },
            { "@type": "AdministrativeArea", name: "Panchavati, Nashik" },
            { "@type": "AdministrativeArea", name: "Govind Nagar, Nashik" },
            { "@type": "AdministrativeArea", name: "Pathardi Phata, Nashik" },
            { "@type": "AdministrativeArea", name: "Nashik Road" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Interior & False Ceiling Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "POP False Ceiling Design & Installation",
                  description:
                    "Modern Plaster of Paris false ceiling with LED cove lights, cornices, and chandelier bases in Nashik.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PVC Wall Panels & PVC False Ceiling",
                  description:
                    "100% waterproof and termite-proof decorative PVC wall panels, fluted louvers, and ceiling panels in Nashik.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Gypsum False Ceiling",
                  description:
                    "Saint-Gobain Gyproc board false ceiling for heat insulation and acoustic sound absorption.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Commercial Grid & Office False Ceiling",
                  description:
                    "2x2 acoustic tiles and T-grid ceiling systems for showrooms, offices, and clinics.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: PublicLandingPage,
});

function PublicLandingPage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("POP False Ceiling");
  const [propertyType, setPropertyType] = useState("2BHK Flat");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const { data: company } = useQuery({ queryKey: ["company"], queryFn: fetchCompany });
  const landingConfig = parseLandingConfig(company?.website);
  const companyLogoUrl =
    company?.logo_url && !company.logo_url.startsWith("data:image")
      ? company.logo_url
      : DEFAULT_LOGO_URL;

  const phonePrimary = company?.mobile1 || "7756043214";
  const phoneSecondary = company?.mobile2 || "7721926290";

  const t = {
    topBanner:
      lang === "hi"
        ? "नासिक व आसपास के सभी क्षेत्रों में सेवाएं — मुफ्त साइट विज़िट और एस्टीमेट"
        : "Serving All Areas Across Nashik, Maharashtra — Free Site Inspection & Estimate",
    staffLogin: lang === "hi" ? "स्टाफ लॉगिन" : "Staff Login",
    navServices: lang === "hi" ? "सेवाएं" : "Services",
    navPop: lang === "hi" ? "पीओपी सीलिंग" : "POP Ceilings",
    navPvc: lang === "hi" ? "पीवीसी पैनल्स" : "PVC Panels",
    navGallery: lang === "hi" ? "गैलरी" : "Work Gallery",
    navAreas: lang === "hi" ? "नासिक क्षेत्र" : "Nashik Areas",
    navQuote: lang === "hi" ? "मुफ्त कोटेशन" : "Free Quote",
    navFaqs: lang === "hi" ? "सवाल-जवाब" : "FAQs",
    tagline: lang === "hi" ? "नासिक पीओपी और पीवीसी स्पेशलिस्ट्स" : "Nashik POP & PVC Specialists",
    badge:
      lang === "hi"
        ? "#1 नासिक का भरोसेमंद POP फॉल्स सीलिंग और PVC कांट्रैक्टर"
        : "#1 POP False Ceiling & PVC Interior Contractor in Nashik",
    heroTitle1: lang === "hi" ? "बेस्ट" : "Top",
    heroTitlePop: lang === "hi" ? "PVC सीलिंग" : "PVC Ceiling",
    heroTitleAnd: lang === "hi" ? "&" : "&",
    heroTitlePvc: lang === "hi" ? "इंटीरियर डिज़ाइन सर्विसेज़" : "Interior Design Services",
    heroTitleCity: lang === "hi" ? "नासिक में" : "in Nashik",
    heroDesc:
      lang === "hi"
        ? "ओवैस इंटीरियर डिज़ाइनर के अनुभवी कारीगरों के साथ अपने घर, दुकान या ऑफिस को दें मॉडर्न और खूबसूरत लुक। नासिक में मॉडर्न PVC फॉल्स सीलिंग, POP सीलिंग, 100% वॉटरप्रूफ PVC वॉल पैनल्स, जिप्सम सीलिंग, कोव LED लाइटिंग और इंटीरियर का भरोसेमंद काम।"
        : "Transform your home, shop, or office with master craftsmen from Owais Interior Designer. Specialists in designer PVC ceiling, POP false ceilings, 100% waterproof PVC wall panels, gypsum board ceilings, cove LED lighting, and turnkey interior design services in Nashik.",
    statExp: lang === "hi" ? "10+ वर्ष" : "10+ Years",
    statExpSub: lang === "hi" ? "नासिक अनुभव" : "Nashik Experience",
    statProj: lang === "hi" ? "500+" : "500+",
    statProjSub: lang === "hi" ? "प्रोजेक्ट्स पूरे किए" : "Projects Done",
    statWaterproof: lang === "hi" ? "100%" : "100%",
    statWaterproofSub: lang === "hi" ? "वॉटरप्रूफ PVC" : "Waterproof PVC",
    statRating: lang === "hi" ? "4.9 ★" : "4.9 ★",
    statRatingSub: lang === "hi" ? "ग्राहकों की रेटिंग" : "Customer Rating",
    btnFreeEstimate: lang === "hi" ? "मुफ्त साइट एस्टीमेट पाएं" : "Get Free Site Estimate",
    btnCall: lang === "hi" ? "कॉल करें" : "Call",
    trustLine:
      lang === "hi"
        ? "कोई बिचौलिया नहीं • सीधे कारीगर की वाजिब दरें • नासिक में फ्री साइट विज़िट"
        : "Zero middleman commission • Direct master craftsmen rates • Free site visit in Nashik",
    featuredBadge: lang === "hi" ? "नासिक का नया प्रोजेक्ट" : "Featured Nashik Project",
    featuredCompleted: lang === "hi" ? "सफलतापूर्वक पूर्ण" : "Completed",
    servicesSub:
      lang === "hi" ? "फॉल्स सीलिंग और वॉल सोलूशन्स" : "Complete False Ceiling & Wall Solutions",
    servicesTitle:
      lang === "hi" ? "नासिक में हमारी प्रमुख सेवाएं" : "Specialized Interior Services in Nashik",
    servicesDesc:
      lang === "hi"
        ? "मॉडर्न POP सीलिंग डिज़ाइन से लेकर नमी से सुरक्षित रखने वाले 100% वॉटरप्रूफ PVC वॉल पैनल्स तक, हम हर काम पूरी फिनिशिंग के साथ करते हैं।"
        : "From contemporary POP ceiling patterns with ambient LED channels to durable waterproof PVC wall paneling, we handle projects of every scale.",
    btnBookVisit: lang === "hi" ? "साइट विज़िट बुक करें" : "Book Site Visit",
    gallerySub: lang === "hi" ? "डिज़ाइन पोर्टफोलियो" : "Design Portfolio",
    galleryTitle:
      lang === "hi" ? "नासिक में हमारे हालिया प्रोजेक्ट्स" : "Recent Projects Across Nashik",
    galleryBtn:
      lang === "hi"
        ? "व्हाट्सएप पर फोटो कैटलॉग मंगाएं"
        : "Request Full Photo Catalogue on WhatsApp",
    btnWatchClip: lang === "hi" ? "वीडियो देखें" : "Watch Clip",
    btnSimilarQuote: lang === "hi" ? "ऐसा ही कोटेशन पाएं" : "Get Similar Quote",
    quoteSub: lang === "hi" ? "सटीक और तुरंत एस्टीमेट" : "Fast & Accurate Estimation",
    quoteTitle:
      lang === "hi"
        ? "नासिक में अपनी जगह के लिए तुरंत मुफ्त कोटेशन पाएं"
        : "Get an Instant Free Quote For Your Space in Nashik",
    quoteDesc:
      lang === "hi"
        ? "नीचे दिया गया फॉर्म भरें या सीधे व्हाट्सएप पर संपर्क करें। हम आपको अनुमानित खर्च, डिज़ाइन विकल्प और नासिक में 100% फ्री साइट नाप का समय देंगे।"
        : "Fill out the quick inquiry below or reach out directly via WhatsApp. We'll provide estimated pricing, design options, and schedule a 100% free site measurement across Nashik.",
    quoteF1Title: lang === "hi" ? "मुफ्त साइट नाप (Measurement)" : "Free Site Measurement",
    quoteF1Desc:
      lang === "hi"
        ? "हम नासिक में कहीं भी आपके घर या साइट पर मटेरियल सैम्पल्स के साथ आते हैं।"
        : "We visit your home or site anywhere in Nashik at your convenience with material samples.",
    quoteF2Title: lang === "hi" ? "QR-सत्यापित डिजिटल कोटेशन" : "QR-Verified Digital Quotations",
    quoteF2Desc:
      lang === "hi"
        ? "डिजिटल QR वेरिफिकेशन के साथ रूम-दर-रूम आइटमयुक्त पारदर्शी PDF कोटेशन प्राप्त करें।"
        : "Receive an itemized room-by-room PDF quotation with digital QR verification.",
    quoteF3Title: lang === "hi" ? "सीधे कांट्रैक्टर से संपर्क" : "Direct Contractor Contact",
    quoteFormTitle: lang === "hi" ? "व्हाट्सएप पर तुरंत पूछताछ" : "Quick Inquiry & WhatsApp Quote",
    quoteFormSub:
      lang === "hi"
        ? "व्हाट्सएप पर हमारे कारीगरों को अपनी आवश्यकताएं सीधे भेजें।"
        : "Send requirements directly to our master craftsmen on WhatsApp.",
    lblService: lang === "hi" ? "सर्विस चुनें" : "Select Service",
    lblProperty: lang === "hi" ? "प्रॉपर्टी का प्रकार" : "Property Type",
    lblName: lang === "hi" ? "आपका नाम" : "Your Name",
    lblPhone: lang === "hi" ? "मोबाइल नंबर" : "Mobile Number",
    lblLocation: lang === "hi" ? "नासिक में इलाका/लोकेशन" : "Nashik Locality",
    btnSendInquiry:
      lang === "hi" ? "व्हाट्सएप पर तुरंत पूछताछ भेजें" : "Send Instant Inquiry on WhatsApp",
    formGuar:
      lang === "hi"
        ? "⚡ तुरंत जवाब • कोई स्पैम नहीं • सीधे कांट्रैक्टर से बातचीत"
        : "⚡ Instant response • No spam • Direct communication with contractor",
    whySub: lang === "hi" ? "हमारे साथ काम क्यों करें" : "Why Work With Us",
    whyTitle:
      lang === "hi"
        ? "नासिक के भरोसेमंद इंटीरियर स्पेशलिस्ट"
        : "The Trusted Interior Specialists in Nashik",
    why1Title: lang === "hi" ? "सीधे मास्टर कारीगर" : "Direct Master Craftsmen",
    why1Desc:
      lang === "hi"
        ? "सीधे उन्हीं कारीगरों से काम करवाएं जो आपकी सीलिंग और पैनलिंग तैयार करते हैं। कोई बिचौलिया नहीं, सबसे किफायती दरें और बेहतरीन फिनिशिंग।"
        : "Work directly with the artisans who execute your ceiling and paneling. No third-party markups, ensuring unbeatable rates and superior workmanship.",
    why2Title: lang === "hi" ? "डिजिटल QR वेरिफिकेशन" : "Digital QR Verification",
    why2Desc:
      lang === "hi"
        ? "हमारा हर कोटेशन और बिल डिजिटल QR कोड के साथ आता है जिसे कभी भी मोबाइल से स्कैन करके ऑनलाइन चेक किया जा सकता है।"
        : "Every quotation, invoice, and payment receipt is backed by our secure QR code verification system to ensure complete transparency.",
    why3Title: lang === "hi" ? "समय पर काम पूरा" : "On-Time Handover",
    why3Desc:
      lang === "hi"
        ? "हम आपके समय की कद्र करते हैं। तय समय सीमा और समर्पित टीम के साथ आपका काम समय पर पूरा करते हैं।"
        : "We respect your time. Committed deadlines with dedicated team mobilization ensure your false ceiling or PVC installation finishes on schedule.",
    why4Title: lang === "hi" ? "सर्टिफाइड हाई-क्वालिटी मटेरियल" : "Certified Materials",
    why4Desc:
      lang === "hi"
        ? "हम सिर्फ ओरिजिनल Plaster of Paris, Saint-Gobain Gyproc बोर्ड्स और मजबूत वॉटरप्रूफ PVC पैनल्स इस्तेमाल करते हैं।"
        : "We only use verified high-tensile Plaster of Paris, genuine Saint-Gobain Gyproc boards, and heavy-gauge waterproof PVC louvers.",
    areasSub: lang === "hi" ? "नासिक कवरेज" : "Local Nashik Coverage",
    areasTitle:
      lang === "hi"
        ? "नासिक शहर और सभी उपनगरों में हमारी सेवाएं"
        : "Serving All Localities Across Nashik & Surrounding Areas",
    areasDesc:
      lang === "hi"
        ? "हमारी टीम नासिक के हर प्रमुख इलाके में ऑन-साइट नाप, डिज़ाइन कंसल्टेशन और इंस्टॉलेशन करती है।"
        : "Our teams provide on-site measurement, design consultations, and installation in every major neighborhood of Nashik.",
    faqSub: lang === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions",
    faqTitle:
      lang === "hi"
        ? "नासिक में POP और PVC से जुड़े सवाल-जवाब"
        : "POP & PVC Interior FAQs in Nashik",
    ctaTitle:
      lang === "hi"
        ? "क्या आप अपने घर को खूबसूरत बनाने के लिए तैयार हैं?"
        : "Ready to Beautify Your Home in Nashik?",
    ctaDesc:
      lang === "hi"
        ? "मुफ्त साइट इंस्पेक्शन, 3D डिज़ाइन कैटलॉग और पारदर्शी कोटेशन के लिए आज ही ओवैस इंटीरियर डिज़ाइनर से संपर्क करें।"
        : "Contact Owais Interior Designer today for a free site inspection, 3D design catalog, and transparent quotation.",
    ctaChatBtn:
      lang === "hi"
        ? `व्हाट्सएप पर चैट करें (+91 ${phonePrimary})`
        : `Chat on WhatsApp (+91 ${phonePrimary})`,
  };

  function handleWhatsAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.trim() || "Not provided";
    const cleanName = name.trim() || "Valued Customer";
    const cleanArea = area.trim() || "Nashik";

    const message = encodeURIComponent(
      `Hello Owais Interior Designer!\n\nI would like to get a free estimate and design catalog for:\n• Service: ${quoteService}\n• Property Type: ${propertyType}\n• Name: ${cleanName}\n• Contact: ${cleanPhone}\n• Location in Nashik: ${cleanArea}\n• Preferred Language: ${lang === "hi" ? "Hindi" : "English"}\n\nPlease contact me with quotation details.`,
    );
    window.open(`https://wa.me/91${phonePrimary}?text=${message}`, "_blank");
  }

  const services = [
    {
      id: "pop",
      title: "POP False Ceiling Work",
      badge: "Most Popular in Nashik",
      description:
        "Premium Plaster of Paris (POP) false ceilings tailored for living rooms, master bedrooms, and dining spaces. Includes modern concealed LED cove lighting, geometric patterns, intricate cornices, and chandelier medallions.",
      features: [
        "Hall & bedroom designer cove lighting",
        "Anti-crack high tensile plaster guarantee",
        "Custom geometric & curved ceiling designs",
        "Heat insulation for top-floor Nashik homes",
      ],
      priceHint: landingConfig.rates.pop,
      image: "/images/pop-ceiling-nashik.webp",
    },
    {
      id: "pvc",
      title: "PVC Wall Panels & Ceilings",
      badge: "100% Waterproof & Termite Proof",
      description:
        "High-density PVC wall paneling and ceiling louvers. The ideal solution for damp walls, bathrooms, kitchens, and modern living room TV backgrounds. Available in woodgrain, marble sheets, and fluted designs.",
      features: [
        "100% Waterproof & zero maintenance",
        "Termite-proof & fire-retardant",
        "Rapid 24-48 hour installation (no paint odor)",
        "Fluted acoustic louvers & marble-finish panels",
      ],
      priceHint: landingConfig.rates.pvc,
      image: "/images/pvc-wall-panels-nashik.webp",
    },
    {
      id: "gypsum",
      title: "Gypsum Board False Ceiling",
      badge: "Smooth Seamless Finish",
      description:
        "Top-grade Saint-Gobain Gyproc / USG Boral gypsum board false ceilings. Precision laser-leveled metal framework with seamless joint tape finishing ready for smooth paint application.",
      features: [
        "Ultra-smooth flush paint finish",
        "Superior acoustic sound reduction",
        "Thermal barrier reducing AC electricity bills",
        "Fire-resistant safety standards",
      ],
      priceHint: landingConfig.rates.gypsum,
      image: "/images/bedroom-gypsum-ceiling-nashik.webp",
    },
    {
      id: "commercial",
      title: "Commercial & Grid Ceilings",
      badge: "Offices, Clinics & Shops",
      description:
        "2x2 mineral fiber acoustic tiles, metal grid ceilings, and open cell ceiling systems designed for commercial offices, hospitals, showrooms, and retail stores in Nashik.",
      features: [
        "Quick access to overhead AC & wiring ducts",
        "Noise absorbing acoustic rating",
        "Cost-effective for large commercial carpet areas",
        "Clean professional corporate aesthetic",
      ],
      priceHint: landingConfig.rates.commercial,
      image: "/images/modern-kitchen-ceiling-nashik.webp",
    },
  ];

  const galleryItems = landingConfig.projects;

  const nashikAreas = [
    "Wadala Naka",
    "Rahmat Nagar",
    "Gangapur Road",
    "College Road",
    "Indira Nagar",
    "Govind Nagar",
    "Panchavati",
    "Pathardi Phata",
    "Nashik Road",
    "Ambad MIDC",
    "Satpur MIDC",
    "Deolali Camp",
    "Dwarka",
    "Mahatma Nagar",
    "Tidke Colony",
    "Ashoka Marg",
  ];

  const faqs = [
    {
      q: "What is the cost of POP false ceiling in Nashik?",
      a: "In Nashik, standard POP false ceiling rates typically range between ₹85 to ₹130 per square foot, depending on the complexity of the design, number of cove light steps, and plaster quality. At Owais Interior Designer, we provide direct craftsman rates without middleman commissions.",
    },
    {
      q: "Why are PVC wall panels popular in Nashik homes?",
      a: "Nashik frequently experiences wall dampness and moisture during monsoon seasons. PVC wall panels are 100% waterproof, anti-termite, and require zero painting. They can be installed over existing damp walls in just 1 to 2 days without mess or odors.",
    },
    {
      q: "How long does it take to complete false ceiling for a 2BHK flat in Nashik?",
      a: "A standard 2BHK flat (Hall, 2 Bedrooms, Kitchen) generally takes between 5 to 8 working days for complete framing, plastering/boarding, cutting light fixtures, and final smooth finishing.",
    },
    {
      q: "Do you provide free site visits and quotation in Nashik?",
      a: "Yes! Owais Interior Designer offers 100% free site measurement and consultation anywhere in Nashik city. Call or WhatsApp us at +91 7756043214 to schedule an appointment.",
    },
    {
      q: "How do I verify quotations and invoices issued by Owais Interior Designer?",
      a: "Every quotation, invoice, and payment receipt issued by Owais Interior Designer includes an official tamper-proof QR code. Anyone can scan this QR code with their mobile phone camera to verify the document's authenticity on our secure digital portal.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      {/* Top Banner - Royal Navy Blue */}
      <aside
        aria-label="Announcement"
        className="border-b border-blue-800 bg-blue-900 px-3 py-1.5 sm:py-2 text-xs text-blue-100 shadow-xs"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex size-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-[11px] sm:text-xs leading-tight">{t.topBanner}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher Buttons (Hindi / English) */}
            <div className="flex items-center rounded-lg bg-blue-950/90 p-0.5 border border-blue-700/80 shadow-xs">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  lang === "en"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-blue-200 hover:text-white"
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  lang === "hi"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-blue-200 hover:text-white"
                }`}
                title="हिंदी में पढ़ें"
              >
                हिंदी
              </button>
            </div>

            {/* Social Media Account Links */}
            <div className="hidden sm:flex items-center gap-2.5 pr-2 border-r border-blue-700/60">
              {landingConfig.social?.instagram && (
                <a
                  href={landingConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-white transition-colors p-1"
                  title="Follow us on Instagram"
                >
                  <Instagram className="size-3.5" />
                </a>
              )}
              {landingConfig.social?.youtube && (
                <a
                  href={landingConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-300 hover:text-white transition-colors p-1"
                  title="Subscribe on YouTube"
                >
                  <Youtube className="size-3.5" />
                </a>
              )}
              {landingConfig.social?.facebook && (
                <a
                  href={landingConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors p-1"
                  title="Follow us on Facebook"
                >
                  <Facebook className="size-3.5" />
                </a>
              )}
            </div>

            <a
              href={`tel:+91${phonePrimary}`}
              className="hidden md:inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-200 transition-colors"
            >
              <Phone className="size-3.5 text-blue-300" />
              +91 {phonePrimary}
            </a>
            <span className="text-blue-700 hidden lg:inline">|</span>
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center gap-1 text-blue-200 hover:text-white transition-colors text-[11px]"
            >
              <ShieldCheck className="size-3.5" />
              {t.staffLogin}
            </Link>
          </div>
        </div>
      </aside>

      {/* Header - Crisp White with Royal Blue Accents & Perfect Responsive Structure */}
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2.5 xs:px-3 sm:px-6 py-2 sm:py-3">
          <Link to="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink min-w-0">
            <img
              src={companyLogoUrl}
              alt="Owais Interior Designer Nashik Logo"
              className="size-8 sm:size-10 lg:size-11 rounded-full bg-white object-contain p-0.5 border-2 border-blue-600 shadow-md shadow-blue-600/10 shrink-0"
            />
            <div className="min-w-0">
              <span className="block font-display text-[13px] xs:text-sm sm:text-base lg:text-xl font-bold tracking-tight text-blue-950 leading-tight whitespace-normal sm:whitespace-nowrap">
                Owais Interior Designer
              </span>
              <span className="block text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-semibold tracking-wider text-blue-600 uppercase leading-none mt-0.5 whitespace-normal sm:whitespace-nowrap">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600"
          >
            <a href="#services" className="hover:text-blue-600 transition-colors">
              {t.navServices}
            </a>
            <a href="#pop" className="hover:text-blue-600 transition-colors">
              {t.navPop}
            </a>
            <a href="#pvc" className="hover:text-blue-600 transition-colors">
              {t.navPvc}
            </a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">
              {t.navGallery}
            </a>
            <a href="#areas" className="hover:text-blue-600 transition-colors">
              {t.navAreas}
            </a>
            <a href="#quote" className="hover:text-blue-600 transition-colors">
              {t.navQuote}
            </a>
            <a href="#faqs" className="hover:text-blue-600 transition-colors">
              {t.navFaqs}
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2.5 shrink-0">
            {/* Header Social Icons (Tablet & Desktop) */}
            {(landingConfig.social?.instagram ||
              landingConfig.social?.youtube ||
              landingConfig.social?.facebook) && (
              <div className="hidden xl:flex items-center gap-1.5 pr-1 border-r border-slate-200">
                {landingConfig.social?.instagram && (
                  <a
                    href={landingConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-pink-600 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="size-4" />
                  </a>
                )}
                {landingConfig.social?.youtube && (
                  <a
                    href={landingConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-red-600 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="size-4" />
                  </a>
                )}
                {landingConfig.social?.facebook && (
                  <a
                    href={landingConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="size-4" />
                  </a>
                )}
              </div>
            )}

            <a
              href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                "Hello Owais Interior Designer, I found your website and would like to inquire about POP false ceiling and PVC work in Nashik.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-2 xs:px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-700/20 hover:bg-emerald-800 transition-all shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="size-3.5 sm:size-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a
              href={`tel:+91${phonePrimary}`}
              className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2 xs:px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-xs shrink-0"
              title={`Call +91 ${phonePrimary}`}
            >
              <Phone className="size-3.5 sm:size-4 shrink-0" />
              <span className="hidden sm:inline">{t.btnCall}</span>
            </a>

            <Link
              to="/auth"
              className="hidden md:inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shrink-0"
              title="Employee & Admin CRM Portal"
            >
              <span>Portal</span>
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 border-b border-slate-100 pb-3">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navServices}
              </a>
              <a
                href="#pop"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navPop}
              </a>
              <a
                href="#pvc"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navPvc}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navGallery}
              </a>
              <a
                href="#areas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navAreas}
              </a>
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navQuote}
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {t.navFaqs}
              </a>
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                CRM Portal
              </Link>
            </div>

            {/* Mobile Language Switcher inside Drawer */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Languages className="size-4 text-blue-600" />
                Language / भाषा:
              </span>
              <div className="flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("hi")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                    lang === "hi"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* Mobile Social Links in Drawer */}
            {(landingConfig.social?.instagram ||
              landingConfig.social?.youtube ||
              landingConfig.social?.facebook) && (
              <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100 text-slate-600">
                {landingConfig.social?.instagram && (
                  <a
                    href={landingConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 hover:text-pink-600 text-pink-600"
                    title="Instagram"
                  >
                    <Instagram className="size-4" />
                  </a>
                )}
                {landingConfig.social?.youtube && (
                  <a
                    href={landingConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 hover:text-red-600 text-red-600"
                    title="YouTube"
                  >
                    <Youtube className="size-4" />
                  </a>
                )}
                {landingConfig.social?.facebook && (
                  <a
                    href={landingConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 hover:text-blue-600 text-blue-600"
                    title="Facebook"
                  >
                    <Facebook className="size-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Hero Section - Clean Blue & White Glow */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
        {/* Soft blue ambient glow accents - contained within bounds */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[320px] sm:size-[500px] lg:size-[600px] -translate-x-1/2 rounded-full bg-blue-400/15 blur-[100px] sm:blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 size-[250px] sm:size-[400px] rounded-full bg-sky-300/20 blur-[90px] sm:blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1.5 text-xs font-semibold text-blue-800 shadow-xs max-w-full">
                <Sparkles className="size-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{t.badge}</span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] break-words">
                {t.heroTitle1} <span className="text-blue-600">{t.heroTitlePop}</span>{" "}
                {t.heroTitleAnd} <span className="text-blue-900">{t.heroTitlePvc}</span>{" "}
                {t.heroTitleCity}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl break-words">
                {t.heroDesc}
              </p>

              {/* Trust Badges - Responsive Grid (2 cols on mobile, 4 on desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 pt-1">
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 xs:p-3 text-center shadow-xs min-w-0">
                  <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-600">
                    {t.statExp}
                  </div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight">
                    {t.statExpSub}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 xs:p-3 text-center shadow-xs min-w-0">
                  <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-600">
                    {t.statProj}
                  </div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight">
                    {t.statProjSub}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 xs:p-3 text-center shadow-xs min-w-0">
                  <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-emerald-700">
                    {t.statWaterproof}
                  </div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight">
                    {t.statWaterproofSub}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsRatingModalOpen(true)}
                  className="rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100/80 p-2.5 xs:p-3 text-center shadow-xs transition-all duration-200 cursor-pointer group text-center w-full min-w-0"
                  title="Click to view genuine Google & Justdial ratings and customer reviews"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-600 group-hover:scale-105 transition-transform inline-flex items-center gap-0.5">
                      {t.statRating}
                    </span>
                    <span className="size-1.5 rounded-full bg-blue-500 animate-ping inline-block sm:hidden" />
                  </div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-blue-700 mt-0.5 flex flex-wrap items-center justify-center gap-x-1 leading-tight">
                    <span>{t.statRatingSub}</span>
                    <span className="text-[9.5px] xs:text-[10px] text-blue-500 underline font-normal shrink-0">
                      (View)
                    </span>
                  </div>
                </button>
              </div>

              {/* CTA buttons - full-width on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 text-xs xs:text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all text-center min-w-0"
                >
                  <span className="truncate">{t.btnFreeEstimate}</span>
                  <ArrowRight className="size-4 shrink-0" />
                </a>
                <a
                  href={`tel:+91${phonePrimary}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 text-xs xs:text-sm font-semibold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all text-center min-w-0"
                >
                  <Phone className="size-4 text-blue-600 shrink-0" />
                  <span className="truncate">
                    {t.btnCall} +91 {phonePrimary}
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-2 text-xs font-medium text-slate-600 pt-1">
                <CheckCircle2 className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="leading-snug">{t.trustLine}</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl border-2 sm:border-4 border-white bg-white shadow-xl shadow-blue-900/10">
                <div className="relative overflow-hidden bg-slate-900">
                  <img
                    src="/images/pop-ceiling-nashik.webp"
                    srcSet="/images/pop-ceiling-nashik-sm.webp 600w, /images/pop-ceiling-nashik.webp 1200w"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    width={1200}
                    height={670}
                    alt="Best PVC ceiling, POP false ceiling design and interior work by Owais Interior Designer Nashik"
                    className="w-full h-auto max-h-[380px] sm:max-h-[440px] aspect-[1200/670] object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 sm:top-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between gap-1.5 pointer-events-none">
                    <span className="rounded-full bg-blue-900/90 backdrop-blur-md px-2 xs:px-2.5 py-0.5 sm:py-1 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white shadow-md border border-blue-400/30 truncate max-w-[62%] sm:max-w-none">
                      {t.featuredBadge}
                    </span>
                    <span className="rounded-full bg-emerald-700/95 backdrop-blur-md px-2 xs:px-2.5 py-0.5 sm:py-1 text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-white shadow-md border border-emerald-400/30 shrink-0">
                      ✓ {t.featuredCompleted}
                    </span>
                  </div>
                </div>

                {/* Clear uncropped Project Details bar directly below the photo */}
                <div className="p-3 xs:p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-2 sm:gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs xs:text-sm font-bold text-slate-900 truncate">
                      Modern Living Room POP Ceiling
                    </p>
                    <p className="text-[11px] xs:text-xs text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="size-3 xs:size-3.5 text-blue-600 shrink-0" />
                      Gangapur Road, Nashik
                    </p>
                  </div>
                  <a
                    href="#gallery"
                    className="shrink-0 text-[11px] xs:text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-2 xs:px-2.5 py-1.5 rounded-lg border border-blue-100 transition-colors"
                  >
                    View All →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Soft Blue Tinted Background */}
      <section id="services" className="border-t border-slate-200/80 bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {t.servicesSub}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              {t.servicesTitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600">{t.servicesDesc}</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {services.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between"
              >
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-5 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                    <img
                      src={svc.image}
                      alt={`${svc.title} by Owais Interior Designer Nashik`}
                      width={600}
                      height={450}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2.5 sm:space-y-3">
                    <span className="inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-blue-700 border border-blue-200/60">
                      {svc.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.description}
                    </p>
                    <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                      {svc.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="size-3.5 text-blue-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs sm:text-sm font-bold text-blue-700">
                        {svc.priceHint}
                      </span>
                      <a
                        href="#quote"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                      >
                        <span>{t.btnBookVisit}</span>
                        <ChevronRight className="size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Work Gallery - Pure White Background */}
      <section id="gallery" className="py-16 sm:py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                {t.gallerySub}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                {t.galleryTitle}
              </h2>
            </div>
            <a
              href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                "Hello Owais Interior Designer, please share your latest false ceiling and PVC design photo catalogue.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              <span>{t.galleryBtn}</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden aspect-[4/3] relative bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} in ${item.location}`}
                      width={600}
                      height={450}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute top-2 left-2 rounded-full bg-blue-900/80 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-xs">
                      {item.category}
                    </span>
                    {item.videoUrl && (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-red-600/90 hover:bg-red-700 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-white shadow-md transition-all"
                      >
                        <Video className="size-3.5" />
                        <span>{t.btnWatchClip}</span>
                      </a>
                    )}
                  </div>
                  <div className="p-3.5 sm:p-4 space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="size-3 text-blue-600 shrink-0" />
                      {item.location}
                    </p>
                    {item.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 pt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 pt-0">
                  <a
                    href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                      `Hello Owais Interior Designer! I loved your project "${item.title}" in ${item.location}. Can you provide an estimate for a similar design?`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50/70 py-2.5 text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all text-center"
                  >
                    <MessageSquare className="size-3.5" />
                    <span>{t.btnSimilarQuote}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Quotation Form & WhatsApp Estimator - Crisp Clean Gradient */}
      <section
        id="quote"
        className="py-16 sm:py-20 border-t border-slate-200/80 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                {t.quoteSub}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                {t.quoteTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {t.quoteDesc}
              </p>

              <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{t.quoteF1Title}</h3>
                    <p className="text-xs text-slate-600">{t.quoteF1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{t.quoteF2Title}</h3>
                    <p className="text-xs text-slate-600">{t.quoteF2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{t.quoteF3Title}</h3>
                    <p className="text-xs text-slate-600">
                      Call directly at{" "}
                      <strong className="text-blue-900 font-semibold">+91 {phonePrimary}</strong> or{" "}
                      <strong className="text-blue-900 font-semibold">+91 {phoneSecondary}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card - White Card with Blue Accents */}
            <div className="lg:col-span-6">
              <Card className="border-slate-200 bg-white shadow-xl shadow-blue-900/5">
                <CardContent className="p-4 xs:p-6 sm:p-8">
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-blue-950">{t.quoteFormTitle}</h3>
                      <p className="text-xs text-slate-500">{t.quoteFormSub}</p>
                    </div>

                    <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="service-select"
                          className="text-xs font-semibold text-slate-700"
                        >
                          {t.lblService}
                        </Label>
                        <select
                          id="service-select"
                          value={quoteService}
                          onChange={(e) => setQuoteService(e.target.value)}
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                        >
                          <option value="POP False Ceiling">POP False Ceiling</option>
                          <option value="PVC Wall Paneling & Ceiling">
                            PVC Wall Panels / Louvers
                          </option>
                          <option value="Gypsum False Ceiling">Gypsum Board Ceiling</option>
                          <option value="Commercial Grid Ceiling">Commercial Grid Ceiling</option>
                          <option value="Full Home Interior Renovation">Full Home Interior</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="property-select"
                          className="text-xs font-semibold text-slate-700"
                        >
                          {t.lblProperty}
                        </Label>
                        <select
                          id="property-select"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden"
                        >
                          <option value="1BHK Flat">1BHK Flat</option>
                          <option value="2BHK Flat">2BHK Flat</option>
                          <option value="3BHK Flat / Rowhouse">3BHK Flat / Rowhouse</option>
                          <option value="Bungalow / Villa">Bungalow / Villa</option>
                          <option value="Commercial Shop / Office">Commercial Shop / Office</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cust-name" className="text-xs font-semibold text-slate-700">
                        {t.lblName}
                      </Label>
                      <Input
                        id="cust-name"
                        type="text"
                        placeholder="e.g. Rahul Patil"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-600"
                        required
                      />
                    </div>

                    <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="cust-phone"
                          className="text-xs font-semibold text-slate-700"
                        >
                          {t.lblPhone}
                        </Label>
                        <Input
                          id="cust-phone"
                          type="tel"
                          placeholder="e.g. 9822XXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-600"
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="cust-area" className="text-xs font-semibold text-slate-700">
                          {t.lblLocation}
                        </Label>
                        <Input
                          id="cust-area"
                          type="text"
                          placeholder="e.g. Gangapur Rd / Wadala"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 sm:py-6 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-center"
                    >
                      <Send className="size-4 shrink-0" />
                      <span className="truncate">{t.btnSendInquiry}</span>
                    </Button>

                    <p className="text-center text-[11px] text-slate-500">{t.formGuar}</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Owais Interior Designer */}
      <section className="py-16 sm:py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {t.whySub}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              {t.whyTitle}
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Award className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{t.why1Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.why1Desc}</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{t.why2Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.why2Desc}</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Clock className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{t.why3Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.why3Desc}</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Layers className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{t.why4Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.why4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Nashik Service Areas (SEO Anchor Cloud) */}
      <section id="areas" className="py-14 sm:py-16 border-t border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {t.areasSub}
            </span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              {t.areasTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">{t.areasDesc}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {nashikAreas.map((areaName, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-all shadow-xs"
              >
                <MapPin className="size-3 text-blue-600" />
                <span>{areaName}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section id="faqs" className="py-16 sm:py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {t.faqSub}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm md:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-slate-400 shrink-0 ml-2 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip - Royal Blue Accent */}
      <section className="border-t border-blue-900 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 py-12 sm:py-16 text-white pb-24 md:pb-16">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-5 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {t.ctaTitle}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                "Hello Owais Interior Designer, I would like to schedule a site visit for POP / PVC work in Nashik.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-700/30 hover:bg-emerald-800 transition-all text-center"
            >
              <MessageSquare className="size-4 shrink-0" />
              <span>{t.ctaChatBtn}</span>
            </a>
            <a
              href={`tel:+91${phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-blue-950 shadow-md hover:bg-blue-50 transition-all text-center"
            >
              <Phone className="size-4 text-blue-600 shrink-0" />
              <span>
                {t.btnCall} +91 {phonePrimary}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Quick Action Bar (Never Moves / Always in Fixed Place) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] flex items-center gap-2 shadow-2xl">
        <a
          href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
            "Hello Owais Interior Designer, I would like to get a quote for POP / PVC work in Nashik.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-700 py-2.5 px-2 text-xs font-bold text-white shadow-md active:bg-emerald-800"
        >
          <MessageSquare className="size-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        <a
          href={`tel:+91${phonePrimary}`}
          className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2.5 px-2 text-xs font-bold text-white shadow-md active:bg-blue-700"
        >
          <Phone className="size-4 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href="#quote"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-slate-700 hover:bg-slate-200 shrink-0"
          title="Estimate"
        >
          <Send className="size-4 text-blue-600" />
        </a>
      </div>

      {/* Footer - Deep Navy */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12 text-xs text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4 pb-8 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <img
                  src={companyLogoUrl}
                  alt="Owais Interior Designer"
                  className="size-8 rounded-full bg-white p-0.5 object-contain"
                />
                <span className="font-display text-base font-bold text-white">
                  Owais Interior Designer
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Turning your space into elegant design. Nashik's specialist in POP false ceilings,
                PVC wall panels, and turnkey interiors.
              </p>
              <p className="text-blue-400 font-medium">Nashik, Maharashtra, India</p>

              {/* Official Social Media Channels */}
              <div className="pt-2 flex items-center gap-3">
                {landingConfig.social?.instagram && (
                  <a
                    href={landingConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-300 hover:text-white hover:border-pink-500 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="size-3.5 text-pink-500" />
                    <span className="text-[11px]">Instagram</span>
                  </a>
                )}
                {landingConfig.social?.youtube && (
                  <a
                    href={landingConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-300 hover:text-white hover:border-red-500 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="size-3.5 text-red-500" />
                    <span className="text-[11px]">YouTube</span>
                  </a>
                )}
                {landingConfig.social?.facebook && (
                  <a
                    href={landingConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="size-3.5 text-blue-500" />
                    <span className="text-[11px]">Facebook</span>
                  </a>
                )}
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <p className="font-semibold text-white uppercase tracking-wider text-xs">
                Key Services
              </p>
              <ul className="space-y-1.5 text-slate-300">
                <li>POP False Ceiling Design</li>
                <li>PVC Wall Panels &amp; Louvers</li>
                <li>Gypsum Board False Ceiling</li>
                <li>Commercial 2x2 Grid Ceilings</li>
                <li>Modular Kitchen &amp; Wardrobes</li>
                <li>LED Cove Light Channels</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <p className="font-semibold text-white uppercase tracking-wider text-xs">
                Contact &amp; Hours
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> Rahmat Nagar, Wadala, Nashik, Maharashtra 422006
              </p>
              <p className="text-slate-300">
                <strong>Primary Phone:</strong> +91 {phonePrimary}
              </p>
              <p className="text-slate-300">
                <strong>Secondary Phone:</strong> +91 {phoneSecondary}
              </p>
              <p className="text-slate-300">
                <strong>Email:</strong> onlyw6469@gmail.com
              </p>
              <p className="text-slate-300">
                <strong>Hours:</strong> Mon - Sun: 9:00 AM - 8:30 PM
              </p>
            </div>

            {/* Col 4 */}
            <div className="space-y-2">
              <p className="font-semibold text-white uppercase tracking-wider text-xs">
                Quick Access
              </p>
              <div className="space-y-2">
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500 transition-colors w-full justify-center"
                >
                  <ShieldCheck className="size-3.5 text-blue-400" />
                  <span>Admin &amp; Employee Portal</span>
                </Link>
                <p className="text-[11px] text-slate-300 text-center">
                  Secure staff login for quotations, billing, and receipts.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
            <p>
              © {new Date().getFullYear()} Owais Interior Designer. All rights reserved. Nashik,
              Maharashtra.
            </p>
            <p className="text-slate-300">
              Keywords:{" "}
              <span className="text-slate-200">
                owaisinterior • nashikpop • pvc nashik • false ceiling contractor
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Customer Ratings & Genuine Reviews Modal - Royal Blue & Crisp White Theme */}
      {isRatingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rating-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          {/* Backdrop with royal blue tinted glassmorphic blur */}
          <div
            className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsRatingModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container: Crisp White with Royal Blue Accents & Shadow */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border-2 border-blue-100 bg-white text-slate-900 shadow-2xl shadow-blue-900/20 z-10 my-auto animate-in zoom-in-95 duration-200">
            {/* Header: Royal Navy Blue Bar */}
            <div className="relative border-b border-blue-800 bg-gradient-to-r from-blue-900 via-blue-850 to-blue-900 px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 border border-amber-300/40 shadow-xs">
                  <Star className="size-5 fill-amber-300" />
                </div>
                <div>
                  <h3
                    id="rating-modal-title"
                    className="text-base sm:text-lg font-bold text-white leading-tight"
                  >
                    Customer Ratings &amp; Reviews
                  </h3>
                  <p className="text-xs text-blue-200">
                    Verified ratings for Owais Interior Designer, Nashik
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsRatingModalOpen(false)}
                className="rounded-lg p-2 text-blue-200 hover:bg-blue-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content Body: Crisp White Background with Royal Blue Card Highlights */}
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 max-h-[75vh] overflow-y-auto bg-slate-50/50">
              {/* Platform Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Google Reviews Card */}
                <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-700 shadow-xs">
                          G
                        </div>
                        <span className="text-sm font-bold text-slate-900">Google Reviews</span>
                      </div>
                      <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-[10px] font-bold border border-emerald-200">
                        Top Rated
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-3xl font-extrabold text-blue-600">4.9</span>
                      <div className="flex items-center text-amber-500 text-sm">{"★★★★★"}</div>
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                      Owais Interior Designer, Nashik
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Owais+Interior+Designer+Nashik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all text-center w-full"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>

                {/* Justdial Verified Card */}
                <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-white p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-xs font-bold text-amber-700 shadow-xs">
                          JD
                        </div>
                        <span className="text-sm font-bold text-slate-900">Justdial Profile</span>
                      </div>
                      <span className="rounded-full bg-amber-50 text-amber-700 px-2.5 py-0.5 text-[10px] font-bold border border-amber-200">
                        Verified
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-3xl font-extrabold text-amber-600">4.7</span>
                      <div className="flex items-center text-amber-500 text-sm">{"★★★★★"}</div>
                      <span className="text-xs text-slate-500">(43 Ratings)</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                      Sarda Circle / Doodh Bazar, Nashik
                    </p>
                  </div>

                  <a
                    href="https://www.justdial.com/Nashik/Owais-Interior-Near-By-Sarda-Circle-Near-By-Akbar-Soda-Doodh-Bazar/0253PX253-X253-241030030645-K5U4_BZDET/reviews?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-amber-600/20 transition-all text-center w-full"
                  >
                    <span>View on Justdial</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* Top 3 Genuine Customer Reviews */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Top Customer Experiences
                  </h4>
                  <span className="text-[11px] font-medium text-slate-500">
                    100% Genuine Feedback
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Review 1 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 space-y-2 hover:border-blue-300 shadow-2xs transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200">
                          BK
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          Bilal Khan
                        </span>
                      </div>
                      <div className="text-amber-500 text-xs">★★★★★</div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;Every thing ok I liked his work And I would like to thanks owais khan
                      for making more professional my office&rdquo;
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 space-y-2 hover:border-blue-300 shadow-2xs transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-200">
                          SK
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          Shradhal Kumavat
                        </span>
                      </div>
                      <div className="text-amber-500 text-xs">★★★★★</div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;Owais Interior is great! Their prices are very good, and I saved money.
                      The service is quick, and they finished my project fast.&rdquo;
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 space-y-2 hover:border-blue-300 shadow-2xs transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200">
                          A
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">Ahmed</span>
                      </div>
                      <div className="text-amber-500 text-xs">★★★★★</div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;I had a great experience with Owais Interior... They responded very
                      quickly to my request, which I really liked. Excellent service!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer action: Crisp White & Royal Blue Accent */}
            <div className="border-t border-slate-200 bg-white px-5 py-3.5 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">Want to book a free site inspection?</span>
              <a
                href="#quote"
                onClick={() => setIsRatingModalOpen(false)}
                className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Get Free Estimate →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
