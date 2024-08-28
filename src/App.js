import Navbar from '../src/Components/Navbar/Navbar'
import './App.css';
import TopCategories from './Components/TopCategories/Categories';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TopCategories/>
    </div>
  );
}

export default App;
