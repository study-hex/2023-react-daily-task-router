/* eslint-disable react/prop-types */
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import './App.css';
import { useState } from 'react';

const Logout = ({ isLogin }) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    if (!isLogin) {
      navigate('/login');
    }
  };

  return <button type="button" onClick={handleLogout}>登出</button>;
};

const Todo = () => {
  const [isLogin] = useState(false);

  return (
    <>
      <h2>這是 Todo 頁面</h2>
      <Logout isLogin={isLogin} />
    </>
  );
};

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* end of nav */}

        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
