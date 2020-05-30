import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aside from "./Aside/Aside";
import Nav from "./Nav/Nav";
import data from "./data";
import Article from "./Features/Article/Article";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.mainWrapper}>
        <Router basename={process.env.PUBLIC_URL}>
          <Aside>
            <Nav />
          </Aside>
          <div className={styles.contentWrapper}>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Article content={data.liveMath} />}
              />
              <Route
                exact
                path="/1"
                component={() => <Article content={data.liveMath} />}
              />
              <Route
                exact
                path="/2"
                component={() => <Article content={data.openTask} />}
              />
              <Route
                exact
                path="/3"
                component={() => <Article content={data.closeTask} />}
              />
              <Route
                exact
                path="/4"
                component={() => <Article content={data.booleanTask} />}
              />
              <Route
                exact
                path="/5"
                component={() => <Article content={data.checkTask} />}
              />
              <Route
                exact
                path="/6"
                component={() => <Article content={data.mern} />}
              />
              <Route
                exact
                path="/7"
                component={() => <Article content={data.reduxAxios} />}
              />
              <Route
                exact
                path="/8"
                component={() => <Article content={data.authorization} />}
              />
              <Route
                exact
                path="/9"
                component={() => <Article content={data.security} />}
              />
              <Route
                exact
                path="/10"
                component={() => <Article content={data.rwd} />}
              />
              <Route
                exact
                path="/11"
                component={() => <Article content={data.emailVerification} />}
              />
              <Route
                exact
                path="/*"
                component={() => <Article content={data.liveMath} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
