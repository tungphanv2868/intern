import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ForgotPassword from "./components/loginPage/ForgotPassword";
import NewPassword from "./components/loginPage/NewPassword";
import Login from "./components/loginPage/Login";
import userManagement from "./components/user/userManagement";
import DemoAnt from "./components/demo/DemoAnt";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/newpassword" component={NewPassword} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userManagement" component={userManagement} />
        <Route exact path="/demoant" component={DemoAnt} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
