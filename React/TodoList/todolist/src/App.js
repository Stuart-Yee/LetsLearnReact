import './App.css';
import ItemForm from './components/form';
import Item from './components/item';
import React, {useState} from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (item) => {
    setTodoItems([...todoItems, item]);
  }

  const checker = (idx) => {
    console.log(`This item at index ${idx} is ${todoItems[idx].done}`)
    todoItems[idx].done = !todoItems[idx].done;
    setTodoItems([...todoItems]);
  }

  const removeItem = (toDelete) => {
    const rem = todoItems.filter(
      (item) => item.title !== toDelete
    )
    setTodoItems([...rem])
  }

  return (
    <div className="App">
      <ItemForm handler={addItem}/>
      {todoItems.map(
        (item, key) => {
          return <Item key={key} idx={key} item_state={item} delete={removeItem} checker={checker}/>
        }

      )}

    </div>
  );
}

export default App;
