// Mock Data for Benkiz Caterers

export const MOCK_USERS = [
  {
    id: 1,
    name: "Amara Okonkwo",
    email: "user@benkiz.com",
    password: "user123",
    role: "user",
    avatar: null,
    phone: "+254 712 345 678",
    joinedAt: "2024-01-15",
    bookings: [
      { id: "BK-001", event: "Wedding Reception", date: "2025-08-15", guests: 150, status: "confirmed", total: 450000 },
      { id: "BK-002", event: "Birthday Party", date: "2025-09-20", guests: 50, status: "pending", total: 85000 }
    ]
  },
  {
    id: 2,
    name: "David Mwangi",
    email: "staff@benkiz.com",
    password: "staff123",
    role: "staff",
    avatar: null,
    phone: "+254 723 456 789",
    joinedAt: "2023-06-01",
    department: "Events",
    shift: "Morning",
    assignedEvents: ["BK-001", "BK-003"],
    tasks: [
      { id: 1, task: "Set up wedding venue", event: "BK-001", dueTime: "08:00", done: false },
      { id: 2, task: "Prepare appetizer station", event: "BK-001", dueTime: "10:00", done: true },
      { id: 3, task: "Coordinate with florist", event: "BK-001", dueTime: "09:00", done: false }
    ]
  },
  {
    id: 3,
    name: "Grace Wanjiru",
    email: "admin@benkiz.com",
    password: "admin123",
    role: "admin",
    avatar: null,
    phone: "+254 734 567 890",
    joinedAt: "2022-03-15",
    permissions: ["manage_bookings", "manage_staff", "view_revenue", "manage_menu"]
  },
  {
    id: 4,
    name: "Benkiz Owner",
    email: "superadmin@benkiz.com",
    password: "super123",
    role: "super_admin",
    avatar: null,
    phone: "+254 745 678 901",
    joinedAt: "2020-01-01",
    permissions: ["all"]
  }
]


