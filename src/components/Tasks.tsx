import { CheckCircleIcon, CircleIcon, TrashIcon } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

interface TasksProps{
    id:string,
    content: string;
    isChecked: boolean
    onDeleteTask: (id: string) => void
    onToggleTask: (id: string) => void;
}





export function Tasks({id,content, onDeleteTask,onToggleTask,isChecked}:TasksProps){
     function handleCheckTask() {
        onToggleTask(id)
  }

    function handleDeleteTask(){
        onDeleteTask(id)
    }
    

    return(
        <div className={styles.maxWidth}>
            <div className={`${styles.tasks} ${isChecked ? styles.done : ''}`}>
                <button 
                 className={styles.checkButton}
                 onClick={handleCheckTask}
                 >
                    {isChecked ? (
                        <CheckCircleIcon size={24} weight="fill" color="#8284FA" />
                    ) : (
                        <CircleIcon size={24} color="#4EA8DE" />
                    )
                    }
                </button>
                <p>{content}</p>
                <button
                 onClick={handleDeleteTask} 
                 className={styles.trashButton}
                 title='Deletar tarefa' 
                >
                    <TrashIcon
                    className={styles.ic} 
                    size={24} 
                    />
                </button>
            </div>
        </div>
    )
}