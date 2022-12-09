// Import data
import Searchbar from './Searchbar.js';
import Directory from './Directory';
import Gallery from './Gallery.js'
import Posting from './Posting.js';
import Sidebar from './Sidebar.js';
import Help from './Help.js';

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div classname="App">
        <Gallery/>
        <Directory/>
        <Searchbar/>
        <Posting/>
        <Sidebar/>
        <Help/>
      </div>
    </div>
  );
}

export default App;
