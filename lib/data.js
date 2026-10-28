// ============================================================================
// SINGLE SOURCE OF TRUTH: Bradley's Mowing & Landscaping LLC
// ============================================================================

export const business = {
  name: "Bradley's Mowing & Landscaping LLC",
  shortName: "Bradley's Mowing & Landscaping",
  owner: "Anthony Bradley",
  role: "Owner & Operator",
  type: "Locally owned and owner-operated lawn care, landscaping, property maintenance, and outdoor property improvement company",
  slogan: "Reliable Lawn Care • No Job Too Tough",
  tagline: "Residential & Commercial Lawn Care, Landscaping, Property Maintenance & Outdoor Improvements",
  
  // Contact Information
  phone: "(140) 599-6858",
  phoneRaw: "1405996858",
  phoneTel: "tel:1405996858",
  phoneVerificationNote: "Phone number provided on onboarding sheet. Click-to-call enabled.",
  email: "anthonyklingenburg@gmail.com",
  emailMailto: "mailto:anthonyklingenburg@gmail.com",
  
  // Location
  city: "El Reno",
  state: "Oklahoma",
  stateAbbr: "OK",
  fullLocation: "El Reno, Oklahoma",
  serviceRadius: "El Reno and surrounding Canadian County & OKC West Metro communities",
  
  // Social & Web Links
  facebook: "https://www.facebook.com/BradleysMowingllc",
  googleMaps: "https://maps.app.goo.gl/39sQfZKJFzhT19te9?g_st=ic",
  domain: "https://bradleysmowingllc.com",
  
  // Brand Vision & History
  history: "Bradley's Mowing & Landscaping was founded in El Reno, Oklahoma by Anthony Bradley with the goal of providing dependable, hard-working outdoor maintenance. What started with residential lawn mowing and yard upkeep has expanded into comprehensive property improvements, brush clearing, drainage solutions, grading, and commercial maintenance contracts.",
  familyVision: "More Than a Business. A Future for Our Family. We believe in showing up on time, keeping our word, fair upfront pricing, and treating every lawn with personal craftsmanship.",
  
  // Core Trust Points
  trustBadges: [
    { label: "Locally Owned & Operated", icon: "MapPin", desc: "El Reno, OK hometown service" },
    { label: "Owner on Every Job", icon: "Award", desc: "Direct communication with Anthony Bradley" },
    { label: "Residential & Commercial", icon: "Building2", desc: "Equipped for homes, acreages & commercial lots" },
    { label: "Honest Free Estimates", icon: "ClipboardCheck", desc: "Clear scope and transparent pricing" },
    { label: "Satisfaction Guaranteed", icon: "ThumbsUp", desc: "Quality workmanship on every project" }
  ]
};

