import type { Metadata } from "next";
import { TChildren } from "@/core/types";
import { preload } from "react-dom";
import "../globals.css";

import Providers from "@/core/client/providers";

const bio = "Zeyad Tamer is Egyptian Web Developer is passionate about Programming & Web development with intuitive experiences that augment human abilities and help businesses succeed."

export const metadata: Metadata = {
  title: "Zeyad Tamer | Web Developer",
  description: bio,
  keywords: ['web', 'web development', 'web developer', 'software engineer', 'frontend', 'front-end'],  
  robots: {
    index: true,    
    follow: true,
  },

  
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: TChildren) {

  preload("/fonts/ps-times.ttf", { as: "font" })
  preload("/fonts/inter.ttf", { as: "font" })

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
