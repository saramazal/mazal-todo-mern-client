import axios from "axios"

export default function ListItem(props) {

    function deleteTask() {
        axios.delete(`https://mazal-todo-mern-app.herokuapp.com/task/${props._id}`)
            .then(() => {
                props.refreshView()
            })
    }

    function updateTask(e) {
        const newDone = e.target.checked

        axios.put(`https://mazal-todo-mern-app.herokuapp.com/task/${props._id}`, {
            done: newDone
        })
            .then(() => {
                props.refreshView()
            })
    }

    return <li className={props.done ? 'done' : ''} >
        <label>{props.text}</label>
        <span>
            <input
                onChange={updateTask}
                type='checkbox'
                defaultChecked={props.done}
            />
            {props.done ? null : <button
                onClick={deleteTask}
                className='x'
            >X</button>}
        </span>
    </li>
}