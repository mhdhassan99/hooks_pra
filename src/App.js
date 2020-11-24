import todoList from './components/todoList'
import todoItem from './components/todoItem'
import todoForm from './components/todoForm'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  // console.log('hi')
  return (
    
    <div className="App m-5">
        <todoForm />
        <todoList />
    </div>
  );
}

export default App;
