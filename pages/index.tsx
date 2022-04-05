import type { NextPage } from 'next';

import Layout from 'components/layout';
import Home from 'components/containers/Home';

const DESCRIPTION =
  'PT. Nusantara Farmer Jaya (Go Farmer Nusantara) is a supplier and exporter of agricultural products from Indonesia. We provide various types of agricultural products, especially coconut products, spices, and vegetables. Our company can also help you to get other good quality of the agricultural product.';

const Homepage: NextPage = () => {
  return (
    <Layout pageTitle={'Home'} pageDescription={DESCRIPTION}>
      <Home />
    </Layout>
  );
};

export default Homepage;
