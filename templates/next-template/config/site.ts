export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GrayLab",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Writing",
      href: "/writing",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "/contact",
  },
}
