import type { NextPage } from 'next';

import Layout from 'components/layout';
import Home from 'components/containers/Home';

const Homepage: NextPage = () => {
  return (
    <Layout pageTitle={'Home'} pageDescription={''}>
      <Home />
    </Layout>
  );
};

export default Homepage;
