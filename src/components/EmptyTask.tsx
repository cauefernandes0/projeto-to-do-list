import styles from './EmptyTask.module.css'
import {ClipboardIcon} from '@phosphor-icons/react'


export function EmptyTask(){
    return(
        <div className={styles.maxWidth}>
            <div className={styles.emptyTask}>
                <ClipboardIcon className={styles.icon}/>
                <p className={styles.paragrafo}><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p className={styles.subparagrafo}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}