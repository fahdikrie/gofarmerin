import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = { children: JSX.Element };

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
