import logo from './logo.svg';
import './App.css';
import {InputGroup,Form,Button,Table, Container} from "react-bootstrap";
import { useEffect, useState } from 'react';
function App() {
  const [Todolist , setTodo] = useState([]);
  const [Title , setTitle] = useState("");
  const deleteTodo = (deleteindex) => 
  {
    setTodo(Todolist.filter((singleTodo,index)=>index != deleteindex));
  }
  const saveTodo = ()=>{
    if(Title=="")
    {
      alert("Please Enter ToDo Title");
    }
    else
    {
      setTodo([...Todolist,Title]);
      setTitle("")
    }

  }

  return (
    <div>
      <Container>
          <h1>To Do App</h1>
            <InputGroup className="mb-3">
            <Form.Control
              placeholder="Todo Title"
              value={Title}
              onChange={(e)=>setTitle(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={saveTodo}>
              Save
            </Button>
          </InputGroup>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Todolist.map((singleTodo , index ) => (
                <tr>
                <td>{index +1}</td>
                <td>{singleTodo}</td>
                <td> 
                <Button variant="primary" size ="sm" className="ms-2">Edit</Button>
                <Button variant="danger" size ="sm" className="ms-2" onClick={() => deleteTodo(index)}>Delete</Button>
                </td>
              </tr>

              ))
              }
              
            
            </tbody>
         </Table>
  </Container>
  </div>
  );
}

export default App;
