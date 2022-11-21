import './App.css';
import BtnComponent from './components/BtnComponent.jsx';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      
      <BtnComponent onClick={function() {alert("you saved the kitten");}} content="save kitten"/>
      <ImgComponent />
    </div>
    
  );
}

export default App;
