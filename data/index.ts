export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Explore my professional journey and skills",
    description: "Discover My Journey",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "hidden sm:block absolute -right-5 bottom-0 md:w-40 lg:w-60 xl:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/cv.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Space Tourism Website",
    des: "A space tourism website that reflects the journey to space and back. Built with Next.js, React.js and Tailwind CSS.",
    img: "/space_tourism.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/torex9",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg",],
    link: "https://github.com/torex9",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/torex9",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/torex9",
  },
];

export const testimonials = [
  {
    quote:
      "Rufus dedication and hard work are truly commendable. His passion for mastering the latest web technologies and creating seamless user experiences is inspiring. He consistently goes above and beyond, demonstrating an incredible work ethic and a keen eye for detail in every project. His ability to overcome challenges and grow as a frontend developer is impressive.",
    name: "Steven Roberts",
    title: "Head of Designs at NorthLink Digital",
    img: "/steven.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Keiron Day",
    title: "Full-Stack Developer at Northlink Digital",
    img: "/Keiron.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Iretomiwa Soladoye",
    title: "Business Architecture Analyst at Accenture UK",
    img: "/tomiwa.svg",
  },

];

export const companies = [
  {
    id: 1,
    name: "Northlink Digital",
    img: "/NorthLink_small.svg",
    nameImg: "/Northlink_Name.svg",
  },
  {
    id: 2,
    name: "NetplusDotCom",
    img: "/netplus_Small.svg",
    nameImg: "/NetPlusDotCom.svg",
  },
  {
    id: 3,
    name: "FibreOne Broadband",
    img: "/fibreOneLogo.jpeg",
    nameImg: "/FiberOneName.svg",
  },

  {
    id: 5,
    name: "AXA Mansard",
    img: "/AXA_Logo.svg",
    nameImg: "/axa-mansard.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern - Northlink Digital",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - NetplusDotCom",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Customer Service Representative - FibreOne Broadband",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Support Analyst - AXA Mansard",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    socialLink: "https://github.com/torex9",
  },

  {
    id: 3,
    img: "/link.svg",
    socialLink: "https://www.linkedin.com/in/rufus-oludare-588a91169/",
  },
];

export const TechStack1 = ["React.js", "Next.js", "TypeScript"];
export const TechStack2 = ["Framer Motion", "Gsap", "MJML"];
