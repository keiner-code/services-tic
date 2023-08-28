import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js', 
    './pages/**/*.{ts,tsx}', 
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    nextui()
  ],
}
export default config
