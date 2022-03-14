import axios from "axios"

export default function TaskForm(props) {

    function handleSubmit(e) {
        e.preventDefault()
        const
            form = e.target,
            values = getAllValues(form)

        axios.post('http://localhost:5000/task', values)
            .then(() => {
                props.refreshView()
                form.reset()
            })
    }

    function getAllValues(form) {
        return Object.values(form)
            .reduce((acc, curr) => {
                let { value, name } = curr
                return name ? { ...acc, [name]: value } : acc
            }, {})
    }

    return <form onSubmit={handleSubmit}>
        <input name='text' type='text' placeholder='Add a task here..' />
        <input type='submit' value='+' />
    </form>
}