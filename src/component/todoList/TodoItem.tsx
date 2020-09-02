import React,{useState} from 'react';

const todoItem = () => {
  
  const [items, setItems] = useState([]);

  const [currentState, setCurrentState] = useState({
    text: '',
    key: ''
  });

  const handleInput = (e:HTMLInputElement )=> {
    setCurrentState({...currentState, [(e.target as Element).name]: e.target.value})

  }

  return(
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input type="text" placeholder="Enter Text"
            value={currentState.text}
            onChange={(e:HTMLInputElement):void=>handleInput(e)}
          />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
};

export default todoItem;