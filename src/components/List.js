import ListItem from "./ListItem";

export default function List(props) {
    const list = props.list //array
    return <ul>
        {list.map(t =>
            <ListItem
                key={t.id}
                refreshView={props.refreshView}
                {...t}
            />
        )}
    </ul>
}