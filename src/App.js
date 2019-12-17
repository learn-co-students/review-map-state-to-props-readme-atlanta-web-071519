import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// executed with each change to the store's state
// the key returned (items) is the name of the prop used in __App__
// ** separation of concerns ---> both the view and its state management system are properly separated, and only connected by the 'connect()' function
const mapStateToProps = (state) => {
  // debugger;
  return { items: state.items }
}

// whatever function passed to the 'connect()' will be called each time the state changes, and the first argument of that function will be the state of the store
export default connect(mapStateToProps)(App);

// could be written ... export default connect( state => ({ items: state.items }) )(App);
