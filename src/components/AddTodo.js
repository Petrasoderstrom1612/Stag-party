import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styled from 'styled-components/macro'

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (<center>
    <Start><form onSubmit={handleSubmit}>
    <center><div className="input_container">
        <Input
          id="new-todo"
          type="text"
          placeholder="Type challenge here...🖊️"
          value={title}
          className="form-control mb-2 mr-sm-2"
          onChange={(e) => setTitle(e.target.value)} />
      </div></center>
      <div className="btn_container">
        <button class="btn btn-primary">Add new challenge</button>
      </div>
    </form></Start></center>
  );
}

const Input = styled.input`
height: 100px;

text-align:center;
@media (max-width: 667px) {max-width:80vw;}
@media (min-width: 1024px) {max-width:30vw;}
`

const Start = styled.div`
display:flex;
flex-direction: column;
padding-bottom:20px;
`
