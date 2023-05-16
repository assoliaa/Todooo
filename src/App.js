import react, { useSyncExternalStore } from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import AddTask from "./components/AddTask";
import './App.css';
import TodoList from "./components/TodoList";
import SingleFilter from "./components/SingleFilter";
import Footer from "./components/Footer";



function App() {
  const[AddWindow, setAddWindow] =useState(false);
  const[content, setContent] =useState('');
  const[ActiveStatus, setActiveStatus]=useState("To Do");
  
  const [Todos, setTodos] =useState([
    {
      id:uuidv4(), 
      status:"To Do",
      content:"Go to the gym",
      },
    {
      id:uuidv4(),
      status: "Done",
      content:"Read Book",
    },
    {
      id:uuidv4(),
      status: "Done",
      content:"Make myself happy",
    },
  ]);

  const changeContent =(e) =>{
    setContent(e.target.value)
    }
  
  
  const addTask =() =>{
    const newTodo ={
      status:"To Do",
      content:content,
      id: uuidv4(),
    }
    if(content){
      setTodos( Todos => [...Todos, newTodo]);
      setContent('');
    }
  }
  
  const filteredTodos =Todos.filter((item)=>item.status ===ActiveStatus);
  const filters =["To Do", "Done", "Trash"]
  return (
      <div className='main'>
      <div className="text">
        <p className='Title'>Simple To Do List</p>
        <p className='motto'>Today is awesome day. The weather is awesome, you are awesome too!</p>
      </div>
      <div className="buttons">
      <div className="filters">
        {filters.map((filter, index)=><SingleFilter setActiveStatus={setActiveStatus} filter={filter} key={index} ActiveStatus={ActiveStatus}/>)}
      </div>
      <button onClick={()=>setAddWindow(!AddWindow)}className='btnAdd'><img src = "PLus Math.png"/></button>
      </div>
      <p className="SmallTitle">{ActiveStatus}</p>
      <div className="divider"></div>
      <div className="List">
        <TodoList 
        filteredTodos={Todos.filter((item)=>item.status ===ActiveStatus)} 
        setTodos={setTodos} Todos={Todos}/>
      </div>
         {AddWindow&&<AddTask content={content} changeContent={changeContent} addTask={addTask}/>}
      <Footer/>
    </div>
  ); 
}

export default App;
