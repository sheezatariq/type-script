import * as React from "react";
import VerticalExample from "./VerticalExample";
import "./Fruits.css";

 class FruitList extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <h1>react-list-drag-and-drop</h1>
        <div className="examples">
          <VerticalExample />
        </div>
      </div>
    );
  }
}
export default FruitList;
