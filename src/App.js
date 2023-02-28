import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotMatch from './routes/NotMatch';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout';

import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';
import TodosLogic from './components/TodosLogic';

const App = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <Navbar />
      <TodosLogic />
    </div>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </div>

);

export default App;
