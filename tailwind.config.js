/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'difusion': "url('/banner/festival_neaves.jpeg')",
      }
    },
  },
  plugins: [],
}

