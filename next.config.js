module.exports = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@chakra-ui/icons']
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
    deviceSizes: [384, 640, 960, 1280, 1920],
    imageSizes: [64, 128, 256]
  },
  reactStrictMode: true
}
