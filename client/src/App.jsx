import Canvas from './Canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'
import './App.css'

function App() {

  return (
    <main className='app transition-all ease-int'>
      <Home />
      <Customizer />
      <Canvas />
    </main>
  )
}

export default App
