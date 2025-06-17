import './global.css'
import {Header} from "./components/Header.js"
import {NewTask} from "./components/NewTask.js"


export function App() {

  return (
    <div>
      <Header/>
      <NewTask />
    </div>
  )
}

