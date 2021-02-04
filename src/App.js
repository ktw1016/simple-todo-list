import { useState } from "react";
import _ from "lodash";
import "./App.css";


const App = () => {
  const [todoList, setTodoList] = useState([{key: "defaultItem", value: "An example of TODO item!"}]);
  const [newTodoItemText, setTodoItemText] = useState("");

  return (
    <div className="app">
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{padding: "50px 0px 50px"}}>
          <input type="text" value={newTodoItemText} onChange={(evt) => setTodoItemText(evt.target.value)} placeholder="Call mom at 12" />
          <button onClick={() => setTodoList([
            ...todoList,
            {
              key: `${newTodoItemText}${todoList.length}`,
              value: newTodoItemText,
            }
          ])}>
            Add!
          </button>
        </div>
        <div>
          {todoList.map(({ value, key }) =>
            <div key={key} className="todo-item">
              {value}
              <button
                id={key}
                style={{ marginLeft: 10 }}
                onClick={(evt) => setTodoList(
                  _.reject(todoList, ({key}) => evt.target.id === key)
                )}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
