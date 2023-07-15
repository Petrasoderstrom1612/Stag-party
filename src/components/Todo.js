import React from "react";
import styled from 'styled-components'

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <EachTaskStyler>
        <Toggle
          onClick={() => toggleComplete(todo)}
        > 
         </Toggle> 
    <input key={todo.id}
        type="checkbox"
        id="checkbox"
        checked={todo.completed}
        className="strikethrough"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <label className="strikethrough" id="strikethrough">{todo.title}
            </label>
        <RemoveButtonStyled type="button" className="btn btn-warning" onClick={() => handleDelete(todo.id)}>Remove</RemoveButtonStyled> 
    </EachTaskStyler>
  );
}



const EachTaskStyler = styled.div`
margin-bottom: 6%;
padding:5px;
@media (min-width: 667px) {
margin-bottom: 5%;
}

@media (min-width: 1024px) {
margin-bottom: 2.5%;
}
`

const Toggle = styled.button`
position: absolute;
  opacity:0;
  left:0;
  width: 30px;
  height: 30px;
  /* margin-left: -20px; */
  z-index: 2;
`
const RemoveButtonStyled = styled.button`
  position: absolute;
  right:0.5vw;
`


