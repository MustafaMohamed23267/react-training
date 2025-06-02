import { useState } from "react"

function Tasks()
{
    let [task , setTask]=useState(["go to work","study"]);
    let [newtask , setNewtask] = useState();

     function handleInput(event)
    {
        setNewtask(event.target.value)
    }
    function addNewTasks()
    {
        if(newtask.trim !==""){
        setTask(t=>[...t,newtask]);
        setNewtask("");}
    }
    function DeleteTask(index)
    {
        setTask(task.filter((_,i)=> i!==index))
    }

    function moveUp(index)
    {
        if(index>0)
       { let updatMoveUp=[...task];
        [updatMoveUp[index],updatMoveUp[index-1]]=
        [updatMoveUp[index-1],updatMoveUp[index]];
        setTask(updatMoveUp);

      }
    }

    function moveDown(index)
    {
        if(index<task.length - 1)
       { let updateMoveDown = [...task];
        [updateMoveDown[index],updateMoveDown[index + 1]]=
        [updateMoveDown[index + 1],updateMoveDown[index]];
        setTask(updateMoveDown);
       }
        
    }

    return(<>
    <div className="Tasks">
        <h1>Tasks</h1>
        <input type="text" value={newtask} onChange={handleInput} className="inputTask" placeholder="Enter task....."/>
        <button type="button" onClick={addNewTasks} className="addTask">Add</button>
        <ol className="tasksol">
          {task.map((dotask,index)=><li className="li" key={index}>
            <span className="text">{dotask}</span>
                  <button type="button" className="deleteTask" onClick={()=>DeleteTask(index)}>Delete</button>
                  <button type="button" className="move" onClick={()=>moveUp(index)}>👆</button>
                  <button type="button" className="move" onClick={()=>moveDown(index)}>👇</button>
            </li>)} 
         </ol>
    </div>
    </>)

}

export default Tasks