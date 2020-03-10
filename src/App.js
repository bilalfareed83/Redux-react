import React from 'react';
import './App.css';
import { connect } from 'react-redux'


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is App Component, My name is {props.name}</h1>
        <button onClick={()=>{props.changeName("Sajjad")}}>Chnage Name</button>
      </header>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch({ type: 'CHANGE_NAME', payload: name })}
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
