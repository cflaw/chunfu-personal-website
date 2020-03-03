import React, {Component} from "react";
import "./css/app.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import Home from "./components/home";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito']
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Home></Home>
      </div>
    );
  }
}

export default App;
