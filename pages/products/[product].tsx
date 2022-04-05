import Layout from 'components/layout';
import ProductDetail from 'components/containers/ProductDetail';
import PRODUCTS, { ProductType } from 'data/products';
import { useRouter } from 'next/router';

const ProductDetailPage = () => {
  const router = useRouter();
  const productName = router.asPath.split('/')[2];
  const data = PRODUCTS.find(
    (el) => el.params.product == productName
  ) as ProductType;

  return (
    <Layout pageTitle={data?.name ?? 'Produk'} pageDescription={data?.desc}>
      <ProductDetail data={data} />
    </Layout>
  );
};

export default ProductDetailPage;
