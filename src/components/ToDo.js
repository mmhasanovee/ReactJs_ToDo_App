import SingleToDo from "./SingleToDo";

const ToDo = ({ todos, onDelete, onDoubleClick }) => {
  return (
    <>
      {todos.map((todo) => (
        <SingleToDo key={todo.id} todos ={todo} onDelete = {onDelete} onDoubleClick = {onDoubleClick} />
      ))}
    </>
  );
};

export default ToDo;
