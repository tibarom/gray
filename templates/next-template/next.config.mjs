import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
    });

    return config;
},
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/about/components/accordion",
        permanent: true,
      },
      {
        source: "/about/components",
        destination: "/about/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/about/primitives/:path*",
        destination: "/about/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/about/figma",
        permanent: true,
      },
      {
        source: "/about/forms",
        destination: "/about/components/form",
        permanent: false,
      },
      {
        source: "/about/forms/react-hook-form",
        destination: "/about/components/form",
        permanent: false,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
