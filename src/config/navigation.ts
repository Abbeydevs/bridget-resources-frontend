export type NavItem = {
  title: string;
  href: string;
  isPopular?: boolean;
};

export const navigationConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contribution Plans",
      href: "/contribution-plans",
      isPopular: true,
    },
    {
      title: "Financial Services",
      href: "/services",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] as NavItem[],

  actions: {
    login: {
      title: "Member Login",
      href: "/login",
    },
    primaryCta: {
      title: "Join Contribution Plan",
      href: "/register",
    },
  },
};
