import Task from "./Task";
const Tasks = ({ data, onDelete }) => {
  return (
    <>
      {data.map((task) => (
        <Task key={task.NO_ID_FIELD} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
