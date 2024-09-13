
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TemperatureConverter} from './Components/TemperatureConverter/temperature_converter'
import './Components/TemperatureConverter/temperature_converter.css'
import './Components/TodoList/todolist.css'
import { TodoList } from './Components/TodoList/todolist'

function App() {

  return (
    <>
      <TemperatureConverter/>
      <TodoList/>
    </>
  )
}

export default App
