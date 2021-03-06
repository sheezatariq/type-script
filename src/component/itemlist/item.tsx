import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const Item = () => {
  
  const history = useHistory();

  const [item, setItem] = useState<string>("");
  const [list, setList] = useState([] as any);
  
  const handleChange = (e: any) => {
    setItem(e.target.value);
  };

  const addObject = () => {
    setList([...list, { id: list.length !== 0 ? (list.length - 1) + 1 : list.length, item }]);
    setItem('');
  };

  const logout = () => {
    history.push('/login')
  };

  const handleRldChange = (newItems : any) => {
    setList(newItems);
  }; 

  const handleRldDelete = (indx: number) => {
    let filtered = [...list]
    filtered = filtered.filter((vl,index)=>index!==indx)
    setList(filtered);
  };

  return (
    <div className="field">
      <div>
        <div className="input-field">
          <input type="text" value={item} onChange={handleChange} placeholder="Enter Text" />
          <button disabled={item.length<=0} onClick={addObject}>Add</button>
          <button onClick={logout}>LOGOUT</button>
        </div>
        <div className="lis">
          <RLDD
            items={list}
            itemRenderer={(item: any,index:number) => {
              return (
                <div className="list-style" onClick={()=>handleRldDelete(index)}
                >
                  {item?.item}
                  <img src="assests/delete.png" alt="" style={{ float: "right"}}/> 
                </div>
              );
            }}
            onChange={handleRldChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;