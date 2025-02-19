import React, { Component } from 'react';
import { NavLink, NavigateFunction } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Users,
  GraduationCap,
  ClipboardList,
  Trophy,
  Mail,
  BarChart3,
  LogOut,
  UserPlus
} from 'lucide-react';

interface SidebarProps {
  navigate: NavigateFunction;
}

class Sidebar extends Component<SidebarProps> {
  menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Building2, label: 'Institutes', path: '/institutes' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: UserPlus, label: 'Register User', path: '/register' },
    { icon: GraduationCap, label: 'Questions', path: '/questions' },
    { icon: ClipboardList, label: 'Exams', path: '/exams' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Mail, label: 'Email', path: '/email' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
  ];

  handleLogout = () => {
    this.props.navigate('/login');
  };

  render() {
    return (
      <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-8">ExamPro Admin</h1>
          <nav>
            {this.menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <button 
          onClick={this.handleLogout}
          className="absolute bottom-4 left-4 flex items-center space-x-3 text-gray-300 hover:text-white"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    );
  }
}

export default Sidebar;