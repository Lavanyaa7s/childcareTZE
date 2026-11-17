export interface ProgramPillar {
  id: string;
  title: string;
  chineseTitle: string;
  ageRange: string;
  accentColor: string;
  cardBg: string;
  buttonText: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  scheduleNote: string;
  illustrationKey: 'play' | 'grow' | 'smart' | 'safe';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Arts & Craft' | 'Outdoor Play' | 'Celebrations';
  ageGroup: string;
  termLabel: string;
  description: string;
  sceneKey:
    | 'blocks'
    | 'painting'
    | 'storytime'
    | 'garden'
    | 'music'
    | 'festive'
    | 'sensory'
    | 'graduation';
  bgTint: string;
}

export interface ParentTestimonial {
  id: string;
  parentName: string;
  relation: string;
  childProgramme: string;
  monthsEnrolled: string;
  rating: number;
  quote: string;
  outcome: string;
}

export const CENTRE_INFO = {
  englishName: 'Tze En KidZ Childcare Centre',
  shortName: 'Tze En KidZ',
  chineseName: '慈恩幼儿乐园',
  category: 'Nursery School & Childcare Centre',
  addressLine1: '1-1, Jalan Cheng Perdana 1/1a',
  addressLine2: 'Taman Desa Cheng Perdana 1, 75260 Melaka',
  fullAddress: '1-1, Jalan Cheng Perdana 1/1a, Taman Desa Cheng Perdana 1, 75260 Melaka',
  phoneDisplay: '013-625 6189',
  phoneHref: 'tel:+60136256189',
  whatsappHref:
    'https://wa.me/60136256189?text=Hello%20Tze%20En%20KidZ%20Childcare%20Centre%2C%20I%20would%20like%20to%20enquire%20about%20enrolment%20and%20booking%20a%20visit.',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=1-1%2C+Jalan+Cheng+Perdana+1%2F1a%2C+Taman+Desa+Cheng+Perdana+1%2C+75260+Melaka',
  hoursSummary: 'Mon – Fri · Opens 8:00 AM',
  hoursDetailed: [
    { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: 'By Appointment' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  logoPath: '/assets/aistudio/image_3436e49c.png',
};

export const PROGRAM_PILLARS: ProgramPillar[] = [
  {
    id: 'play-learn',
    title: 'Play & Learn',
    chineseTitle: '快乐探索',
    ageRange: '18 Months – 3 Years',
    accentColor: '#3B9AE8',
    cardBg: 'bg-[#3B9AE8]',
    buttonText: 'text-[#257BC4]',
    shortDesc: 'Hands-on sensory play and tactile activities that spark natural curiosity.',
    fullDesc:
      'Designed for toddlers and young nursery learners, our Play & Learn programme turns everyday curiosity into joyful motor, sensory, and early language milestones.',
    highlights: [
      'Guided wooden block building & sorting stations',
      'Sensory trays, rhythm songs & bilingual picture books',
      'Gentle fine-motor readiness & self-help habits',
    ],
    scheduleNote: 'Morning & Full-Day Care · Opens 8:00 AM',
    illustrationKey: 'play',
  },
  {
    id: 'growing-together',
    title: 'Growing Together',
    chineseTitle: '品格成长',
    ageRange: '3 – 4 Years',
    accentColor: '#EE5A7B',
    cardBg: 'bg-[#EE5A7B]',
    buttonText: 'text-[#D63F61]',
    shortDesc: 'Building confidence, sharing, empathy, and warm friendships every day.',
    fullDesc:
      'Children learn best when they feel loved and heard. Through group circle time, cooperative games, and polite greetings, every child builds emotional confidence and kindness.',
    highlights: [
      'Daily circle time sharing & confidence building',
      'Cooperative team games & outdoor obstacle play',
      'Courteous habits, empathy & caring for friends',
    ],
    scheduleNote: 'Small Group Ratio · Attentive Teachers',
    illustrationKey: 'grow',
  },
  {
    id: 'smart-start',
    title: 'Smart Start',
    chineseTitle: '三语启蒙',
    ageRange: '4 – 6 Years',
    accentColor: '#82C332',
    cardBg: 'bg-[#82C332]',
    buttonText: 'text-[#609919]',
    shortDesc: 'Trilingual early learning in English, Mandarin & Bahasa Melayu for school readiness.',
    fullDesc:
      'Our structured pre-primary curriculum prepares children smoothly for Malaysian primary schools with joyful phonics, Mandarin character recognition, Bahasa Melayu, and hands-on math.',
    highlights: [
      'Phonics, Mandarin 华语 reading & Bahasa Melayu',
      'Hands-on numeracy, logic puzzles & science discovery',
      'Primary 1 readiness & expressive storytelling',
    ],
    scheduleNote: 'Structured Morning Learning + Enrichment',
    illustrationKey: 'smart',
  },
  {
    id: 'safe-caring',
    title: 'Safe & Caring',
    chineseTitle: '安心守护',
    ageRange: 'All Ages (18M – 6Y)',
    accentColor: '#F4A623',
    cardBg: 'bg-[#F4A623]',
    buttonText: 'text-[#C97F0A]',
    shortDesc: 'A clean, secure, and loving environment with nutritious care every day.',
    fullDesc:
      'Parents in Taman Desa Cheng Perdana trust us with what matters most. Our centre maintains daily sanitization, secured access, home-cooked warm meals, and regular parent updates.',
    highlights: [
      'Daily toy & classroom sanitization protocols',
      'Child-safe corners, cushioned play mats & gated entry',
      'Warm balanced meals & calm afternoon rest routine',
    ],
    scheduleNote: 'Full-Day Care until 6:00 PM (Mon–Fri)',
    illustrationKey: 'safe',
  },
];

export const DAILY_HIGHLIGHTS = [
  {
    id: 'morning-circle',
    title: 'Morning Welcome & Trilingual Circle',
    time: '8:00 AM – 9:30 AM',
    summary: 'Warm morning check-in, cheerful greetings in English, Mandarin & BM, songs, and movement.',
  },
  {
    id: 'creative-discovery',
    title: 'Play-Based Learning & Arts Studio',
    time: '9:30 AM – 11:45 AM',
    summary: 'Age-grouped literacy, counting games, finger painting, and hands-on craft projects.',
  },
  {
    id: 'meals-rest',
    title: 'Nutritious Lunch, Nap & Afternoon Play',
    time: '12:00 PM – 6:00 PM',
    summary: 'Fresh balanced meals, cozy afternoon rest, storytelling, and parent pick-up updates.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Rainbow Block Architects',
    category: 'Classroom',
    ageGroup: 'Nursery (3–4 yrs)',
    termLabel: 'Morning Discovery',
    description:
      'Children collaborate at our bright wooden table to sort colours, balance towers, and practise spatial reasoning together.',
    sceneKey: 'blocks',
    bgTint: 'bg-[#EAF5FF]',
  },
  {
    id: 'gal-2',
    title: 'Little Finger-Paint Studio',
    category: 'Arts & Craft',
    ageGroup: 'All Age Groups',
    termLabel: 'Creative Fridays',
    description:
      'Washable non-toxic paints help little hands express big ideas while strengthening finger dexterity and colour recognition.',
    sceneKey: 'painting',
    bgTint: 'bg-[#FFF1F4]',
  },
  {
    id: 'gal-3',
    title: 'Bilingual Storytime Circle',
    category: 'Classroom',
    ageGroup: 'Pre-K (4–5 yrs)',
    termLabel: 'Trilingual Reading',
    description:
      'Interactive picture-book storytelling in English, Mandarin (华语), and Bahasa Melayu builds listening focus and vocabulary.',
    sceneKey: 'storytime',
    bgTint: 'bg-[#F3FAE8]',
  },
  {
    id: 'gal-4',
    title: 'Sunny Garden & Sensory Walk',
    category: 'Outdoor Play',
    ageGroup: 'Toddlers & Nursery',
    termLabel: 'Morning Fresh Air',
    description:
      'Safe outdoor movement, balance stepping stones, and watering our herb pots foster healthy bodies and love for nature.',
    sceneKey: 'garden',
    bgTint: 'bg-[#FFF8E6]',
  },
  {
    id: 'gal-5',
    title: 'Rhythm, Music & Movement',
    category: 'Arts & Craft',
    ageGroup: 'Nursery & Kindy',
    termLabel: 'Expressive Arts',
    description:
      'Tambourines, shakers, and action songs keep every classroom joyful while building coordination and listening skills.',
    sceneKey: 'music',
    bgTint: 'bg-[#F3EEFF]',
  },
  {
    id: 'gal-6',
    title: 'Lantern & Cultural Celebrations',
    category: 'Celebrations',
    ageGroup: 'Whole Centre',
    termLabel: 'Melaka Community',
    description:
      'Festive lantern crafts, Hari Raya, Deepavali, and Chinese New Year dress-up days celebrate Malaysia’s warm multicultural spirit.',
    sceneKey: 'festive',
    bgTint: 'bg-[#FFF2E8]',
  },
  {
    id: 'gal-7',
    title: 'Montessori Sensory Exploration',
    category: 'Outdoor Play',
    ageGroup: 'Toddlers (18M–3Y)',
    termLabel: 'Tactile Play',
    description:
      'Pouring, scooping, and natural-material sorting trays calm busy minds and develop steady hand-eye coordination.',
    sceneKey: 'sensory',
    bgTint: 'bg-[#E9FAF4]',
  },
  {
    id: 'gal-8',
    title: 'Year-End Concert & Graduation',
    category: 'Celebrations',
    ageGroup: 'K2 Graduates (6 yrs)',
    termLabel: 'Milestone Day',
    description:
      'Celebrating our confident six-year-olds on stage with parents cheering as they get ready for Primary 1.',
    sceneKey: 'graduation',
    bgTint: 'bg-[#FFF7E2]',
  },
];

export const INITIAL_TESTIMONIALS: ParentTestimonial[] = [
  {
    id: 'test-1',
    parentName: 'Mei Ling Tan',
    relation: 'Mother of Ethan (Age 4)',
    childProgramme: 'Growing Together',
    monthsEnrolled: '14 months enrolled',
    rating: 5,
    quote:
      'Ethan used to cling tightly at drop-off every morning, but within three weeks at Tze En KidZ he started running inside happily to greet his teachers.',
    outcome: 'Now greets elders politely in Mandarin & English and loves sharing toys with friends.',
  },
  {
    id: 'test-2',
    parentName: 'Hafizuddin Rahman',
    relation: 'Father of Aisyah (Age 5)',
    childProgramme: 'Smart Start',
    monthsEnrolled: '2 years enrolled',
    rating: 5,
    quote:
      'Living right in Cheng Perdana, convenience mattered—but what made us stay is how genuinely patient and attentive the teachers are with every child.',
    outcome: 'Aisyah reads simple English and BM storybooks confidently ahead of Primary 1.',
  },
  {
    id: 'test-3',
    parentName: 'Rachel Lim & Wei Jie',
    relation: 'Parents of Chloe (Age 3)',
    childProgramme: 'Play & Learn',
    monthsEnrolled: '9 months enrolled',
    rating: 5,
    quote:
      'The classrooms are spotless, meals are thoughtfully prepared, and the teachers always update us warmly during pick-up at 5:30 PM.',
    outcome: 'Chloe’s speech blossomed and she comes home singing new rhymes every week.',
  },
  {
    id: 'test-4',
    parentName: 'Priya Subramaniam',
    relation: 'Mother of Aarav (Age 6)',
    childProgramme: 'Smart Start',
    monthsEnrolled: '2.5 years enrolled',
    rating: 5,
    quote:
      'We loved how Tze En KidZ balances structured early academics with plenty of art, music, and cultural celebrations where every child feels included.',
    outcome: 'Aarav graduated ready for Standard 1 with strong number sense and social confidence.',
  },
];