export const serviceCategories = [
  {
    name: "Lawn Care & Maintenance",
    slug: "lawn-care-maintenance",
    description: "Consistent, high-quality mowing and turf maintenance for residential lawns, acreages, and commercial grounds.",
    services: [
      {
        title: "Lawn Mowing & Maintenance",
        slug: "lawn-mowing",
        shortDesc: "Scheduled weekly or biweekly mowing with crisp string trimming, hard surface edging, and debris blow-off.",
        heroImage: "/images/mowing-backyard.jpg",
        features: [
          "Weekly & biweekly recurring schedules",
          "Precision cutting at optimal grass height",
          "String trimming around all fences, trees, and obstacles",
          "Crisp mechanical edging along sidewalks and driveways",
          "Full blow-off of driveways, walkways, and patios"
        ],
        overview: "Whether you own a residential home in El Reno or manage a commercial property in Canadian County, consistent lawn maintenance keeps your turf healthy and your curb appeal sharp. Anthony Bradley personally ensures your grass is cut cleanly at the proper height to resist Oklahoma summer heat.",
        useCases: ["Residential homes", "Acreages & rural properties", "HOA common areas", "Commercial offices & facilities"]
      },
      {
        title: "Commercial Lawn Care",
        slug: "commercial-lawn-care",
        shortDesc: "Dependable grounds maintenance contracts for commercial facilities, storage complexes, rental portfolios, and offices.",
        heroImage: "/images/commercial-mowing.jpg",
        features: [
          "Scheduled commercial mowing & turf maintenance",
          "Landscape bed weed control & edging",
          "Trash & light debris cleanup from grounds",
          "Seasonal leaf and storm cleanup",
          "Custom monthly or per-service billing options"
        ],
        overview: "A well-maintained exterior reflects directly on your business. Bradley's Mowing & Landscaping provides reliable commercial lawn care and grounds upkeep across El Reno, Yukon, and surrounding business corridors. We work directly with property managers, landlords, and commercial owners.",
        useCases: ["Office complexes & business parks", "Self-storage facilities", "Apartment & rental property complexes", "Churches & retail storefronts"]
      },
      {
        title: "Seasonal Yard Cleanups",
        slug: "seasonal-yard-cleanups",
        shortDesc: "Thorough spring rejuvenation and fall property preparation to keep your yard clear, healthy, and pristine year-round.",
        heroImage: "/images/tree-trimming.jpg",
        features: [
          "Fall leaf removal and curbside hauling",
          "Spring dead foliage trimming & turf raking",
          "Flower bed clear-out and re-edging",
          "Branch, stick, and organic debris disposal",
          "Pre-season property preparation"
        ],
        overview: "Oklahoma seasonal changes can leave properties covered in fallen leaves, dead growth, and wind-blown debris. Our seasonal cleanup service restores order to your lawn and prepares soil and beds for new seasonal growth.",
        useCases: ["Spring yard revival", "Fall leaf collection", "Post-storm landscape clearing", "Pre-sale real estate staging"]
      }
    ]
  },
  {
    name: "Landscaping & Groundwork",
    slug: "landscaping-groundwork",
    description: "Transforming outdoor spaces with vibrant flower beds, rich mulch, decorative river rock, and sod installation.",
    services: [
      {
        title: "Landscaping & Bed Renovation",
        slug: "landscaping",
        shortDesc: "Design and installation of manicured landscape beds, premium mulch, decorative stone, and healthy plantings.",
        heroImage: "/images/flower-bed-mulch.jpg",
        features: [
          "Custom landscape bed reshaping and stone borders",
          "Shrub and perennial placement for Oklahoma climate",
          "Weed barrier fabric and soil conditioning",
          "Premium dark mulch and river rock topping",
          "Complete property curb appeal transformation"
        ],
        overview: "Enhance your home's curb appeal with thoughtfully designed landscaping that thrives in Oklahoma conditions. We renovate tired, weed-choked beds into clean, elegant focal points with clean border edging and premium mulch or decorative stone.",
        useCases: ["Front entry curb appeal upgrades", "Backyard living area landscaping", "Rental property exterior updates", "New home landscape additions"]
      },
      {
        title: "Sod Installation & Soil Prep",
        slug: "sod-installation",
        shortDesc: "Instant lawn establishment with professional soil grading, tilling, and freshly cut Oklahoma-adapted sod.",
        heroImage: "/images/striped-lawn.jpg",
        features: [
          "Old grass and weed removal",
          "Ground leveling and soil tilling",
          "Topsoil spreading and soil enrichment",
          "Tightly rolled fresh Bermuda or Fescue sod",
          "Watering and initial care instructions"
        ],
        overview: "Tired of bare dirt, thin patches, and weeds? Professional sod installation gives you an instant green lawn. We properly grade and prep the ground so your new sod establishes deep root systems and thrives through drought and heat.",
        useCases: ["New home construction yards", "Patching bare areas after grading or construction", "Full lawn replacement", "Erosion control on slopes"]
      },
      {
        title: "Decorative Rock & Mulch Installation",
        slug: "decorative-rock-installation",
        shortDesc: "Low-maintenance decorative gravel, river rock, and premium mulch installations for long-lasting weed suppression.",
        heroImage: "/images/flower-bed-mulch.jpg",
        features: [
          "Heavy-duty commercial weed barrier installation",
          "River rock, crushed granite, and decorative stone",
          "Premium hardwood dark mulch and shredded bark",
          "Clean metal, poly, or stone perimeter edging",
          "Low-maintenance water conservation solution"
        ],
        overview: "Decorative rock and mulch not only elevate the visual appeal of your property but also retain soil moisture, protect plant roots, and significantly reduce weed growth in harsh Oklahoma weather.",
        useCases: ["Flower bed re-mulching", "Rock gardens and dry creek beds", "Foundation border drip edges", "Low-maintenance rental properties"]
      }
    ]
  },
  {
    name: "Grading, Drainage & Property Improvements",
    slug: "grading-drainage",
    description: "Practical earthwork, yard leveling, water redirection, French drains, and outdoor site improvements.",
    services: [
      {
        title: "Yard Leveling & Minor Grading",
        slug: "yard-leveling",
        shortDesc: "Smoothing uneven ground, filling low depressions, and light grading to eliminate trip hazards and standing water.",
        heroImage: "/images/residential-brick-home.jpg",
        features: [
          "Low spot filling and depression smoothing",
          "Light grading for proper slope away from foundation",
          "Soil delivery, spreading, and mechanical compaction",
          "Preparation for new turf, sod, or landscape beds",
          "Elimination of mowing scalping and ankle-turners"
        ],
        overview: "Uneven yards cause puddling, scalped turf while mowing, and hazardous walking areas. Bradley's provides light dirt work and yard leveling to smooth out your property and ensure proper positive drainage.",
        useCases: ["Yards with settling around foundations", "Rough ground after utility trenches or tree removal", "Preparing uneven lots for sod", "Pasture & perimeter smoothing"]
      },
      {
        title: "Drainage Solutions & French Drains",
        slug: "drainage-solutions",
        shortDesc: "Redirecting standing water away from foundations, patios, and yards with custom French drains and swales.",
        heroImage: "/images/mowing-backyard.jpg",
        features: [
          "On-site elevation and water-flow evaluation",
          "Perforated pipe, gravel bed, and filter fabric French drains",
          "Downspout extensions and catch basin installation",
          "Surface swales for natural runoff diversion",
          "Protection against soil erosion and foundation seepage"
        ],
        overview: "Heavy Oklahoma thunderstorms can quickly saturate yards and cause water to pool near foundations or across walkways. We evaluate your property's topography and install practical drainage solutions like French drains to protect your home.",
        useCases: ["Standing water against home foundations", "Soggy backyard low spots", "Downspout water pooling on walkways", "Erosion correction on slopes"]
      }
    ]
  },
  {
    name: "Property Clearing & Cleanup",
    slug: "clearing-cleanup",
    description: "Clearing neglected parcels, thick brush, overgrown fence lines, fallen limbs, and storm debris.",
    services: [
      {
        title: "Brush Clearing & Fence-Line Clearing",
        slug: "brush-clearing",
        shortDesc: "Reclaiming overgrown fence lines, thickets, volunteer trees, tall weeds, and neglected lots.",
        heroImage: "/images/cleanup-before.jpg",
        features: [
          "Heavy vegetation and cedar/brush clearing",
          "Fence-line overgrowth and vine removal",
          "Small volunteer tree and sapling cutting",
          "Debris piling, chipping, or hauling off-site",
          "Reclaiming usable acreage and property lines"
        ],
        overview: "Neglected fence lines and thick brush harbor pests, damage fences, and take away valuable yard space. We have the equipment and work ethic to tackle tough clearing jobs that regular mowers cannot handle.",
        useCases: ["Overgrown perimeter fence lines", "Overgrown acreage & vacant lots", "Rental property cleanouts", "Fire break and perimeter visibility"]
      },
      {
        title: "Storm Debris & Limb Removal",
        slug: "storm-debris-cleanup",
        shortDesc: "Rapid response cleanup for downed branches, storm debris, and manageable tree trimming after severe weather.",
        heroImage: "/images/tree-trimming.jpg",
        features: [
          "Downed tree limb cutting and removal",
          "Small tree trimming and pruning",
          "Yard debris rake-up and haul-away",
          "Post-wind and ice storm property clearance",
          "Safe disposal leaving your property spotless"
        ],
        overview: "Oklahoma high winds and severe weather routinely bring down heavy branches and create hazardous yard debris. Anthony Bradley provides prompt, dependable cleanup so your family can safely enjoy your outdoor space again.",
        useCases: ["Post-storm branch cleanup", "Low-hanging limb pruning", "Yard waste hauling", "Seasonal property spruce-ups"]
      }
    ]
  }
];

