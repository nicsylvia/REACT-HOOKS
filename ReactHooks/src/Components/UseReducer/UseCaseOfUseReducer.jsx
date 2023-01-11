import { useReducer } from "react";
import { tasksReducer } from "./useCase(TODO)Functions";

function TaskApp() {

    const initialTasks = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: false }
      ];

    const [tasks, dispatch] = useReducer(
      tasksReducer,
      initialTasks
    );

    let nextId = 3;
  
  
    function handleAddTask(text) {
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }
  
    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task
      });
    }
  
    function handleDeleteTask(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId
      });
    }
  
    return (
      
        <center>
                <h1>Sylvia's itinerary</h1>
                <AddTask
                onAddTask={handleAddTask}
                />
                <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
                />
            
        </center>
    );
  }
  
  
  
export default TaskApp;