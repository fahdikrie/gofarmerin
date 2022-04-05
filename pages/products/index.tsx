import type { NextPage } from 'next';

import Layout from 'components/layout';
import Products from 'components/containers/Products';

const ProductsPage: NextPage = () => {
  return (
    <Layout
      pageTitle={'Products'}
      pageDescription={'Products of Go Farmer Nusantara'}
    >
      <Products />
    </Layout>
  );
};

export default ProductsPage;
