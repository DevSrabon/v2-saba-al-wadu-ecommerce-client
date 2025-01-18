const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', 'class'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				primary: {
					50: 'hsl(var(--primary-hue), var(--primary-saturation), 90%)',
					100: 'hsl(var(--primary-hue), var(--primary-saturation), 80%)',
					200: 'hsl(var(--primary-hue), var(--primary-saturation), 70%)',
					300: 'hsl(var(--primary-hue), var(--primary-saturation), 60%)',
					400: 'hsl(var(--primary-hue), var(--primary-saturation), 50%)',
					500: 'hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness))',
					600: 'hsl(var(--primary-hue), var(--primary-saturation), 30%)',
					700: 'hsl(var(--primary-hue), var(--primary-saturation), 20%)',
					800: 'hsl(var(--primary-hue), var(--primary-saturation), 15%)',
					900: 'hsl(var(--primary-hue), var(--primary-saturation), 10%)',
				},

				main: {
					50: 'var(--main-color-50)',
					100: 'var(--main-color-100)',
					200: 'var(--main-color-200)',
					300: 'var(--main-color-300)',
					400: 'var(--main-color-400)',
					500: 'var(--main-color-500)',
					600: 'var(--main-color-600)',
					700: 'var(--main-color-700)',
					800: 'var(--main-color-800)',
					900: 'var(--main-color-900)',
				},
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
