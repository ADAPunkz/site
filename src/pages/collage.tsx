import { Router } from '@reach/router';

import Layout from '../components/Layout';
import CollagePage from '../views/CollagePage';

const Collage = () => (
  <Layout justify="center">
    <Router>
      <CollagePage path="/collage/:id" />
    </Router>
  </Layout>
);

export default Collage;
