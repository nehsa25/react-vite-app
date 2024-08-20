module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', //media: '@media (prefers-color-scheme: dark)',
  theme: {
    extend: {
      colors: {
        'nehsa-blue': '#1e3a8a',
        'nehsa-green': '#00ff00',
        'nehsa-red': '#ff0000',
        'nehsa-yellow': '#ffff00',
        'nehsa-orange': '#ff6600',
        'nehsa-purple': '#6600cc',
        'nehsa-pink': '#ff00ff',
        'nehsa-brown': '#663300',
        'nehsa-gray': '#666666',
        'nehsa-black': '#000000',
        'nehsa-white': '#ffffff',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
      }
    }
  }
}

