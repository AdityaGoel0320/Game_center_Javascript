import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Item from './components/Item';

function App() {
  let fnc = () => {
    let x = document.getElementById("id")
    let text = document.getElementById("btn")

    if (x.classList.contains("class")) {
      x.classList.remove("class");
      text.innerText = "Click to See close about seaction"

    }
    else {
      x.classList.add("class");
      text.innerText = "Click to See About this Project"

    }
  }
  return (
    <>


      <Intro />
      <Item />
      <button id='btn' className='div' onClick={fnc}>Click to See About this Project</button>
      <div id='id' className="class">
        <About />
      </div>



    </>
  );
}

export default App;
