import './global.css'
import {Header} from "./components/Header.js"
import {NewTask} from "./components/NewTask.js"
import styles from './App.module.css'


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </div>
  )
}

