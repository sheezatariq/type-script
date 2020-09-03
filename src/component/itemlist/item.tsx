import React from 'react';
import './item.css';
// const [listItem, setListItem] = useState([]);



const Item = () => {

  const [item,setItem]=React.useState<string>("");
  const[list,setList]=React.useState<string[]>([]);

  const handleChange = (e: any) => {
    setItem(e.target.value);
  };

  const addObject = (e: any) => {
    setList([...list, item]);
    setItem('');
  };

  return(
    <div>
      <div className="center">
      <input type="text"
       className="input-style" value={item} onChange={handleChange} placeholder="Enter Text" />
      <button onClick={addObject}>Add</button>
      <ul>
      {list && list.map((itm, index) => (
        <>
        <div className="list-style">{itm}</div>
        </>
      ))}

      </ul>
     

      </div>
      
      
      
    </div>
  );
};

export default Item;