import { Button } from "components/Button/Button"
import Features from "components/Features"
import HeroSection from "components/HeroSection/HeroSection"
import SectionBanner from "components/SectionBanner/SectionBanner"
import SupportedWallets from "components/SupportedWallets/SupportedWallets"
import { LP_GRID_ITEMS } from "lp-items"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <HeroSection />
      <Features />
      <div className="container">
        <SectionBanner index={1} />
        <SectionBanner index={2} />
        <SupportedWallets />
      </div>
    </>
  )
}
