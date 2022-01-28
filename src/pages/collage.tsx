import { Router } from '@reach/router';

import CollagePage from '../components/CollagePage';
import Layout from '../components/Layout';

const Collage = () => (
  <Layout justify="center">
    <Router>
      <CollagePage path="/collage/:id" />
    </Router>
  </Layout>
);

export default Collage;
