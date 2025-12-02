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
    profileImg: "/sale-1.png",
  },
  {
    id: 2,
    quote:
      "A rare chance to secure your place in a high-demand precinct, offering unmatched accessibility and future growth potential.",
    name: "Tim CONNOR",
    title: "CVA Director – Southern Region",
    profileImg: "/sale-2.png",
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

export const warehouseData = [
  {
    id: 1,
    wh: 387.2,
    office: 102.3,
    imagePath: "/warehouses/wh1.png",
    description:
      "A spacious industrial warehouse with a generous office space, ideal for medium-scale operations and expanding logistics teams.",
  },
  {
    id: 2,
    wh: 179.0,
    office: 75.8,
    imagePath: "/warehouses/wh12.png",
    description:
      "A compact, efficient warehouse designed for startups, local distributors, and businesses needing secure, modern storage.",
  },
  {
    id: 3,
    wh: 227.7,
    office: 75.8,
    imagePath: "/warehouses/wh5-4-6.png",
    description:
      "Balanced warehouse and office proportions make this unit perfect for growing businesses seeking practicality and style.",
  },
  {
    id: 4,
    wh: 227.7,
    office: 75.8,
    imagePath: "/warehouses/wh1-2-3.png",
    description:
      "A versatile warehouse designed for flexible workflows, offering excellent clearance and a refined upper-level office.",
  },
  {
    id: 5,
    wh: 179.0,
    office: 75.8,
    imagePath: "/warehouses/wh6-7.png",
    description:
      "An efficient warehouse unit ideal for smaller teams, e-commerce operations, or local distribution hubs.",
  },
  {
    id: 6,
    wh: 254.9,
    office: 95.7,
    imagePath: "/warehouses/wh-10-11-12.png",
    description:
      "A premium mid-sized warehouse offering a strong mix of storage capacity and a bright, modern office space.",
  },
  {
    id: 7,
    wh: 254.9,
    office: 95.7,
    imagePath: "/warehouses/wh-7-8-9.png",
    description:
      "Designed for operational efficiency, this warehouse features excellent floor space paired with a functional upper office.",
  },
  {
    id: 8,
    wh: 179.0,
    office: 75.8,
    imagePath: "/8.png",
    description:
      "A modern compact warehouse well-suited for boutique businesses, light manufacturing, or specialised storage needs.",
  },
  {
    id: 9,
    wh: 227.7,
    office: 75.8,
    imagePath: "/9.png",
    description:
      "A balanced warehouse-and-office configuration built for businesses seeking usable floor area and contemporary design.",
  },
  {
    id: 10,
    wh: 227.7,
    office: 75.8,
    imagePath: "/10.png",
    description:
      "Featuring strong accessibility and clean architectural lines, this unit is ideal for streamlined operations and client-facing teams.",
  },
  {
    id: 11,
    wh: 179.0,
    office: 75.8,
    imagePath: "/7.png",
    description:
      "A flexible, compact warehouse with a well-proportioned office space, perfect for small-scale logistics or specialist suppliers.",
  },
  {
    id: 12,
    wh: 387.2,
    office: 102.3,
    imagePath: "/8.png",
    description:
      "A flagship large-format warehouse offering maximum storage capacity, impressive frontage, and a highly functional office.",
  },
];
