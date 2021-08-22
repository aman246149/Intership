import "./App.css";
import Comparision from "./components/Comparision/Comparision";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" className="anchor">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fal fa-drafting-compass"
                    style={{ paddingRight: "10px" }}
                  ></i>
                  <h1>Comparision</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/pomodoro" className="anchor">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i className="far fa-clock" style={{ paddingRight: "10px" }}></i>

                  <h1>Pomodaro</h1>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Comparision />
          </Route>

          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
