import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const Layout = ({ children, pageTitle, pageDescription }: LayoutProps) => (
  <>
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{`${pageTitle} | Go Farmer Nusantara`}</title>
      <meta name="title" content={`${pageTitle} | Go Farmer Nusantara`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Go Farmer Nusantara" />
      <meta name="description" content={pageDescription} />
      <meta charSet="utf-8" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gofarmerin.com/" />
      <meta
        property="og:title"
        content={`${pageTitle} | Go Farmer Nusantara`}
      />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="/images/og/gofarmerin.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gofarmerin.com/" />
      <meta
        property="twitter:title"
        content={`${pageTitle} | Go Farmer Nusantara`}
      />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="/images/og/gofarmerin.png" />

      {/* <!-- Favicon --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon/favicon-16x16.png"
      />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
