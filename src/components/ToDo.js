import { useEffect, useState } from "react";
import List from "./List";
import TaskForm from "./TaskForm";
import axios from 'axios'

export default function ToDo() {
    const [tasksList, setTasksList] = useState([])

    useEffect(getTasks, [])

    function getTasks() {
        axios.get('http://localhost:5000/task')
            .then(result => {
                setTasksList(result.data)
            })
    }

    return <div className="toDo">
        <TaskForm refreshView={getTasks} />
        <List list={tasksList.filter(t => !t.done)} refreshView={getTasks} />
        <hr />
        <List list={tasksList.filter(t => t.done)} refreshView={getTasks} />
    </div>
}