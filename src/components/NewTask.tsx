import { PlusCircleIcon } from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { HeaderTasks } from './HeaderTasks'
import { EmptyTask } from './EmptyTask'
import { Tasks } from './Tasks'
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent, type KeyboardEvent } from 'react';

interface TasksType{
    id:string,
    content: string;
    isChecked: boolean;
}


export function NewTask(){
    const [tasks, setTasks] = useState<TasksType[]>([]);

    const [newTaskText,setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()


        const newTask: TasksType = {
            id: crypto.randomUUID(),
            content: newTaskText,
            isChecked: false
        }

        setTasks([...tasks,newTask])
        setNewTaskText('')
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>){
        if (event.key === 'Enter'){
                const value = (event.target as HTMLTextAreaElement).value.trim()

                if (value !== ''){
                    event.preventDefault()
                    handleCreateNewTask(event)
                }  
            }
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        const input = event.target.value
        const sanitized = input.replace(/^\s+|\s{2,}/g, ' ').trimStart() // impede múltiplos espaços seguidos e espaços no começo
        setNewTaskText(sanitized)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Campo obrigatório!")
    }

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne)
    }

    function toggleTaskChecked(id:string){
        const updatedTasks = tasks.map(task =>{
            if (task.id === id){
                return {...task,isChecked: !task.isChecked}
            }
            return task
        })

        setTasks(updatedTasks)
    }

    const isNewTaskEmpty = newTaskText.length === 0

    const completedTasksCount = tasks.filter(task =>task.isChecked != false).length

    return(
        <div>
            <header>
                <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                    <textarea
                      name='addTask'
                      placeholder='Adicione uma nova tarefa'
                      wrap="off"
                      value={newTaskText}
                      onChange={handleNewTaskChange}
                      onInvalid={handleNewTaskInvalid}
                      onKeyDown={handleKeyDown}
                      required
                    />
                    <button type="submit" disabled={isNewTaskEmpty}>
                        Criar <PlusCircleIcon size={20}/>
                    </button>
                </form>
            </header>
            <div>
                <HeaderTasks
                quantity={tasks.length}
                checkCount={completedTasksCount}
                
                />
            </div>
                {tasks.length === 0 ? (
        <EmptyTask />
      ) : (
        tasks.map(task => (
          <Tasks
                key={task.content}
                id={task.id}
                content={task.content}
                isChecked={task.isChecked}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTaskChecked}
           />
        ))
      )}
    </div>
  );
}
