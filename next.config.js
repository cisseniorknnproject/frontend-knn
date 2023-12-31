/** @type {import('next').NextConfig} */
const nextConfig = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
      ],
      plugins: [
        require("flowbite/plugin")
      ],
      images:{
        remotePatterns:[
          {
            protocol:'https',
            hostname: 'images.unsplash.com'
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com'
          }, 
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com'
          },
          {
            protocol: 'https',
            hostname: 'i.dummyjson.com'
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          }
        ]
      },
      theme: {},
}

module.exports = nextConfig
