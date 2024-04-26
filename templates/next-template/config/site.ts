export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GrayLab",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "TEAM",
      href: "/team",
    },
    {
      title: "PORTFOLIO",
      href: "/portfolio",
    },
    {
      title: "WRITING",
      href: "/writing",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ],
  
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "/contact",
  },
}
