import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	gridTemplateRows: {
		// Simple 16 row grid
		'16': 'repeat(16, minmax(0, 1fr))',
		'25': 'repeat(25, minmax(0, 1fr))',

  
		// Complex site-specific row configuration
		'layout': '200px minmax(900px, 1fr) 100px',
	  },
	  gridRowStart: {
		'8': '8',
		'9': '9',
		'10': '10',
		'11': '11',
		'12': '12',
		'13': '13',
		'14': '14',
		'15': '15',
		'16': '16',
		'17': '17',
		'18': '18',
		'19': '19',
		'20': '20',
		'21': '21',
		'22': '22',
		'23': '23',
		'24': '24',
		'25': '25',
		'26': '26',
		'27': '27',
		'28': '28',
		'29': '29',
		'30': '30',
	  },
	  gridRowEnd: {
		'8': '8',
		'9': '9',
		'10': '10',
		'11': '11',
		'12': '12',
		'13': '13',
		'14': '14',
		'15': '15',
		'16': '16',
		'17': '17',
		'18': '18',
		'19': '19',
		'20': '20',
		'21': '21',
		'22': '22',
		'23': '23',
		'24': '24',
		'25': '25',
		'26': '26',
		'27': '27',
		'28': '28',
		'29': '29',
		'30': '30',
	  },
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		keyframes: {
			slidein: {
				from: {
					opacity: "0",
					display: "hidden",
					transform: "translateY(-100vw)",
				},
				to: {
					opacity: "1",
					display: "flex",
					transform: "translateY(0)",
				},
			}
		}

  	}
  },
  plugins: [require('daisyui'), 
  require("tailwindcss-animate")],
};
export default config;
