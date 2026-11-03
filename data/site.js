export const site = {
  name: "Kilnroom",
  email: "hello@kilnroom.example",
  hero: {
    title: "Throw it. Fire it. Keep it.",
    lead: "Weekend throwing classes and a small shelf of fired pieces each month.",
  },
  statement: "Every piece starts as a ball of clay and leaves the kiln at 1,222°C.",
  shutterTitle: "Fire does the finishing.",
  closing: "Come and make something.",
};

export const heroImages = [
  { src: "/images/kiln.jpg", width: 1920, height: 1280, alt: "A kiln stacked with patterned tiles on refractory shelves" },
  { src: "/images/wheel.jpg", width: 1920, height: 1280, alt: "Hands shaping a ribbed clay pot on a wheel" },
  { src: "/images/potter.jpg", width: 1920, height: 1329, alt: "A potter shaping a pot by hand in a workshop" },
  { src: "/images/shelves.jpg", width: 1920, height: 1440, alt: "Studio shelves of bisque ware and glazes" },
  { src: "/images/kiln-car.jpg", width: 1920, height: 1440, alt: "A kiln car stacked with glazed plates and bowls" },
];

export const shutterImages = [
  { src: "/images/drying-rows.jpg", width: 1920, height: 1440 },
  { src: "/images/kiln-car.jpg", width: 1920, height: 1440 },
  { src: "/images/kiln.jpg", width: 1920, height: 1280 },
  { src: "/images/wheel.jpg", width: 1920, height: 1280 },
  { src: "/images/shelves.jpg", width: 1920, height: 1440 },
];

// A typical cone 6 glaze firing: rate in degrees per hour, target in degrees C.
export const firing = [
  { step: "Warm the shelves", rate: "150°C/h", target: 600, ramp: 2 },
  { step: "Burn out", rate: "300°C/h", target: 1000, ramp: 3 },
  { step: "Climb to cone 6", rate: "120°C/h", target: 1222, ramp: 5 },
  { step: "Hold the peak", rate: "10 min", target: 1222, ramp: 6 },
];

export const shelf = [
  {
    title: "Bowls",
    text: "Glazed stoneware for the table.",
    images: [
      { src: "/images/tagines.jpg", width: 1920, height: 1209, pos: "30% 50%" },
      { src: "/images/bowl.jpg", width: 1920, height: 1280, pos: "50% 50%" },
      { src: "/images/kiln-car.jpg", width: 1920, height: 1440, pos: "60% 40%" },
    ],
  },
  {
    title: "Teapots",
    text: "Thrown, with pulled handles, fired to cone 6.",
    images: [
      { src: "/images/shelves.jpg", width: 1920, height: 1440, pos: "20% 50%" },
      { src: "/images/teapots.jpg", width: 1920, height: 1218, pos: "50% 50%" },
      { src: "/images/wheel.jpg", width: 1920, height: 1280, pos: "50% 50%" },
    ],
  },
  {
    title: "Vessels",
    text: "Tall forms, left to dry slowly.",
    images: [
      { src: "/images/drying-rows.jpg", width: 1920, height: 1440, pos: "30% 50%" },
      { src: "/images/drying.jpg", width: 1920, height: 1440, pos: "52% 45%" },
      { src: "/images/potter.jpg", width: 1920, height: 1329, pos: "55% 40%" },
    ],
  },
];

export const classes = [
  { day: "Saturday morning", name: "Throwing for beginners", text: "Centre the clay, pull a cylinder, make a bowl." },
  { day: "Saturday afternoon", name: "Trimming and glazing", text: "Finish last week's pieces and glaze them." },
  { day: "Sunday", name: "Open bench", text: "Bring a project. Bench space and a firing slot." },
];

export const questions = [
  { q: "Do I need experience?", a: "No. The Saturday morning class starts at the beginning." },
  { q: "What should I wear?", a: "Clothes that can get clay on them. Short nails help." },
  { q: "When do I get my pieces?", a: "After the bisque and glaze firings, usually within a few weeks." },
  { q: "Can I come with a friend?", a: "Yes. Book two places and you will share a bench." },
];

