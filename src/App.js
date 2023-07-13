
import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import styled from 'styled-components/macro';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <OuterWrapper><center>
       <Headline>Honza&apos;s challenges💍</Headline></center>
        <AddTodo />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    </OuterWrapper>
  );
}
export default App;

const Headline = styled.h2`
padding:15px;
`

const OuterWrapper = styled.div`
position: relative;
  min-width: 96vw;
  width: 96%;
  min-height: 94vh;
  margin-left: 2%;
  margin-top: 3vh;

  @media (min-width: 667px) {
  min-width: 90vw;
  width: 90%;
  margin-left:5%;
}

@media (min-width: 1024px) {
  min-width: 80vw;
  width: 80%;
  margin-left:10%;
}
`
