import { Montserrat, Nunito_Sans } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-heading",
});

const nunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--nunito-sans",
});

export const nextFonts = {
  heading: montserrat,
  body: nunitoSans,
};