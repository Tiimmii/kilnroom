import "./globals.css";
import { site } from "@/data/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostFooter from "@/components/PostFooter";

export const metadata = {
  title: "Kilnroom | Ceramics classes and a monthly shelf",
  description: site.hero.lead,
};

// Scripting off keeps everything visible: the page only hides things for an intro when this class is set.
const flagJs = `document.documentElement.classList.add("js")`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: flagJs }} />
      </head>
      <body>
        <Nav />
        <main className="page">{children}</main>
        <Footer />
        <PostFooter />
      </body>
    </html>
  );
}
