import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoutes from './Components/AuthRoutes/PrivateRoutes'

const Routes = (props) => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path='/dashboard' exact component={Dashboard} />
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
