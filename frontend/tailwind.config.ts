import type { Config } from 'tailwindcss';  // Import the Config type from tailwindcss

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Updated for 'app' folder
    './src/components/**/*.{js,ts,jsx,tsx}'  // Updated for components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;