export const allServices = serviceCategories.flatMap(cat =>
  cat.services.map(s => ({ ...s, categoryName: cat.name, categorySlug: cat.slug }))
);

export const serviceAreas = [
  {
    name: "El Reno",
    state: "OK",
    zip: "73036",
    slug: "el-reno-ok",
    primary: true,
    title: "Lawn Care & Landscaping in El Reno, OK",
    description: "Bradley's Mowing & Landscaping is proudly based in El Reno, Oklahoma. Anthony Bradley delivers dependable residential mowing, commercial grounds upkeep, grading, and property clearing throughout El Reno.",
    highlights: ["Locally based in El Reno", "Rapid scheduling for El Reno homeowners", "Downtown, Lake El Reno, and country acreage service"],
    nearbyAreas: ["Calumet", "Yukon", "Okarche", "Union City"]
  },
  {
    name: "Yukon",
    state: "OK",
    zip: "73099",
    slug: "yukon-ok",
    primary: false,
    title: "Lawn Maintenance & Landscaping in Yukon, OK",
    description: "Providing premier residential lawn mowing, flower bed landscaping, yard leveling, and cleanups for homeowners and businesses across Yukon, Oklahoma.",
    highlights: ["Weekly and biweekly mowing routes", "Subdivision lawn care & bed maintenance", "Serving Garth Brooks Blvd corridor and neighborhoods"],
    nearbyAreas: ["El Reno", "Mustang", "Piedmont"]
  },
  {
    name: "Mustang",
    state: "OK",
    zip: "73064",
    slug: "mustang-ok",
    primary: false,
    title: "Lawn Care & Outdoor Property Services in Mustang, OK",
    description: "High-quality lawn mowing, shrub trimming, mulch installation, and yard drainage solutions for Mustang properties.",
    highlights: ["Reliable recurring mowing schedules", "Residential curb appeal enhancements", "Property cleanup and brush clearing"],
    nearbyAreas: ["Yukon", "Union City", "El Reno"]
  },
  {
    name: "Calumet",
    state: "OK",
    zip: "73014",
    slug: "calumet-ok",
    primary: false,
    title: "Lawn Care & Acreage Mowing in Calumet, OK",
    description: "Serving Calumet with residential lawn maintenance, pasture edge clearing, fence line clearing, and heavy-duty property cleanups.",
    highlights: ["Acreage & large rural lot mowing", "Brush and fence-line clearing", "Dependable local service"],
    nearbyAreas: ["El Reno", "Geary", "Okarche"]
  },
  {
    name: "Piedmont",
    state: "OK",
    zip: "73078",
    slug: "piedmont-ok",
    primary: false,
    title: "Lawn Care & Landscaping in Piedmont, OK",
    description: "Complete lawn maintenance, sod installation, yard leveling, and flower bed care for properties in Piedmont, Oklahoma.",
    highlights: ["Piedmont residential neighborhoods & acreages", "Grading and drainage solutions", "High attention to detail"],
    nearbyAreas: ["Yukon", "Okarche", "El Reno"]
  },
  {
    name: "Okarche",
    state: "OK",
    zip: "73762",
    slug: "okarche-ok",
    primary: false,
    title: "Lawn Maintenance & Property Cleanup in Okarche, OK",
    description: "Professional lawn mowing, commercial property grounds care, and storm debris removal for homes and facilities in Okarche.",
    highlights: ["Commercial & residential grounds upkeep", "Reliable scheduling", "Owner-operated craftsmanship"],
    nearbyAreas: ["El Reno", "Piedmont", "Calumet"]
  },
  {
    name: "Union City",
    state: "OK",
    zip: "73090",
    slug: "union-city-ok",
    primary: false,
    title: "Lawn Care & Property Maintenance in Union City, OK",
    description: "Dependable mowing, yard clearing, fence-line clearing, and dirt work for Union City properties.",
    highlights: ["Rural and residential property maintenance", "Fence-line and brush clearing", "Free honest estimates"],
    nearbyAreas: ["El Reno", "Mustang", "Yukon"]
  },
  {
    name: "Geary",
    state: "OK",
    zip: "73040",
    slug: "geary-ok",
    primary: false,
    title: "Lawn Mowing & Property Cleanup in Geary, OK",
    description: "Lawn mowing, seasonal cleanups, limb removal, and outdoor property improvement services for Geary clients.",
    highlights: ["Quality yard cleanups and mowing", "Prompt owner communication", "Competitive local pricing"],
    nearbyAreas: ["Calumet", "El Reno"]
  }
];

