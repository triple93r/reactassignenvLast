import React from 'react';
import Datatable from './Datatable'; // Import the DataTable component

// Static data with correct type
const data: { id: number; name: string; age: number }[] = [
  { id: 1, name: 'Rashmi', age: 31 },
  { id: 2, name: 'Kunal', age: 27 },
  { id: 3, name: 'Mandeep', age: 39 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Data Table</h1>
      <Datatable data={data} /> {/* Pass data as props */}
    </div>
  );
};

export default App;



/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Running environment Key: {process.env.REACT_APP_API_KEY}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */