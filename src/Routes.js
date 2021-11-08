import {AnimatePresence} from "framer-motion";
import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import Bookmark from "./pages/bookmark/Bookmark";
import Category from "./pages/category/Category";
import Doa from "./pages/doa/Doa";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";


export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/feed" exact>
          <Feedback />
        </Route>
        {/* <Route path="/bookmark" exact>
          <Bookmark />
        </Route> */}
        <Route path="/category/:id" exact>
          <Category />
        </Route>
        <Route path="/doa/:id" exact>
          <Doa />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
