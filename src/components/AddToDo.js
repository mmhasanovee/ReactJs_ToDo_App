import { useState } from "react";

const AddToDo = ({onAddingTodo}) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [remindMe, setRemindme] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !day){
        alert('You have to fill up first two fields');
        return;
    }
    onAddingTodo({name, day, remindMe});
    
    setName('');
    setDay('');
    setRemindme(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>ToDo</label>
        <input
          type="text"
          placeholder="Add Todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set RemindMe</label>
        <input
          type="checkbox"
          checked={remindMe}
          value={remindMe}
          onChange={(e) => setRemindme(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save ToDo" className="btn btn-block" />
    </form>
  );
};

export default AddToDo;
