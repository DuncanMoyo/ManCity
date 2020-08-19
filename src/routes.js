import React from "react";
import Layout from "./Hoc/Layout";
import { Switch} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoutes from './Components/AuthRoutes/PrivateRoutes'
import PublicRoutes from './Components/AuthRoutes/PrivateRoutes'

const Routes = (props) => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path='/dashboard' exact component={Dashboard} />
        <PrivateRoutes {...props} path='/sign_in' restricted={true} exact component={SignIn} />
        <PublicRoutes {...props} path='/' restricted={false} exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
