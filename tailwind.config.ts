import type { Config } from 'tailwindcss';


const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        "hero-image": "url('/grid.svg')",
        "hero-card": "url('/bg-box.png')",
        "hero-page": "url('/bg-vidracaria-2.jpg')",
        "bg-contato": "url('/bg-contato.png')",
        "bg-cobertura": "url('/ProdutoTeto.jpg')",
        "bg-orçamento": "url('/bg-lateral-bar.jpg')",
        "contato-page": "url('/bg-esquadria.jpg')",
        bgOne: "url('/assets/bg-home1.webp')",
        bgTwo: "url('/assets/bgTwo.webp')",
        bgThree: "url('/assets/bgThree.webp')",
        slider: "linear-gradient(to top, #000 10%, transparent)",
        thumbnails: "linear-gradient(to top, #000 2%, transparent)",
        "reactBd-highPerformanceBg": "url('/assets/highPerformanceBg.webp')",
        "reactBd-titleBg": "url('/public/assets/titleBg.webp')"
      },
      colors: {
        whiteText: "#FFFFFF",
        blackText: "#000000",
        darkBg: "#151515",
        lightDarkBg: "#1e1e1e",
        redBg: "#b90807",
        buttonBg: "#9B4D45",
        primaryColor: "#161616",
        secondaryColor: "#f57d05",
        darkText: "#737373",
        borderColor: "#333333",
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b"
        },
        clr_body: "#141410",
        clr_white: "#ffffff",
        clr_title: "#181818",
        clr_mtitle: "#000d27",
        clr_pra: "#999999",
        clr_subtitle: "#121212",
        clr_base: "#c9f31d",
        clr_hover: "#c2ec1d9e",
        clr_bg1: "#e9f0ff",
        clr_ftext: "#818181",
        clr_footer: "#181818",
        clr_cusborder: "rgb(38, 37, 37)",
        clr_border1: "#414141",
        clr_ratting: "#ffa311",
        clr_bgsection: "#000d27",
        clr_success: "#3fca90",
        clr_danger: "#ed5050",
        clr_boxes1: "rgba(26, 77, 190, 0.05)",
        clr_cborder: "#d9d9d9",
        "violet-550": "#8257e6",

        "gray-900": "#121214",
        "gray-800": "#202024",
        "gray-300": "#c4c4cc",
        "gray-100": "#e1e1e6",

        "green-500": "#00875f",
        "green-300": "#00b37e",
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        customBlue: "#299EF3",
        lightGray: "#272D4E",
        lightGrayAlt: "#94A2B3",
        link: "#f72585",
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA"
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))"
          }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" }
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
        gradient: "gradient 6s linear infinite",
        // Modal
        "scale-in": "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        // Input Select
        "input-select-slide-up":
          "input-select-slide-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "input-select-slide-down":
          "input-select-slide-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        // Accordion
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        grid: "grid 15s linear infinite",
        wiggle: "wiggle 0.75s infinite",
        spinner: "spinner 1.2s linear infinite",
        blink: "blink 1.4s infinite both",
        shimmer: "shimmer 5s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "image-glow": "image-glow 4s ease-out 0.6s forwards",
        marquee: "marquee var(--duration) linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        loading: "loading 0.5s linear infinite",
        // Custom wiggle animation
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
};
export default config;
