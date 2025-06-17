import styles from './HeaderTasks.module.css'

interface HeaderTasksProps{
    quantity: number
    checkCount: number
}


export function HeaderTasks({quantity, checkCount}:HeaderTasksProps){

    return(
        <article>
            <div className={styles.maxWidth}>
                <div className={styles.title}>
                    <p className={styles.criadas}>Tarefas Criadas <span>{quantity}</span></p>
                    <p className={styles.concluidas}>Concluídas <span>{quantity > 0  ? `${checkCount}  de ${quantity}`: `${quantity}`} </span></p>
                </div>
            </div>
            <div>
                
            </div>
        </article>
    )
}