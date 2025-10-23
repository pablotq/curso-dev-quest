import Tasks from './components/Tasks'
import './App.css'
import Card from './components/Card'
import DashBoard from './components/Dashboard'

function App() {

  return (
    <>
    <DashBoard username="Pablotq"></DashBoard>
    <DashBoard></DashBoard>
      <Card>
        <Tasks></Tasks>
      </Card>
      <Card> </Card>
    </>
  )
}

export default App
