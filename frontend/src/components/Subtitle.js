import React from "react";
import style from "../styles/subtitle.scss";

class Subtitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleStateValue: "Here's a value set in the initial state of the Subtitle component"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.exampleStateValue}</h2>
                <h3>{this.props.examplePropValue}</h3>
            </div>
        );
    }

}

export default Subtitle;