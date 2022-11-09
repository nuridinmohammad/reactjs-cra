import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/";

import Layout from "../components/Layout";
import { About, Contact, Home } from "../pages";
import Detail from "../pages/views/Detail";
import NotFound from "../pages/views/NotFound";

export default function Router() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
      ;
    </>
  );
}
