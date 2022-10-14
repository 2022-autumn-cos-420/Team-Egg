import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component { 

    //Constructor calls the constructor of the Component, then sets the "state" to a default apiReponse so that the property exists
    //The "state" is internally controlled by the component in comparison to the "prop" that's externally controlled
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    //Attempts to talk to api server, on server version this needs to contact "www.terratoast.net", not localhost.
    callAPI() {
        fetch("http://localhost:7080/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    //Changed from "componentWillMount", previous method is getting depreciated and warns us in the browser console.
    //componentDidMount gets called before render(), in this case it's getting called twice because of the <React.StrictMode> in index.js
    componentDidMount() {
        this.callAPI();
    }

    //Renders app
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"> BlackBear Square </h1>
                </header>
                <p className="App-intro">{this.state.apiResponse }</p>
            </div>
        );
    }
}

export default App;
