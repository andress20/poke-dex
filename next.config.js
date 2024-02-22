/** @type {import('next').NextConfig} */
// const nextConfig = {
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  env: {
    SITE_URL: 'http://localhost:3000',
    POKEMON_API_URL: 'https://pokeapi.co/api/v2/pokemon/',
    POKEMON_TYPES_API_URL: 'https://pokeapi.co/api/v2/type/',
    API_LIMIT_URL_PARAMETER: '12',
  },
}
