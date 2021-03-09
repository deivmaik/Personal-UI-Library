import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {

    const [toDos, setToDos] = useState([])

    const addToDo = toDo => {
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return
        }

        // This is so when a user type a empty space it doesnt get recorded

        const newToDos = [toDo, ...toDos]

        setToDos(newToDos)
    }

    return (
        <div>
           <h1> What's the plan for today?</h1>
           <ToDoForm onSubmit={addToDo}/>
        </div>
    )
}

export default ToDoList
