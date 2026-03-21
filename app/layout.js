import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LayoutWrapper from "@/components/LayoutWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Titanium Dioxide Manufacturers in Germany | Salford",
  description:
    "Salford is one of the leading Titanium Dioxide manufacturers in Germany, offering premium-grade TiO₂ for paints, plastics, coatings, and industrial applications.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCB7MQNM');
          `}
        </Script>

        {/* GA4 – gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-35XWZJKQRX"
          strategy="afterInteractive"
        />

        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-35XWZJKQRX', {
              send_page_view: true
            });
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17080387993"
          strategy="afterInteractive"
        />

        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17080387993');
          `}
          
        </Script>
      </head>

      <body className={`${outfit.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCB7MQNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
