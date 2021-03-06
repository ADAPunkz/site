import { Router } from '@reach/router';

import Layout from '../components/Layout';
import PunkzPage from '../components/PunkzPage';

const Punk = () => (
  <Layout justify="center">
    <Router>
      <PunkzPage path="/punk/:id" />
    </Router>
  </Layout>
);

export default Punk;
