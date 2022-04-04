import { RouteComponentProps } from '@reach/router';

type PrivateRouteProps = {
  component: any;
} & RouteComponentProps;

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  return <Component {...rest} />;
};

export default PrivateRoute;
