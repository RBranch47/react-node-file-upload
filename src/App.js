// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>React File Upload Demo</h2>
//     </div>
//   );
// }
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilesUploadComponent from './components/files-upload-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
      </div>
    );
  }
}

export default App;