export const customerProcess = [
  {
    step: "01",
    title: "Initial Contact",
    description: "Reach out via our online quote form, call Anthony directly, or message us on Facebook. Tell us what your property needs."
  },
  {
    step: "02",
    title: "Project Details",
    description: "We discuss your exact goals, timeline, and property location to determine the best approach."
  },
  {
    step: "03",
    title: "Property Evaluation",
    description: "We review your property photos or schedule a quick on-site visit to inspect the site and measure dimensions."
  },
  {
    step: "04",
    title: "Honest Free Estimate",
    description: "You receive a clear, upfront estimate detailing labor, materials, and scope with zero surprise fees."
  },
  {
    step: "05",
    title: "Scheduling Approval",
    description: "Once you give the green light, we set a confirmed date on our schedule and keep in close communication."
  },
  {
    step: "06",
    title: "Quality Completion",
    description: "Anthony Bradley and crew perform the work with precision, leaving your grounds immaculate and clean."
  },
  {
    step: "07",
    title: "Follow-Up & Care",
    description: "We review the finished project with you, ensure 100% satisfaction, and discuss any recurring maintenance needs."
  }
];

export const workGallery = [
  {
    id: 1,
    src: "/images/flower-bed-mulch.jpg",
    alt: "Manicured flower bed with dark mulch, spherical shrubs, and concrete walkway in El Reno",
    title: "Flower Bed Renovation & Mulch",
    category: "Landscaping",
    location: "El Reno, OK"
  },
  {
    id: 2,
    src: "/images/mowing-backyard.jpg",
    alt: "Freshly cut residential backyard lawn with commercial red mower and pristine fence line",
    title: "Residential Backyard Mowing",
    category: "Lawn Care",
    location: "El Reno, OK"
  },
  {
    id: 3,
    src: "/images/commercial-mowing.jpg",
    alt: "Commercial zero-turn mower cutting expansive acreage lawn under blue Oklahoma sky",
    title: "Commercial Acreage Grounds Care",
    category: "Commercial",
    location: "Yukon, OK"
  },
  {
    id: 4,
    src: "/images/striped-lawn.jpg",
    alt: "Precision lawn mowing with sharp turf stripes on open commercial acreage",
    title: "Precision Turf Striping",
    category: "Lawn Care",
    location: "El Reno, OK"
  },
  {
    id: 5,
    src: "/images/tree-trimming.jpg",
    alt: "Tree limb trimming and landscape bed maintenance in spacious Oklahoma yard",
    title: "Tree Trimming & Bed Cleanup",
    category: "Cleanup",
    location: "Calumet, OK"
  },
  {
    id: 6,
    src: "/images/cleanup-before.jpg",
    alt: "Overgrown residential corner property before brush clearing and turf restoration",
    title: "Overgrown Property Clearing (Before)",
    category: "Clearing",
    location: "El Reno, OK"
  },
  {
    id: 7,
    src: "/images/residential-brick-home.jpg",
    alt: "Brick home landscape maintenance and grading in Canadian County neighborhood",
    title: "Residential Property Upkeep",
    category: "Maintenance",
    location: "Mustang, OK"
  },
  {
    id: 8,
    src: "/images/residential-maintenance.jpg",
    alt: "Clean front yard lawn maintenance and driveway edge detailing",
    title: "Clean Edging & Lawn Care",
    category: "Lawn Care",
    location: "El Reno, OK"
  },
  {
    id: 9,
    src: "/images/tree-trimming-wide.jpg",
    alt: "Spacious residential yard after tree limb clearance and lawn conditioning",
    title: "Yard Cleanup & Limb Removal",
    category: "Cleanup",
    location: "Piedmont, OK"
  }
];

