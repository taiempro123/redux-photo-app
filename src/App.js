import React, { Suspense } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { WindMillLoading } from "react-loadingg";

// Lazy loading
const Photo = React.lazy(() => import("./features/Photo"));

function App() {


  return (
    <div className="photo-app">
      <Suspense fallback={<WindMillLoading />}>
        <Router>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
