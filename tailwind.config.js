/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'blue-gradient': 'linear-gradient(to bottom, rgba(65, 192, 232, 0.1), rgba(65, 192, 232, 1))',
          'yellow-gradient': 'linear-gradient(to bottom, rgba(252, 185, 0, 0.1), rgba(252, 185, 0, 1))',
        },
        // colors: {
        //   customBlue: '#41C0E8',
        // },
        animation: {
          'fade-in-up': 'fadeInUp 1s ease-out',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }