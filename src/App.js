import './App.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import Navbar from './components/Navbar/Navbar';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <Navbar />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
