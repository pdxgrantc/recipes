/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#062f4f',
        accent_bg: '#181321',
        bg: '#1a1a1a',
        footer: '#0e0e0e',
        accent_red: '#ed2121',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      margin: {
        page: '5rem',
      },
      padding: {
        DEFAULT: '2.5rem',
        box: {
          x: '2.5rem',
          y: '1.25rem',
        }
      },
      textColor: {
        DEFAULT: '#d6d6d6',
        text_alt: '#717171',
        button: '#9b9b9b',
        button_hover: '#fafafa',
      },
      fontSize: {
        DEFAULT: '1.25rem',
        xxlheader: '5rem',
        xlheader: '4rem',
        lheader: '3.5rem',
        header: '3rem',
        sheader: '2.5rem',
        xlarge: '2.25rem',
        large: '2rem',
        medium: '1.75rem',
      },
      gap: {
        DEFAULT: '2.5rem',
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
      },
      screens: {
        desktop: { min: "1250px" },
        half_screen: { min: "600px", max: "1249px" },
        mobile: { max: "599px" },
      },
    },
  },
  plugins: [],
}