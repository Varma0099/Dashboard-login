import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="ml-64">
                  <Header />
                  <main className="p-6 mt-16">
                    <Routes>
                      <Route path="/" element={<DashboardStats />} />
                      <Route path="/register" element={<RegisterUser />} />
                      <Route path="/institutes" element={<div>Institutes Page (Coming Soon)</div>} />
                      <Route path="/users" element={<div>Users Page (Coming Soon)</div>} />
                      <Route path="/questions" element={<div>Questions Page (Coming Soon)</div>} />
                      <Route path="/exams" element={<div>Exams Page (Coming Soon)</div>} />
                      <Route path="/leaderboard" element={<div>Leaderboard Page (Coming Soon)</div>} />
                      <Route path="/email" element={<div>Email Page (Coming Soon)</div>} />
                      <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;