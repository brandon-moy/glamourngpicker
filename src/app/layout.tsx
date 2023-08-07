import "./globals.css";
import { Inter } from "next/font/google";
import { FormProvider } from "./components/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GlamouRNG Picker",
  description:
    "A web application to pick level 1 glamours available for all races, genders, and jobs on the Marketboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
