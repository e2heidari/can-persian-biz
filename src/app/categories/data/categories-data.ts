import { Category } from "./types";

export const categories: Category[] = [
  {
    id: "accounting-insurance",
    name: "Accounting & Insurance",
  },
  {
    id: "accountant",
    name: "Accountant",
    parentId: "accounting-insurance",
  },
  {
    id: "financial",
    name: "Financial",
    parentId: "accounting-insurance",
  },
  {
    id: "insurance",
    name: "Insurance",
    parentId: "accounting-insurance",
  },
  {
    id: "artist",
    name: "Artist",
  },
  {
    id: "art",
    name: "Art",
    parentId: "artist",
  },
  {
    id: "dance",
    name: "Dance",
    parentId: "artist",
  },
  {
    id: "fashion",
    name: "Fashion",
    parentId: "artist",
  },
  {
    id: "makeup",
    name: "Makeup",
    parentId: "artist",
  },
  {
    id: "music-dj",
    name: "Music & DJ",
    parentId: "artist",
  },
  {
    id: "photographer-videographer",
    name: "Photographer & Videographer",
    parentId: "artist",
  },
  {
    id: "tattoo",
    name: "Tattoo",
    parentId: "artist",
  },
  {
    id: "beauty-salon",
    name: "Beauty Salon",
  },
  {
    id: "blogger-entertainment",
    name: "Blogger & Entertainment",
  },
  {
    id: "athlete",
    name: "Athlete",
    parentId: "blogger-entertainment",
  },
  {
    id: "camping-cottage",
    name: "Camping & Cottage",
    parentId: "blogger-entertainment",
  },
  {
    id: "comedy",
    name: "Comedy",
    parentId: "blogger-entertainment",
  },
  {
    id: "discover-vancouver",
    name: "Discover Vancouver",
    parentId: "blogger-entertainment",
  },
  {
    id: "explore-canada",
    name: "Explore Canada",
    parentId: "blogger-entertainment",
  },
  {
    id: "food",
    name: "Food",
    parentId: "blogger-entertainment",
  },
  {
    id: "game",
    name: "Game",
    parentId: "blogger-entertainment",
  },
  {
    id: "group-hike",
    name: "Group & Hike",
    parentId: "blogger-entertainment",
  },
  {
    id: "immigration-life",
    name: "Immigration Life",
    parentId: "blogger-entertainment",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    parentId: "blogger-entertainment",
  },
  {
    id: "politic",
    name: "Politic",
    parentId: "blogger-entertainment",
  },
  {
    id: "traveler",
    name: "Traveler",
    parentId: "blogger-entertainment",
  },
  {
    id: "café",
    name: "Café",
  },
  {
    id: "channel-magazine",
    name: "Channel & Magazine",
  },
  {
    id: "association",
    name: "Association",
    parentId: "Channel & Magazine",
  },
  {
    id: "book",
    name: "Book",
    parentId: "Channel & Magazine",
  },
  {
    id: "channel",
    name: "Channel",
    parentId: "Channel & Magazine",
  },
  {
    id: "event-channel",
    name: "Event Channel",
    parentId: "Channel & Magazine",
  },
  {
    id: "magazine",
    name: "Magazine",
    parentId: "Channel & Magazine",
  },
  {
    id: "podcast",
    name: "Podcast",
    parentId: "Channel & Magazine",
  },
  {
    id: "radio",
    name: "Radio",
    parentId: "Channel & Magazine",
  },
  {
    id: "theatre",
    name: "Theatre",
    parentId: "Channel & Magazine",
  },
  {
    id: "tv",
    name: "TV",
    parentId: "Channel & Magazine",
  },
  {
    id: "daycare-education",
    name: "Daycare & Education",
  },
  {
    id: "decoration-event-planner",
    name: "Decoration & Event planner",
  },
  {
    id: "event-planner",
    name: "Event Planner",
    parentId: "decoration-event-planner",
  },
  {
    id: "event-organizer",
    name: "Event Organizer",
    parentId: "decoration-event-planner",
  },
  {
    id: "rental-decoration",
    name: "Rental Decoration",
    parentId: "decoration-event-planner",
  },
  {
    id: "florist",
    name: "Florist",
    parentId: "decoration-event-planner",
  },
  {
    id: "dentist",
    name: "Dentist",
  },
  {
    id: "driving-school",
    name: "Driving School",
  },
  {
    id: "exchange",
    name: "Exchange",
  },
  {
    id: "fast-food",
    name: "Fast Food",
  },
  {
    id: "gym",
    name: "Gym",
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
  },
  {
    id: "homemade-food",
    name: "Homemade Food",
  },
  {
    id: "cake-sweet",
    name: "Cake & Sweet",
    parentId: "homemade-food",
  },
  {
    id: "catering",
    name: "Catering",
    parentId: "homemade-food",
  },
  {
    id: "pickles-sour",
    name: "Pickles & Sour",
    parentId: "homemade-food",
  },
  {
    id: "hookah-lounge",
    name: "Hookah lounge",
  },
  {
    id: "immigration-lawyer",
    name: "Immigration & Lawyer",
  },
  {
    id: "immigration",
    name: "Immigration",
    parentId: "immigration-lawyer",
  },
  {
    id: "lawyer",
    name: "Lawyer",
    parentId: "immigration-lawyer",
  },
  {
    id: "notary-public",
    name: "Notary Public",
    parentId: "immigration-lawyer",
  },
  {
    id: "job-business",
    name: "Job & Business",
  },
  {
    id: "job",
    name: "Job",
    parentId: "job-business",
  },
  {
    id: "business",
    name: "Business",
    parentId: "job-business",
  },
  {
    id: "marketing-advertising",
    name: "Marketing & Advertising",
    parentId: "job-business",
  },
  {
    id: "market-bakery",
    name: "Market & Bakery",
  },
  {
    id: "medical-health",
    name: "Medical & Health",
  },
  {
    id: "acupuncturist",
    name: "Acupuncturist",
    parentId: "medical-health",
  },
  {
    id: "chiropractor",
    name: "Chiropractor",
    parentId: "medical-health",
  },
  {
    id: "family-therapy",
    name: "Family Therapy",
    parentId: "medical-health",
  },
  {
    id: "food-health",
    name: "Food & Health",
    parentId: "medical-health",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    parentId: "medical-health",
  },
  {
    id: "nursing-agency",
    name: "Nursing Agency",
    parentId: "medical-health",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    parentId: "medical-health",
  },
  {
    id: "psychotherapist",
    name: "Psychotherapist",
    parentId: "medical-health",
  },
  {
    id: "rmt-massage",
    name: "RMT Massage",
    parentId: "medical-health",
  },
  {
    id: "pet",
    name: "Pet",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
  },
  {
    id: "real-estate",
    name: "Real & Estate",
  },
  {
    id: "mortgage-broker",
    name: "Mortgage Broker",
    parentId: "real-estate",
  },
  {
    id: "realtor",
    name: "Realtor",
    parentId: "real-estate",
  },
  {
    id: "rental",
    name: "Rental",
    parentId: "real-estate",
  },
  {
    id: "renovation-construction",
    name: "Renovation & Construction",
  },
  {
    id: "electrician-lighting",
    name: "Electrician & Lighting",
    parentId: "renovation-construction",
  },
  {
    id: "flooring-woodworking",
    name: "Flooring & Woodworking",
    parentId: "renovation-construction",
  },
  {
    id: "gas-fitter",
    name: "Gas Fitter",
    parentId: "renovation-construction",
  },
  {
    id: "glass-patio",
    name: "Glass & Patio",
    parentId: "renovation-construction",
  },
  {
    id: "interior-designer",
    name: "Interior Designer",
    parentId: "renovation-construction",
  },
  {
    id: "kitchen-bath",
    name: "Kitchen & Bath",
    parentId: "renovation-construction",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    parentId: "renovation-construction",
  },
  {
    id: "metal-fabricator",
    name: "Metal Fabricator",
    parentId: "renovation-construction",
  },
  {
    id: "painter",
    name: "Painter",
    parentId: "renovation-construction",
  },
  {
    id: "plumber",
    name: "Plumber",
    parentId: "renovation-construction",
  },
  {
    id: "renovation-builder",
    name: "Renovation & Builder",
    parentId: "renovation-construction",
  },
  {
    id: "home-Inspector",
    name: "Home Inspector",
    parentId: "renovation-construction",
  },
  {
    id: "restaurant",
    name: "Restaurant",
  },
  {
    id: "service-job",
    name: "Service Job",
  },
  {
    id: "automotive-service",
    name: "Automotive Service",
    parentId: "service-job",
  },
  {
    id: "cargo-freight",
    name: "Cargo & Freight",
    parentId: "service-job",
  },
  {
    id: "cleaning",
    name: "Cleaning",
    parentId: "service-job",
  },
  {
    id: "consular-service",
    name: "Consular service",
    parentId: "service-job",
  },
  {
    id: "tailor",
    name: "Tailor",
    parentId: "service-job",
  },
  {
    id: "travel-ticket",
    name: "Travel & Ticket",
    parentId: "service-job",
  },
  {
    id: "shopping",
    name: "Shopping",
  },
  {
    id: "art",
    name: "Art",
    parentId: "shopping",
  },
  {
    id: "car-dealership",
    name: "Car & Dealership",
    parentId: "shopping",
  },
  {
    id: "carpet-furniture",
    name: "Carpet & Furniture",
    parentId: "shopping",
  },
  {
    id: "clothing",
    name: "Clothing",
    parentId: "shopping",
  },
  {
    id: "decoration",
    name: "Decoration",
    parentId: "shopping",
  },
  {
    id: "food",
    name: "Food",
    parentId: "shopping",
  },
  {
    id: "gift-shop",
    name: "Gift Shop",
    parentId: "shopping",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    parentId: "shopping",
  },
  {
    id: "building-material",
    name: "Building Material",
    parentId: "shopping",
  },
  {
    id: "teacher-trainer",
    name: "Teacher & Trainer",
  },
  {
    id: "art",
    name: "Art",
    parentId: "teacher-trainer",
  },
  {
    id: "dance",
    name: "Dance",
    parentId: "teacher-trainer",
  },
  {
    id: "english",
    name: "English",
    parentId: "teacher-trainer",
  },
  {
    id: "it",
    name: "IT",
    parentId: "teacher-trainer",
  },
  {
    id: "makeup-beauty",
    name: "Makeup & Beauty",
    parentId: "teacher-trainer",
  },
  {
    id: "music",
    name: "Music",
    parentId: "teacher-trainer",
  },
  {
    id: "sport-trainer",
    name: "Sport Trainer",
    parentId: "teacher-trainer",
  },
  {
    id: "food",
    name: "Food",
    parentId: "teacher-trainer",
  },
];
