import Layout from 'components/layout';
import ProductDetail from 'components/containers/ProductDetail';
import PRODUCTS, { ProductType } from 'data/products';
import { useRouter } from 'next/router';
// import ProductNotFound from 'components/containers/ProductDetail/ProductNotFound';

const ProductDetailPage = () => {
  const router = useRouter();
  const productName = router.asPath.split('/')[2];
  const data = PRODUCTS.find(
    (el) => el.params.product == productName
  ) as ProductType;

  // if (data == undefined) {
  //   return (
  //     <Layout>
  //       <ProductNotFound />
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <ProductDetail data={data} />
    </Layout>
  );
};

export default ProductDetailPage;
