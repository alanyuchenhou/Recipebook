import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className = {`task`}
            >
            <h3>{task.text} 
            <FaTimes style = { {color: 'red', cusor: 'pointer'}}
            onClick = {()=>onDelete(task.NO_ID_FIELD)}
            /></h3>           
            <p>{task.day}</p>
        </div>
    )
}

export default Task
