import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = { children: JSX.Element };

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Box pt={{ base: '4rem', md: '5rem' }}>{children}</Box>
    <Footer />
  </>
);

export default Layout;
