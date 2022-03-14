import axios from "axios"

export default function ListItem(props) {

    function deleteTask() {
        axios.delete(`http://localhost:5000/task/${props._id}`)
            .then(() => {
                props.refreshView()
            })
    }

    function updateTask(e) {
        const newDone = e.target.checked

        axios.put(`http://localhost:5000/task/${props._id}`, { done: newDone })
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