import React from 'react';
import { useHistory } from 'react-router-dom';
import './item.css';

const Item = () => {
  const history = useHistory()

  const [item, setItem] = React.useState<string>("");
  const [list, setList] = React.useState<string[]>([]);

  const handleChange = (e: any) => {
    setItem(e.target.value);
  };

  const addObject = (e: any) => {
    setList([...list, item]);
    setItem('');
  };

  const logout = () => {
    history.push('/login')
  };
  
  return (
    <div className="field">
      <div className='input-field'>
        <input type="text"  value={item} onChange={handleChange} placeholder="Enter Text" />
        <button disabled={item.length<=0} onClick={addObject}>Add</button>
        <button onClick={logout}>LOGOUT</button>
        <div className="lis">
          {list && list.map((itm, index) => (
            <div className="list-style">
              {itm}
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Item;