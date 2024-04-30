/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'teatro': "url('/bg-teatro.jpg')",
        'radio': "url('/bg-radio.jpg')",
      }
    },
  },
  plugins: [],
}

