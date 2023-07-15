import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styled from 'styled-components'

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {timestamp: Date.now().toString(),
        title,
        completed: false,
      });
      setTitle("");
      console.log(collection(db, "todos"))
    }
  };
  return (
    <><form onSubmit={handleSubmit}>
        <input
          id="new-todo"
          type="text"
          placeholder="Type challenge here...🖊️"
          value={title}
          className="form-control mb-2 mr-sm-2"
          onChange={(e) => setTitle(e.target.value)} />
        <AddTodoButtonStyled className="btn btn-primary mb-2" >Add new challenge</AddTodoButtonStyled>
    </form></>
  );
}

const AddTodoButtonStyled = styled.button`
right:0;
margin-bottom:17px !important;
`


