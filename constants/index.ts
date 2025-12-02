import React from "react";

// ABCParkInfo Data
export const parkInfoFeatures = [
  {
    title: "Prime Cardinia Road Position",
    description: "Only minutes to the Monash Freeway.",
  },
  {
    title: "Versatile Usage",
    description: "Ideal for business operations or storage.",
  },
  {
    title: "Dedicated Car Parking",
    description: "Each warehouse includes minimum 3 car parks.",
  },
  {
    title: "High-Growth Precinct",
    description:
      "Demand for industrial space in the South East is skyrocketing.",
  },
  {
    title: "Premium Architectural Design",
    description:
      "Modern façades, high internal clearance, high-quality finishes.",
  },
  {
    title: "Exclusive Development",
    description: "The only strata warehouses approved in this booming area.",
  },
];

// FeaturesSection Data
export const featuresSectionData = [
  {
    title: "143m²–235m² Units",
    desc: "Versatile warehouse sizes to suit various business needs.",
  },
  {
    title: "Move-In Ready 2025",
    desc: "Construction nearing completion with handover scheduled soon.",
  },
  { title: "No Stamp Duty", desc: "Save over $30,000 per warehouse." },
  {
    title: "Prime Officer South Location",
    desc: "1.5km to the Monash Freeway and key transport routes.",
  },
  {
    title: "Architecturally Designed",
    desc: "Premium modern façade and functional layout.",
  },
  {
    title: "3+ Car Parks per Unit",
    desc: "Dedicated parking included with every space.",
  },
  {
    title: "Mixed-Use Approved",
    desc: "Ideal for storage, trades, small business, or light operations.",
  },
  {
    title: "Exclusive Development",
    desc: "The only strata warehouses permitted in this precinct.",
  },
];

// TestimonialSlide Data
export const testimonialsData = [
  {
    id: 1,
    quote:
      "With a scarcity of industrial options in the area, this exclusive development places your business at the centre of Officer South's booming future.",
    name: "JOSHUA COLOSIMO",
    title: "Associate | Aston Commercial",
    profileImg: "/feature-image.png",
  },
  {
    id: 2,
    quote:
      "A rare chance to secure your place in a high-demand precinct, offering unmatched accessibility and future growth potential.",
    name: "SARAH CONNOR",
    title: "Industrial Property Specialist",
    profileImg: "/feature-image.png",
  },
];

// GSAPImageCarousel Data
export const carouselImages = [
  { id: 1, src: "/warehouse-1.png", alt: "Modern cityscape one" },
  { id: 2, src: "/warehouse-2.png", alt: "Modern cityscape two" },
  { id: 3, src: "/warehouse-3-new.png", alt: "Modern cityscape three" },
  { id: 4, src: "/warehouse-4.png", alt: "Modern cityscape four" },
  { id: 5, src: "/warehouse-5.png", alt: "Modern cityscape five" },
  { id: 6, src: "/warehouse-6-new.png", alt: "Modern cityscape six" },
];

// DevelopmentOverview Data
export const developmentOverviewSections = [
  {
    id: 1,
    title: "Masterplanned for — efficiency & flow",
    description:
      "Nexus Business Park is designed with a clear, functional layout—featuring streamlined vehicle access, spacious loading zones, and well-positioned offices to support a wide range of business operations.",
    image: "/7.png", // Using placeholder, user can update
    imageAlt: "Modern glass building facade",
    reverse: false,
  },
  {
    id: 2,
    title: "Thoughtfully landscaped — clarity & balance",
    description:
      "The development incorporates structured landscaping with canopy trees, pathways, and green buffers—enhancing visual appeal while supporting a clean, professional environment for businesses.",
    image: "/8.png", // Using placeholder
    imageAlt: "Landscaped business park environment",
    reverse: true,
  },
  {
    id: 3,
    title: "Architectural excellence — refined façades",
    description:
      "Clean lines, high-quality materials, and professional façade elements define the character of the warehouses—balancing function with a strong architectural presence.",
    image: "/9.png", // Using placeholder
    imageAlt: "Architectural details of warehouse",
    reverse: false,
  },
];

export const footerLinks = [
  {
    title: "PROJECT",
    links: ["Overview", "Warehouses", "Location"],
  },
  {
    title: "RESOURCES",
    links: ["Brochure", "Floor Plans", "Testimonials"],
  },
  {
    title: "COMPANY",
    links: ["Developer", "Contact", "Privacy Policy", "Disclaimer"],
  },
];

export const scrollTargets: Record<string, { id?: string; page?: string }> = {
  Overview: { id: "overview-section", page: "/" },
  Warehouses: { page: "/warehouses" },
  Location: { id: "location-section", page: "/" },

  Brochure: { id: "brochure-section", page: "/" },
  "Floor Plans": { id: "#", page: "/" },

  Testimonials: { id: "testimonials-section", page: "/" },

  Developer: { id: "developer-section", page: "/" },
  Contact: { page: "/contact" },
  "Privacy Policy": { page: "#" },
  Disclaimer: { page: "#" },
};

// LocationHighlights Data
export const locationHighlightsData = [
  { text: "1.5km from the Monash Freeway" },
  { text: "Prime Cardinia Road access" },
  { text: "Surrounded by major growth & development" },
  { text: "Future connectivity via Thompsons Road extension", icon: "◇" },
  { text: "Close to essential local amenities" },
];

export const AboutExpectations = [
  "Architecturally designed, modern warehouse spaces",
  "High-clearance interiors suitable for multiple industries",
  "Excellent truck and vehicle access",
  "Secure, low-maintenance design",
  "Move-in-ready by late 2025",
  "Only 17 units — limited supply, increasing long-term value",
];