export const clientReviews = [
  {
    id: 1,
    name: "Mark Henderson",
    location: "El Reno, OK",
    rating: 5,
    date: "Verified Customer",
    text: "Anthony does outstanding work. He was out to our El Reno property right on time, gave an honest estimate, and mowed and trimmed everything to perfection. It is rare to find someone who takes this much pride in their work.",
    verified: true,
    service: "Lawn Mowing & Edging"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Yukon, OK",
    rating: 5,
    date: "Verified Customer",
    text: "We had an overgrown fence line and a flower bed that was completely taken over by weeds. Bradley's cleared everything out, laid down fresh black mulch, and edged it beautifully. Total night-and-day difference!",
    verified: true,
    service: "Fence-Line Clearing & Mulch"
  },
  {
    id: 3,
    name: "David Miller",
    location: "El Reno, OK",
    rating: 5,
    date: "Verified Customer",
    text: "Reliable, friendly, and honest pricing. Anthony handled our low-spot yard leveling and drainage problem after heavy rains. The water flows away from the house now and the lawn looks fantastic.",
    verified: true,
    service: "Yard Leveling & Drainage"
  },
  {
    id: 4,
    name: "Robert Collins",
    location: "Mustang, OK",
    rating: 5,
    date: "Verified Customer",
    text: "Top-notch commercial grounds mowing. He shows up weekly like clockwork, blows off all the walkways, and keeps our commercial facility looking sharp. Highly recommend Bradley's Mowing!",
    verified: true,
    service: "Commercial Lawn Maintenance"
  }
];

