import type { NextPage } from 'next';

import Layout from 'components/layout';
import ProductDetail from 'components/containers/ProductDetail';

const ProductDetailPage: NextPage = () => {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  );
};

export default ProductDetailPage;
