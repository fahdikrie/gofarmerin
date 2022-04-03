import type { NextPage } from 'next';

import Layout from 'components/layout';
import Products from 'components/containers/Products';

const ProductsPage: NextPage = () => {
  return (
    <Layout>
      <Products />
    </Layout>
  );
};

export default ProductsPage;