export const faqs = [
  {
    q: "What services does Bradley's Mowing & Landscaping provide?",
    a: "We provide complete outdoor property solutions including residential and commercial lawn mowing, string trimming, edging, landscaping, mulch and decorative rock installation, sod installation, property cleanups, brush clearing, fence-line clearing, yard leveling, minor grading, and drainage improvements."
  },
  {
    q: "What communities do you serve?",
    a: "We are based in El Reno, Oklahoma, and regularly serve Yukon, Mustang, Calumet, Piedmont, Okarche, Union City, Geary, and surrounding Canadian County / West OKC communities."
  },
  {
    q: "Do you offer recurring mowing contracts?",
    a: "Yes! We offer both weekly and biweekly scheduled mowing services for residential homes, acreages, and commercial properties throughout the growing season."
  },
  {
    q: "Can you handle tough, overgrown yards or neglected acreage?",
    a: "Absolutely. 'No Job Too Tough' is our motto. We have the equipment to handle thick brush, overgrown fence lines, fallen storm limbs, tall weed clearing, and large-scale property cleanouts."
  },
  {
    q: "Can you help with uneven yards or standing water issues?",
    a: "Yes. We offer yard leveling, minor regrading, and drainage improvements including French drains to redirect rainwater away from your foundation and low spots in your yard."
  },
  {
    q: "How do I get a free estimate?",
    a: "Simply fill out our online 'Request A Free Quote' form, call Anthony directly at (140) 599-6858, or reach out on our Facebook page. We'll discuss your project, review photos or visit your property, and provide a clear, upfront estimate."
  }
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    sublinks: [
      { name: "All Services Overview", href: "/services" },
      { name: "Lawn Mowing & Maintenance", href: "/services/lawn-mowing" },
      { name: "Landscaping & Bed Renovation", href: "/services/landscaping" },
      { name: "Yard Leveling & Grading", href: "/services/yard-leveling" },
      { name: "Drainage Solutions", href: "/services/drainage-solutions" },
      { name: "Brush & Fence-Line Clearing", href: "/services/brush-clearing" },
      { name: "Commercial Lawn Care", href: "/services/commercial-lawn-care" },
      { name: "Sod Installation", href: "/services/sod-installation" },
      { name: "Decorative Rock & Mulch", href: "/services/decorative-rock-installation" },
      { name: "Seasonal Cleanups", href: "/services/seasonal-yard-cleanups" }
    ]
  },
  {
    name: "Service Areas",
    href: "/service-areas",
    sublinks: [
      { name: "All Service Areas", href: "/service-areas" },
      { name: "El Reno, OK (Hometown)", href: "/service-areas/el-reno-ok" },
      { name: "Yukon, OK", href: "/service-areas/yukon-ok" },
      { name: "Mustang, OK", href: "/service-areas/mustang-ok" },
      { name: "Calumet, OK", href: "/service-areas/calumet-ok" },
      { name: "Piedmont, OK", href: "/service-areas/piedmont-ok" },
      { name: "Okarche, OK", href: "/service-areas/okarche-ok" },
      { name: "Union City, OK", href: "/service-areas/union-city-ok" },
      { name: "Geary, OK", href: "/service-areas/geary-ok" }
    ]
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];
