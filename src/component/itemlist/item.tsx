import React from 'react';
import './item.css';



const Item = () => {

  const [item, setItem] = React.useState<string>("");
  const [list, setList] = React.useState<string[]>([]);

  const handleChange = (e: any) => {
    setItem(e.target.value);
  };

  const addObject = (e: any) => {
    setList([...list, item]);
    setItem('');
  };

  return (
    <div className="card">
      <input type="text"
        className="input-style" value={item} onChange={handleChange} placeholder="Enter Text" />
      <button className="bnt" onClick={addObject}>Add</button>
      <div className="lis">
        {list && list.map((itm, index) => (
          <div className="list-style">
            {itm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;