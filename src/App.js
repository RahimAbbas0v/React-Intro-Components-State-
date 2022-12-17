
import './App.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([])
  const [name, setName] = useState("")
  const [last, setLast] = useState("")
  const [age, setAge] = useState([])
  const handlechange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handlechange2 = (e) => {
    e.preventDefault()
    setLast(e.target.value)
  }
  const handlechange3 = (e) => {
    e.preventDefault()
    setAge(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    if (name && last && age) {
      const newtodo = {
        id:uuidv4().substring(0,4),
        name: name,
        lastname: last,
        age: age
      }
      const uptadeTodo = [...todos, newtodo]
      setTodos(uptadeTodo)
    } else {
      alert("Enter All Inputs")
    }
    setName("")
    setLast("")
    setAge("")
  }
  return (
    <div className="App">
      <form onSubmit={e => handlesubmit(e)}>
        <label>Name : </label>
        <input placeholder="Your Name" value={name} onChange={handlechange} />  
        <label>LastName : </label>
        <input placeholder="Your Lastname" value={last} onChange={handlechange2} />
        <label>Age : </label>
        <input type="number" value={age} onChange={handlechange3} />
        <input type="submit" id='button' style={{pointer:"cursor"}} value="Add To List" /></form>
      <table class="table">
        <thead>
          <tr class="tr" >
          <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        {
          todos.map((element) => {
            return (
              <tbody>
                <tr class='tr2'>
                <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.lastname}</td>
                  <td>{element.age}</td>
                </tr></tbody>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;