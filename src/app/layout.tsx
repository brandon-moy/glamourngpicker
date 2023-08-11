import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "./components/context/AppContext";
import { ModalProvider } from "./components/context/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GlamouRNG Picker",
  description:
    "FFXIV Glamour randomizer for level 1 glamour available on Marketboard for all races, genders, and jobs",
  openGraph: {
    title: "GlamouRNG Picker",
    description:
      "FFXIV Glamour randomizer for level 1 glamour available on Marketboard for all races, genders, and jobs",
    url: "https://glamourngpicker.vercel.app",
    siteName: "GlamouRNG Picker",
    images: [
      {
        url: "https://glamourngpicker.vercel.app/ogimage.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ModalProvider>
            <div
              className="fixed top-0 z-[-100] w-screen h-full lg:h-screen bg-center bg-cover brightness-50 sepia-[25%]"
              style={{ backgroundImage: "url(/background.webp)" }}
            ></div>
            {children}
          </ModalProvider>
        </AppProvider>
      </body>
    </html>
  );
}
