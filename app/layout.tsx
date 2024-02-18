import NavBar from "components/NavBar/NavBar"
import { Roboto } from "next/font/google"

import "styles/tailwind.css"

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  style: ["normal", "italic"],
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
