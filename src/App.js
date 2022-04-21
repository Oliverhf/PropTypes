import './App.css';
import Component from './components/component'


function App() {
  return <Component name="Sally" renderable={["hi"]} element={<Component/>} />
}



export default App;
