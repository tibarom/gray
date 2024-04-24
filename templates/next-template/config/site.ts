export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GrayLab",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Team",
      href: "/Team",
    },
    {
      title: "Portfolio",
      href: "/Portfolio",
    },
    {
      title: "Blog",
      href: "/Blog",
    },
    {
      title: "Recruit",
      href: "/Recruit",
    },
    {
      title: "Contact",
      href: "/Contact",
    },
  ],
  
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "/Contact",
  },
}
