import { FaTimes } from "react-icons/fa";

const SingleToDo = ({ todos, onDelete, onDoubleClick }) => {
  return (
    <div
      className={`todoX ${todos.remindMe ? 'reminder': ''}`}
      onDoubleClick={() => onDoubleClick(todos.id)}
    >
      <h3>
        {todos.name}
        <FaTimes
          style={{ color: "purple" }}
          onClick={() => onDelete(todos.id)}
        />
      </h3>
      <p>{todos.day}</p>
    </div>
  );
};

export default SingleToDo;
