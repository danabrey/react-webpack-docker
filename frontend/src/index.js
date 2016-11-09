import React from "react";
import ReactDOM from "react-dom";
import style from "./styles/base.scss";
import Subtitle from "./components/Subtitle";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Title of it all</h1>
                <Subtitle examplePropValue="Here's an example prop value (it's a prop of the Subtitle component, but passed in from index.js" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));