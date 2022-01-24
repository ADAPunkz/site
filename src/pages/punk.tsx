import { Router } from '@reach/router';

import Layout from '../components/Layout';
import NftDetailsLoader from '../components/NftDetailsLoader';

const Punk = () => (
  <Layout justify="center">
    <Router>
      <NftDetailsLoader path="/punk/:id" />
    </Router>
  </Layout>
);

export default Punk;
