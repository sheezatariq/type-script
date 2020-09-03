import React from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";



interface Item {
  id: number;
  title: string;
  
}

interface State {
  items: Item[];
}

export default class VerticalExample extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    // this.state = { items: fruits.fruits };
  }

  render() {
    const items = this.state.items;
    return (
      <div className="example vertical">
        <RLDD
          cssClasses="list-container"
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />
      </div>
    );
  }

  private itemRenderer = (item: Item, index: number): JSX.Element => {
    return (
      <div className="item">
        <div className="details">
          <p className="title">{item.title}</p>
        </div>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  };

  private handleRLDDChange = (reorderedItems: Array<Item>) => {
    this.setState({ items: reorderedItems });
};
}