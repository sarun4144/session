import logo from './logo.svg';
import './App.css';
import RestBasic from './rest-basic'
import FormPost from './form-post'
import FormGet from './form-get'
function App() {
  return (
    <div className="App">
      
     <RestBasic/>
     <FormGet/>
     <FormPost/>
     
    </div>
  );
}

export default App;
