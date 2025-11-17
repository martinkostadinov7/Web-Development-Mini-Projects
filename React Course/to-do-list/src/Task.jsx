import './Task.css'

function Task(props) {
    return(
        <>
        <div className="task-box">
            <p className="title">{props.title}</p>
            <p className="title">{props.dueDate}</p>
            <div className='buttons'>
                <button id="delete" onClick={() => props.onDelete(props.id)}>Delete</button>
                <button className="move" onClick={() => props.onMoveUp(props.index)}>Up</button>
                <button className="move" onClick={() => props.onMoveDown(props.index)}>Down</button>
            </div>
        </div>
        </>
    )
}

export default Task