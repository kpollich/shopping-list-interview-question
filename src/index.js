import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
 Using the starting point below, create a basic shopping cart component with React. A user should be able to:
	- View a list of the items in their shopping cart
	- Add new items to the shopping cart via a text input + submit button

  You don't need to do anything with styling, etc. Just focus on functionality and React logic.
*/

class App extends Component {
  state = {
    items: ["Apples", "Granola Bars", "Ground Turkey"]
  };

  render() {
    return (
      <>
        <h1>Shopping List</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <form>
          <div>
            <label htmlFor="newItem">Add an item</label>
          </div>
          <input type="text" name="newItem" />
          <input type="submit" value="Add" />
        </form>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
