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
        title: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior Contractors",
      },
      {
        name: "description",
        content:
          "Best POP false ceiling and PVC wall panel contractor in Nashik. Expert gypsum ceiling, modular kitchens, cove lighting & home renovation. Call +91 7756043214 for free site estimate in Nashik.",
      },
      {
        name: "keywords",
        content:
          "owais interior, owaisinterior, nashikpop, nashik pop, pop contractor nashik, pvc panel nashik, pvc ceiling nashik, false ceiling nashik, gypsum ceiling nashik, pop false ceiling nashik, pvc wall panel nashik, interior designer nashik, wadala nashik interior, best pop design nashik",
      },
      { property: "og:site_name", content: "Owais Interior Designer" },
      {
        property: "og:title",
        content: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior Contractors",
      },
      {
        property: "og:description",
        content:
          "Top-rated POP false ceiling & PVC wall panel contractor in Nashik. Expert gypsum ceiling, modular interiors & renovation. Call 7756043214 for free site estimate!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://owais-interior.vercel.app/" },
      { property: "og:image", content: "/images/pop-ceiling-nashik.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior",
      },
      {
        name: "twitter:description",
        content:
          "Top POP false ceiling & PVC wall panel contractor in Nashik. Free site measurement & quotes across Nashik.",
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
  const [quoteService, setQuoteService] = useState("POP False Ceiling");
  const [propertyType, setPropertyType] = useState("2BHK Flat");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { data: company } = useQuery({ queryKey: ["company"], queryFn: fetchCompany });
  const landingConfig = parseLandingConfig(company?.website);

  const phonePrimary = company?.mobile1 || "7756043214";
  const phoneSecondary = company?.mobile2 || "7721926290";

  function handleWhatsAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.trim() || "Not provided";
    const cleanName = name.trim() || "Valued Customer";
    const cleanArea = area.trim() || "Nashik";

    const message = encodeURIComponent(
      `Hello Owais Interior Designer!\n\nI would like to get a free estimate and design catalog for:\n• Service: ${quoteService}\n• Property Type: ${propertyType}\n• Name: ${cleanName}\n• Contact: ${cleanPhone}\n• Location in Nashik: ${cleanArea}\n\nPlease contact me with quotation details.`
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
      image: "/images/pop-ceiling-nashik.jpg",
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
      image: "/images/pvc-wall-panels-nashik.jpg",
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
      image: "/images/bedroom-gypsum-ceiling-nashik.jpg",
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
      image: "/images/modern-kitchen-ceiling-nashik.jpg",
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
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Banner - Royal Navy Blue */}
      <aside aria-label="Announcement" className="border-b border-blue-800 bg-blue-900 px-4 py-2 text-xs text-blue-100 shadow-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Serving All Areas Across Nashik, Maharashtra — Free Site Inspection &amp; Estimate</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Real Social Media Account Links */}
            <div className="flex items-center gap-3 pr-2 border-r border-blue-700/60">
              {landingConfig.social?.instagram && (
                <a
                  href={landingConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-white transition-colors"
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
                  className="text-red-300 hover:text-white transition-colors"
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
                  className="text-blue-200 hover:text-white transition-colors"
                  title="Follow us on Facebook"
                >
                  <Facebook className="size-3.5" />
                </a>
              )}
            </div>

            <a
              href={`tel:+91${phonePrimary}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-200 transition-colors"
            >
              <Phone className="size-3.5 text-blue-300" />
              +91 {phonePrimary}
            </a>
            <span className="text-blue-700 hidden sm:inline">|</span>
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center gap-1 text-blue-200 hover:text-white transition-colors"
            >
              <ShieldCheck className="size-3.5" />
              Staff Login
            </Link>
          </div>
        </div>
      </aside>

      {/* Header - Crisp White with Royal Blue Accents */}
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={DEFAULT_LOGO_URL}
              alt="Owais Interior Designer Nashik Logo"
              className="size-11 rounded-full bg-white object-contain p-0.5 border-2 border-blue-600 shadow-md shadow-blue-600/10"
            />
            <div>
              <span className="block font-display text-lg font-bold tracking-tight text-blue-950 sm:text-xl">
                Owais Interior Designer
              </span>
              <span className="block text-[11px] font-semibold tracking-widest text-blue-600 uppercase">
                Nashik POP &amp; PVC Specialists
              </span>
            </div>
          </Link>

          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#pop" className="hover:text-blue-600 transition-colors">
              POP Ceilings
            </a>
            <a href="#pvc" className="hover:text-blue-600 transition-colors">
              PVC Panels
            </a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">
              Work Gallery
            </a>
            <a href="#areas" className="hover:text-blue-600 transition-colors">
              Nashik Areas
            </a>
            <a href="#quote" className="hover:text-blue-600 transition-colors">
              Free Quote
            </a>
            <a href="#faqs" className="hover:text-blue-600 transition-colors">
              FAQs
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Header Social Icons */}
            {(landingConfig.social?.instagram || landingConfig.social?.youtube || landingConfig.social?.facebook) && (
              <div className="hidden md:flex items-center gap-2 pr-1">
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
                "Hello Owais Interior Designer, I found your website and would like to inquire about POP false ceiling and PVC work in Nashik."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
            >
              <MessageSquare className="size-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:+91${phonePrimary}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-xs"
            >
              <Phone className="size-4" />
              <span>Call</span>
            </a>
            <Link
              to="/auth"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all"
              title="Employee & Admin CRM Portal"
            >
              <span>Portal</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean Blue & White Glow */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
        {/* Soft blue ambient glow accents */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 -z-10 size-[400px] rounded-full bg-sky-300/20 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-xs">
                <Sparkles className="size-3.5 text-blue-600" />
                <span>#1 POP False Ceiling &amp; PVC Interior Contractor in Nashik</span>
              </div>

              <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
                Premium <span className="text-blue-600">POP False Ceiling</span> &amp;{" "}
                <span className="text-blue-900">PVC Paneling</span> in Nashik
              </h1>

              <p className="text-base text-slate-600 sm:text-lg leading-relaxed max-w-2xl">
                Transform your home, shop, or office with master craftsmen from{" "}
                <strong className="text-blue-950 font-bold">Owais Interior Designer</strong>.
                Specialists in designer POP false ceilings, 100% waterproof PVC wall panels,
                gypsum board ceilings, cove LED lighting, and turnkey interiors across Nashik.
              </p>

              {/* Trust Badges - Crisp White Cards with Blue Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600">10+ Years</div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">Nashik Experience</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600">500+</div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">Projects Done</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600">100%</div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">Waterproof PVC</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-xs">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600">4.9 ★</div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">Customer Rating</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all"
                >
                  <span>Get Free Site Estimate</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={`tel:+91${phonePrimary}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  <Phone className="size-4 text-blue-600" />
                  <span>Call +91 {phonePrimary}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-1">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Zero middleman commission • Direct master craftsmen rates • Free site visit in Nashik</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl shadow-blue-900/10">
                <img
                  src="/images/pop-ceiling-nashik.jpg"
                  alt="Modern POP False Ceiling with LED cove lighting in Nashik living room"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-white/95 border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Featured Nashik Project
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Modern Living Room POP Ceiling with Cove Lighting
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="size-3 text-blue-600" />
                        Gangapur Road, Nashik
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Soft Blue Tinted Background */}
      <section id="services" className="border-t border-slate-200/80 bg-slate-50/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Complete False Ceiling &amp; Wall Solutions
            </h2>
            <h3 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Specialized Interior Services in Nashik
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              From contemporary POP ceiling patterns with ambient LED channels to durable waterproof
              PVC wall paneling, we handle projects of every scale.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-600/10"
              >
                <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-5 overflow-hidden rounded-xl border border-slate-100">
                    <img
                      src={svc.image}
                      alt={`${svc.title} by Owais Interior Designer Nashik`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-3">
                    <span className="inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200/60">
                      {svc.badge}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {svc.title}
                    </h4>
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
                      <span className="text-xs font-bold text-blue-700">{svc.priceHint}</span>
                      <a
                        href="#quote"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                      >
                        <span>Book Site Visit</span>
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
      <section id="gallery" className="py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Design Portfolio
              </p>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Recent Projects Across Nashik
              </h2>
            </div>
            <a
              href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                "Hello Owais Interior Designer, please share your latest false ceiling and PVC design photo catalogue."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              <span>Request Full Photo Catalogue on WhatsApp</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden aspect-[4/3] relative bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} in ${item.location}`}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
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
                        <span>Watch Clip</span>
                      </a>
                    )}
                  </div>
                  <div className="p-4 space-y-1.5">
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

                <div className="p-4 pt-0">
                  <a
                    href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                      `Hello Owais Interior Designer! I loved your project "${item.title}" in ${item.location}. Can you provide an estimate for a similar design?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-blue-200 bg-blue-50/70 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <MessageSquare className="size-3.5" />
                    <span>Get Similar Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Quotation Form & WhatsApp Estimator - Crisp Clean Gradient */}
      <section id="quote" className="py-20 border-t border-slate-200/80 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                Fast &amp; Accurate Estimation
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get an Instant Free Quote For Your Space in Nashik
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Fill out the quick inquiry below or reach out directly via WhatsApp. We'll provide
                estimated pricing, design options, and schedule a 100% free site measurement across
                Nashik.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Free Site Measurement</h3>
                    <p className="text-xs text-slate-600">
                      We visit your home or site anywhere in Nashik at your convenience with material samples.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">QR-Verified Digital Quotations</h3>
                    <p className="text-xs text-slate-600">
                      Receive an itemized room-by-room PDF quotation with digital QR verification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-700 shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct Contractor Contact</h3>
                    <p className="text-xs text-slate-600">
                      Call directly at <strong className="text-blue-900 font-semibold">+91 {phonePrimary}</strong> or{" "}
                      <strong className="text-blue-900 font-semibold">+91 {phoneSecondary}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card - White Card with Blue Accents */}
            <div className="lg:col-span-6">
              <Card className="border-slate-200 bg-white shadow-xl shadow-blue-900/5">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold text-blue-950">Quick Inquiry &amp; WhatsApp Quote</h3>
                      <p className="text-xs text-slate-500">
                        Send requirements directly to our master craftsmen on WhatsApp.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="service-select" className="text-xs font-semibold text-slate-700">
                          Select Service
                        </Label>
                        <select
                          id="service-select"
                          value={quoteService}
                          onChange={(e) => setQuoteService(e.target.value)}
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                        >
                          <option value="POP False Ceiling">POP False Ceiling</option>
                          <option value="PVC Wall Paneling & Ceiling">PVC Wall Panels / Louvers</option>
                          <option value="Gypsum False Ceiling">Gypsum Board Ceiling</option>
                          <option value="Commercial Grid Ceiling">Commercial Grid Ceiling</option>
                          <option value="Full Home Interior Renovation">Full Home Interior</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="property-select" className="text-xs font-semibold text-slate-700">
                          Property Type
                        </Label>
                        <select
                          id="property-select"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
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
                        Your Name
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="cust-phone" className="text-xs font-semibold text-slate-700">
                          Mobile Number
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
                          Nashik Locality
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
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      <Send className="size-4" />
                      <span>Send Instant Inquiry on WhatsApp</span>
                    </Button>

                    <p className="text-center text-[11px] text-slate-500">
                      ⚡ Instant response • No spam • Direct communication with contractor
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Owais Interior Designer */}
      <section className="py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Why Work With Us
            </h2>
            <h3 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
              The Trusted Interior Specialists in Nashik
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Award className="size-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Direct Master Craftsmen</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work directly with the artisans who execute your ceiling and paneling. No third-party
                markups, ensuring unbeatable rates and superior workmanship.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="size-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Digital QR Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every quotation, invoice, and payment receipt is backed by our secure QR code
                verification system to ensure complete transparency.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Clock className="size-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">On-Time Handover</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respect your time. Committed deadlines with dedicated team mobilization ensure
                your false ceiling or PVC installation finishes on schedule.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-3 shadow-xs">
              <div className="size-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                <Layers className="size-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Certified Materials</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only use verified high-tensile Plaster of Paris, genuine Saint-Gobain Gyproc
                boards, and heavy-gauge waterproof PVC louvers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Nashik Service Areas (SEO Anchor Cloud) */}
      <section id="areas" className="py-16 border-t border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Local Nashik Coverage
            </h2>
            <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Serving All Localities Across Nashik &amp; Surrounding Areas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Our teams provide on-site measurement, design consultations, and installation in every
              major neighborhood of Nashik.
            </p>
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
      <section id="faqs" className="py-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Frequently Asked Questions
            </h2>
            <h3 className="font-display text-3xl font-extrabold text-slate-900">
              POP &amp; PVC Interior FAQs in Nashik
            </h3>
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
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
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
      <section className="border-t border-blue-900 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Beautify Your Home in Nashik?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Contact Owais Interior Designer today for a free site inspection, 3D design catalog, and
            transparent quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(
                "Hello Owais Interior Designer, I would like to schedule a site visit for POP / PVC work in Nashik."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-all"
            >
              <MessageSquare className="size-4" />
              <span>Chat on WhatsApp (+91 {phonePrimary})</span>
            </a>
            <a
              href={`tel:+91${phonePrimary}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-md hover:bg-blue-50 transition-all"
            >
              <Phone className="size-4 text-blue-600" />
              <span>Call +91 {phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Deep Navy */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4 pb-8 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <img
                  src={DEFAULT_LOGO_URL}
                  alt="Owais Interior Designer"
                  className="size-8 rounded-full bg-white p-0.5 object-contain"
                />
                <span className="font-display text-base font-bold text-white">
                  Owais Interior Designer
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
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
              <ul className="space-y-1.5 text-slate-400">
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
              <p className="text-slate-400">
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
                <p className="text-[11px] text-slate-500 text-center">
                  Secure staff login for quotations, billing, and receipts.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
            <p>© {new Date().getFullYear()} Owais Interior Designer. All rights reserved. Nashik, Maharashtra.</p>
            <p className="text-slate-400">
              Keywords: <span className="text-slate-500">owaisinterior • nashikpop • pvc nashik • false ceiling contractor</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
