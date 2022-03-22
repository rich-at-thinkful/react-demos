import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Common/Header/Header";
import Homepage from './Home/Homepage';
import SettingsPage from './SettingsPage';
import ProfileIndex from './Users/ProfileIndex';
import Profile from './Users/Profile';

function App() {
  return (
    <Router>
      <div className="App container w-50">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/users">
            <ProfileIndex />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route>
            <div>Not Found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
