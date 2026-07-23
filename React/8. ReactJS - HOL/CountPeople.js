import React, { Component } from "react";

class CountPeople extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entrycount: 0,
            exitcount: 0
        };
    }

    updateEntry = () => {

        this.setState({
            entrycount: this.state.entrycount + 1
        });

    };

    updateExit = () => {

        this.setState({
            exitcount: this.state.exitcount + 1
        });

    };

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "50px" }}>

                <h1>Mall Entry Counter</h1>

                <button onClick={this.updateEntry}>
                    Login
                </button>

                <h2>
                    People Entered :
                    {this.state.entrycount}
                </h2>

                <button onClick={this.updateExit}>
                    Exit
                </button>

                <h2>
                    People Left :
                    {this.state.exitcount}
                </h2>

            </div>

        );

    }

}

export default CountPeople;