export const credits = [
  ["Dschag", "https://commons.wikimedia.org/wiki/File:Stacking_kiln_for_bulk_firing_of_one_pattern.jpg", "CC BY-SA 3.0"],
  ["Encik Tekateki", "https://commons.wikimedia.org/wiki/File:Firing_kiln_furniture_di_kilang_Claytan.jpg", "CC BY-SA 4.0"],
  ["Kritzolina", "https://commons.wikimedia.org/wiki/File:Pottery_at_the_Chokhi_Dhani_Resort_Panchkula_32.jpg", "CC BY-SA 4.0"],
  ["Maja1407", "https://commons.wikimedia.org/wiki/File:Grn%C4%8Darska_radionica.jpg", "CC BY-SA 4.0"],
  ["AlixSaz", "https://commons.wikimedia.org/wiki/File:Ordinary_chickpeas_in_a_ceramic_bowl.jpg", "CC BY-SA 4.0"],
  ["Emna Mizouni", "https://commons.wikimedia.org/wiki/File:Pottery_wares_at_Sidi_Bousaid_3.jpg", "CC BY-SA 4.0"],
  ["Mutney", "https://commons.wikimedia.org/wiki/File:Flookan_community_ceramics_studio,_Market_House,_St_Austell,_Cornwall_-_October_2024_(5).jpg", "CC BY 4.0"],
  ["Ermell", "https://commons.wikimedia.org/wiki/File:D%C3%B6rfleins_T%C3%B6pferei_D%C3%B6ppmann-20190714-RM-194552.jpg", "CC BY-SA 4.0"],
  ["Muhammad Amdad Hossain", "https://commons.wikimedia.org/wiki/File:Clay_Pottery_Drying.jpg", "CC BY-SA 4.0"],
  ["STA3816", "https://commons.wikimedia.org/wiki/File:Onta_Pottery_drying_in_the_sun.jpg", "CC BY-SA 3.0"],
];

export const about = {
  title: "Slow clay. Careful fire.",
  lead: "A small studio: you learn to throw, we do the firing.",
  statement: "We would rather fire fewer pieces well than many pieces fast.",
  images: [
    { src: "/images/shelves.jpg", width: 1920, height: 1440, alt: "Studio shelves of bisque ware and glazes" },
    { src: "/images/potter.jpg", width: 1920, height: 1329, alt: "A potter shaping a pot by hand in a workshop" },
    { src: "/images/kiln.jpg", width: 1920, height: 1280, alt: "A kiln stacked with patterned tiles" },
    { src: "/images/teapots.jpg", width: 1920, height: 1218, alt: "Handmade teapots on shelves" },
    { src: "/images/wheel.jpg", width: 1920, height: 1280, alt: "Hands shaping a ribbed clay pot on a wheel" },
  ],
  steps: [
    { name: "Wedge the clay", text: "Knead out the air so the clay behaves on the wheel." },
    { name: "Throw", text: "Centre, open and pull up the walls." },
    { name: "Trim and dry", text: "Turn the foot, then let the piece dry slowly and evenly." },
    { name: "Bisque fire", text: "A first firing hardens the clay so it can take glaze." },
    { name: "Glaze and fire again", text: "Dip or brush, then the cone 6 firing from the table on the home page." },
  ],
  cta: "Come and throw with us.",
};

export const contact = {
  title: "Say hello. Book a bench.",
  lead: "Ask about a class, a shelf piece or an open bench.",
  statement: "Tell us what you would like to make.",
  images: [
    { src: "/images/kiln-car.jpg", width: 1920, height: 1440, alt: "A kiln car stacked with glazed plates and bowls" },
    { src: "/images/tagines.jpg", width: 1920, height: 1209, alt: "Painted ceramic tagines" },
    { src: "/images/bowl.jpg", width: 1920, height: 1280, alt: "A glazed ceramic bowl" },
    { src: "/images/drying.jpg", width: 1920, height: 1440, alt: "Clay pots drying on the ground" },
    { src: "/images/drying-rows.jpg", width: 1920, height: 1440, alt: "Rows of pots drying on racks" },
  ],
};
