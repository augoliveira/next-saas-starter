import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import Pwa from './Pwa';
import clsx from 'clsx';
import { siteConfig } from '@/config';
import { WEBSITE_HOST_URL } from '@/lib/constants';

// import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";

// export const montserrat = Montserrat({
// 	weight: ["300", "400", "600", "900"],
// 	style: ["normal", "italic"],
// 	subsets: ["latin"],
// 	variable: "--font-montserrat",
// });

// export const freightBigPro = localFont({
// 	src: [
// 		{
// 			path: "../fonts/freight-big-pro-light.otf",
// 			weight: "300",
// 			style: "normal",
// 		},
// 		{
// 			path: "../fonts/freight-big-pro-light-italic.otf",
// 			weight: "300",
// 			style: "italic",
// 		},
// 	],
// 	variable: "--font-freight-big-pro",
// });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description:
    "A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos. | (61) 9 8669-2775",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"]
    }
  },
  manifest: "/manifest.json",
  authors: [{ name: "Glazing Design" }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Glazing Design",
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  },
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  keywords: [
    "Vidro temperdo",
    "Vidro laminado",
    "Box para banheiro",
    "Espelho",
    "Guarda corpo de vidro",
    "Pergolado",
    "Vidro para varanda",
    "Glazing design",
    "Pele de vidro"
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      suppressHydrationWarning 
      lang="Pt-BR"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body 
      className={clsx(
        // montserrat.variable,
        // freightBigPro.variable,
        "h-full",
        "font-sans",
        "bg-gradient-to-r from-bodyColor to-[#fff]"
      )}
      >
        <UserProvider userPromise={userPromise}>
          <div className='space-y-8 pt-8 lg:py-8'>
          <div className="max-w-8xl mx-auto space-y-8 px-2 pt-8 lg:mb-8 lg:px-8 lg:pt-4">
              {children}
          <Pwa />
            </div>
            
          </div>
          
          </UserProvider>
      </body>
    </html>
  );
}
