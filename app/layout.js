import "@/app/_css/css.css";
import "@/app/_css/mgv2-application.css";
import "@/app/_css/blugov.css";

const title = "Sign in with myGov - myGov";
const description = "Sign in with myGov - myGov";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    images: "/myGov-cobranded-logo-black.svg",
  },
  icons: {
    icon: ["/myGov-cobranded-logo-black.svg"],
    apple: ["/myGov-cobranded-logo-black.svg"],
    shortcut: ["/myGov-cobranded-logo-black.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta property="og:site_name" content={title} />
        <meta name="author" content={title} />
      </head>

      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}