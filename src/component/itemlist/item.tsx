import React from 'react';
import RLDD from "react-list-drag-and-drop/lib/RLDD";
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
    <div className="field">
      <div className='input-field'>
        <input type="text"  value={item} onChange={handleChange} placeholder="Enter Text" />
        <button onClick={addObject}>Add</button>
      </div> 
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