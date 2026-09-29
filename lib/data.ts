export type CourseReview = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

export type Course = {
  slug: string;
  title: string;
  category: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: string;
  level: string;
  students: string;
  creator: string;
  creatorRole: string;
  creatorImage: string;
  description: string;
  includes: string[];
  modules: { title: string; description: string }[];
  reviews: CourseReview[];
  lessonPreview: { number: string; title: string; duration: string }[];
  moreLessonsLabel?: string;
};

export const categories = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const commonReviews: CourseReview[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/review-1.jpg",
    rating: 5,
    date: "a year ago",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/images/review-2.jpg",
    rating: 5,
    date: "a year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I have learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/review-3.jpg",
    rating: 5,
    date: "a year ago",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/review-4.jpg",
    rating: 5,
    date: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "Design",
    image: "/images/course-uiux.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: "$25",
    level: "Beginner",
    students: "26+",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      "Learn the fundamentals of Figma and build confidence working with digital design tools.",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: Figma Fundamentals",
        description:
          "Understand the workspace, essential tools, frames, layers, and basic design workflow.",
      },
      {
        title: "Module 2: Design Foundations",
        description:
          "Work with typography, color, spacing, components, and reusable design patterns.",
      },
      {
        title: "Module 3: Practical Interface Design",
        description:
          "Apply the fundamentals by creating polished screens and interactive prototypes.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    category: "Design",
    image: "/images/course-idea.png",
    lessons: 112,
    duration: "24 hours",
    comments: 720,
    rating: 4.8,
    price: "$25",
    level: "Intermediate",
    students: "199",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "IT & Software",
    image: "/images/course-bigdata.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: "$25",
    level: "Beginner",
    students: "26+",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      "Explore the foundations of big data and understand how large-scale information can support modern digital work.",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Big Data",
        description:
          "Understand the foundations, terminology, and role of big data.",
      },
      {
        title: "Module 2: Working with Data",
        description:
          "Explore data sources, organization, and practical analysis concepts.",
      },
      {
        title: "Module 3: Applying Data Insights",
        description:
          "Connect data insights to practical business and technology scenarios.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self Care",
    category: "Productivity",
    image: "/images/course-uiux.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: "$25",
    level: "Beginner",
    students: "26+",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      "Build practical routines around focused work, sustainable productivity, and personal balance.",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: Productive Foundations",
        description:
          "Set practical priorities and build a clear daily workflow.",
      },
      {
        title: "Module 2: Focus and Time",
        description:
          "Create focused work sessions and manage time intentionally.",
      },
      {
        title: "Module 3: Sustainable Habits",
        description:
          "Build habits that support consistent work and personal balance.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Finance",
    image: "/images/course-money.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: "$25",
    level: "Beginner",
    students: "26+",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      "Build a stronger foundation for personal money management through practical learning modules.",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: Money Foundations",
        description:
          "Understand the basic building blocks of personal money management.",
      },
      {
        title: "Module 2: Planning and Tracking",
        description:
          "Create practical systems for planning and tracking finances.",
      },
      {
        title: "Module 3: Better Financial Habits",
        description:
          "Turn financial knowledge into repeatable everyday habits.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Business",
    image: "/images/course-idea.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: "$25",
    level: "Beginner",
    students: "26+",
    creator: "purepearl studio",
    creatorRole: "Professional Creator",
    creatorImage: "/images/creator-woman.png",
    description:
      "Move from an initial idea toward a structured startup concept with practical learning activities.",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    modules: [
      {
        title: "Module 1: From Idea to Concept",
        description:
          "Turn an initial idea into a clearer product or business concept.",
      },
      {
        title: "Module 2: Building the Foundation",
        description:
          "Explore audience, positioning, planning, and early execution.",
      },
      {
        title: "Module 3: Launch and Growth",
        description:
          "Organize the next steps needed to launch and develop the idea.",
      },
    ],
    reviews: commonReviews,
    lessonPreview: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessonsLabel: "99 more videos",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/creator-woman.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/creator-man.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/creator-apron.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It is fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const learningPaths = [
  ["Design", "Sparkles"],
  ["Development", "Code2"],
  ["IT & Software", "MonitorPlay"],
  ["Business", "BriefcaseBusiness"],
  ["Marketing", "Megaphone"],
  ["Photography", "Camera"],
] as const;

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
