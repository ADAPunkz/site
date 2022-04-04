import { Router } from '@reach/router';

import Layout from '../components/Layout';
import PunkzPage from '../views/PunkzPage';

const Punk = () => (
  <Layout justify="center">
    <Router>
      <PunkzPage path="/punk/:id" />
    </Router>
  </Layout>
);

export default Punk;
