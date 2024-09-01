const leftmenu = [
  {
    label: "Show Home",
    href: "/homeredesign",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

const rightmenu = [
  {
    label: "Services",
    href: "/services",
    subpages: [
      { name: "Home Design", href: "/services/home-design" },
      {
        name: "Complete Home Renovations",
        href: "/services/complete-home-renovations",
      },
      { name: "Home Additions", href: "/services/home-additions" },
      { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
      {
        name: "Outdoor Living Spaces",
        href: "/services/outdoor-living-spaces",
      },
      { name: "Exterior Renovations", href: "/services/exterior-renovations" },
      { name: "Basement Development", href: "/services/basement-development" },
      { name: "Bathroom Renovations", href: "/services/bathroom-renovations" },
      { name: "Custom Home Builds", href: "/services/custom-home-builds" },
      { name: "Renovation Previews", href: "/services/renovation-previews" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    badge: "Talk",
  },
  {
    label: "About",
    href: "/about",
    subpages: [
      { name: "Our Process", href: "/about/our-process" },
      { name: "Our Story", href: "/about/our-story" },
      { name: "Projects", href: "/projects" },
      { name: "Blogs", href: "/blogs" },
    ],
  },
];

export { leftmenu, rightmenu };