export const MENU_ITEMS_OLD = [
  { id: 1, name: "All sorts of Pilau", category: "Mains", price: "Shs 2800", description: "Pilau origi ya kikwetu.", tags: ["gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538228/IMG-20260615-WA0087_unb6ju.jpg" },
  { id: 2, name: "Nyama Choma", category: "Appetizers", price: "Shs 3200", description: "(Nyam Chom) Grilled Steak / BBQ (Berbeque)  .", tags: ["halal"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538208/IMG-20260615-WA0069_xwgo6r.jpg" },
  { id: 3, name: "Vegetable Rice", category: "Mains", price: "Shs 4500", description: "Pilau with a variety of vegetables.", tags: ["halal", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941161/unnamed_7_gw27ih.jpg" },
  { id: 4, name: "Local Delicacies (eg. Managu)", category: "Mains", price: "Shs 3800", description: "Local delicacies.", tags: ["halal", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941006/unnamed_6_hwhemh.jpg" },
  { id: 5, name: "Smoothie", category: "Drinks", price: "Shs 3400", description: "Made by the best of local organic fruits.", tags: ["vegan", "gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781549761/mango_smoothie_v8pzeh.jpg" },
  { id: 6, name: "Matoke", category: "Dessert", price: "KSH 1800", description: "Kisii Native Green Bananas.", tags: ["vegetarian"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781549099/Recipe__Kenyan_Matoke_Green_Banana_Stew_lirz43.jpg" },
  { id: 7, name: "Pumpkin Chapati", category: "Dessert", price: "Shs 2200", description: "Silky smooth and soft chapatis.", tags: ["gluten-free", "vegetarian"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780940999/unnamed_9_srdtfb.jpg" },
  { id: 8, name: "Signature Wedding Cakes", category: "Main", price: "Ksh1200", description: "Cake for all events (Birthday,Wedding,Graduation,Official Events etc).", tags: ["Cake", "Fondant","Whipped Cream"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538241/IMG-20260615-WA0094_tlw8hr.jpg" },
  { id: 9, name: "Brown Ugali", category: "Mains", price: "Ksh 1500", description: "Made with traditional mtama flour .", tags: ["gluten-free"], img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941001/unnamed_13_rhsd3o.jpg" }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Serving Point 1",
    category: "Mains",
    price: "Custom",
    description:
      "Beef stew, Bean stew, Matumbo wet fry, Managu, Cabbage, Vegetable rice, White/Brown ugali, Chapati, Water, Soda, Watermelon.",
    tags: ["Lunch", "Traditional", "Buffet"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941161/unnamed_7_gw27ih.jpg"
  },

  {
    id: 2,
    name: "Serving Point 2",
    category: "Mains",
    price: "Custom",
    description:
      "Beef stew, Goat dry fry, Bean stew, Chicken kienyeji, Managu, Chinsaga, Steamed cabbage, Vegetable rice, Roasted potatoes, Ugali, Chapati, Watermelon, Pineapple, Water, Soda.",
    tags: ["Buffet", "Premium", "Lunch"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941006/unnamed_6_hwhemh.jpg"
  },

  {
    id: 3,
    name: "Serving Point 3",
    category: "Mains",
    price: "Premium",
    description:
      "Salads, Kachumbari, Coleslaw, Pineapple raisin, Butter chicken, Creamed beef stew, Grilled chicken, Beef stew, Goat dry fry, Choma goat, Ndengu in coconut.",
    tags: ["Premium", "Event", "Buffet"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538208/IMG-20260615-WA0069_xwgo6r.jpg"
  },

  {
    id: 4,
    name: "Dinner Buffet (6PM)",
    category: "Mains",
    price: "Package",
    description:
      "Beef stew, Bean stew, Matumbo wet fry, Managu, Cabbage, Vegetable rice, Ugali, Chapati, Water, Watermelon.",
    tags: ["Dinner", "Buffet"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538228/IMG-20260615-WA0087_unb6ju.jpg"
  },

  {
    id: 5,
    name: "Evening Tea (10PM)",
    category: "Beverages",
    price: "Package",
    description:
      "Fresh assorted tea selection.",
    tags: ["Tea", "Refreshments"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781549761/mango_smoothie_v8pzeh.jpg"
  },

  {
    id: 6,
    name: "Breakfast (7AM)",
    category: "Breakfast",
    price: "Package",
    description:
      "Tea and freshly prepared mandazi.",
    tags: ["Breakfast", "Tea"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780940999/unnamed_9_srdtfb.jpg"
  },

  {
    id: 7,
    name: "Lunch Buffet (10AM–12PM)",
    category: "Mains",
    price: "Package",
    description:
      "Beef stew, Goat dry fry, Bean stew, Chicken kienyeji, Managu, Chinsaga, Steamed cabbage, Vegetable rice, Roasted potatoes, Ugali, Chapati, Watermelon, Water.",
    tags: ["Lunch", "Buffet"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1780941001/unnamed_13_rhsd3o.jpg"
  },

  {
    id: 8,
    name: "Premium Buffet Selection",
    category: "Mains",
    price: "Premium",
    description:
      "Salads, Kachumbari, Coleslaw, Pineapple raisin, Grilled chicken, Chicken wet fry, Beef stew, Goat dry fry, Choma goat, Ndengu in coconut, Soda.",
    tags: ["Premium", "Special Events"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538241/IMG-20260615-WA0094_tlw8hr.jpg"
  },

  {
    id: 9,
    name: "Evening Tea Snacks",
    category: "Beverages",
    price: "Package",
    description:
      "Assorted tea, mandazi and beef samosa.",
    tags: ["Tea", "Snacks"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781549099/Recipe__Kenyan_Matoke_Green_Banana_Stew_lirz43.jpg"
  }
];

export const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    description: "From intimate ceremonies to grand receptions, we craft menus that reflect your love story. Our full-service wedding catering includes tastings, table settings, and dedicated event coordination.",
    capacity: "50 - 1000+ Guests",
    startingPrice: "Ksh1200 per person",
    features: ["Complimentary tasting for two", "Custom menu design", "Signature cocktail creation", "Cake cutting service"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538205/IMG-20260615-WA0063_dymnhy.jpg"
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Elevate your business gatherings with our sophisticated corporate catering. Perfect for galas, product launches, board meetings, and multi-day conferences.",
    capacity: "20 - 2000 Guests",
    startingPrice: "Ksh 7500 per person",
    features: ["Dedicated corporate manager", "Dietary accommodation", "Branded food stations", "Seamless silent service"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538240/IMG-20260615-WA0097_arky7x.jpg"
  },
  {
    id: "private",
    title: "Private Parties",
    description: "Bring the fine dining experience to your home or chosen venue. Our chefs create immersive culinary journeys for birthdays, anniversaries, and exclusive dinners.",
    capacity: "10 - 100 Guests",
    startingPrice: "Ksh 3500 per person",
    features: ["Interactive chef experience", "Sommelier wine pairing", "Bespoke tablescaping", "Post-event cleanup"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538218/IMG-20260615-WA0085_ckvtpk.jpg",
  },
  {
    id: "stations",
    title: "Interactive Food Stations",
    description: "Engage your guests with live action culinary stations. From Suya grilling to fresh oyster shucking, our stations add a dynamic element to any event.",
    capacity: "100+ Guests",
    startingPrice: "Ksh 3250 per person",
    features: ["Live chef demonstrations", "Customizable station themes", "Global flavor profiles", "Perfect for networking"],
    img: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538213/IMG-20260615-WA0075_mlh4k0.jpg"
  }
];