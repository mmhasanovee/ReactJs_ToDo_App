import Header from "./components/Header";
import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [showToDo, setShowToDo] = useState(false);
  const [todos, setTodo] = useState([
    {
      id: 1,
      name: "Wash your laundry",
      day: "Friday",
      remindMe: true,
    },
    { id: 2, name: "GO for walk", day: "Monday", remindMe: true },
    { id: 3, name: "GO for run", day: "Wednesday", remindMe: false },
    { id: 4, name: "GO for se", day: "Thursday", remindMe: true },
    { id: 5, name: "GO for swim", day: "Tuesday", remindMe: false },
  ]);

  //delete to do

  const deletToDo = (id) => {
    //console.log(id);
    //updating via usestate
    //taking the ids to delete, filtering them out from the array, then updating the state of the todo variable.
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  //add to do

  const addToDoList = (newToDoList) => {
    //console.log(newToDoList);
    const id = todos.length + 1;
    //console.log(currentListSize);
    const newToDo = { id, ...newToDoList };
    setTodo([...todos, newToDo]);
  };

  //toggle show add to-do
  const toggleToDo = (dd) => {
    setShowToDo(!showToDo);
  };

  const toggleTodoBackground = (id) => {
    console.log(id);
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, remindMe: !todo.remindMe } : todo
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header toggle={toggleToDo} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showToDo && <AddToDo onAddingTodo={addToDoList} />}

              {todos.length > 0 ? (
                <ToDo
                  todos={todos}
                  onDelete={deletToDo}
                  onDoubleClick={toggleTodoBackground}
                />
              ) : (
                "No list to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
