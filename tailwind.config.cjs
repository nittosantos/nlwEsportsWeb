/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/bg-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572fc 10.33%, #43e7ad 40.33%, #e1d55d 95.34%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
