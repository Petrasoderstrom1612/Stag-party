import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from 'styled-components/macro'

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
      <center><Input
        style={{ textDecoration: todo.completed && "line-through" ,}}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="form-control mb-2 mr-sm-2"
        onChange={handleChange}
      /></center>
      <div>
        <center>
        <AddTodoButtonStyled className="btn btn-success"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </AddTodoButtonStyled>
        <button
          class="btn btn-warning"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
        </center>
      </div>
    </EachTaskStyler>
  );
}

const Input = styled.textarea`
border: none;
outline: none;
text-align:center !important;
padding-bottom:3px;
width:80%;
height: auto;
`

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

const AddTodoButtonStyled = styled.button`
right:0;
`


