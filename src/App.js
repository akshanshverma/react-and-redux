import React, { Component } from 'react';
import './App.css';
import Reduxtest from "./js/ReduxTest";
import { connect } from "react-redux";

class App extends Component {
  render() {
    //pass value in the child component and play with them :P
    return (
      <div className="App">
        <Reduxtest
          setName={this.props.setName}
          setAge = {this.props.setAge}
          name={this.props.name}
          age= {this.props.age}
        />
      </div>
    );
  }
}

//mapStateToProps is to get value which are define in state 
const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age

  };
};

//mapdispatchToProps is to change value with the help of action in thi state
const mapDispatchToProps = (dispatch) => {
  return {
    //function which change name
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    },
    //function which change age
    setAge: (age) => {
      dispatch({
        type: "SET_AGE",
        payload: age
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
