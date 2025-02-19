import React, { Component } from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';

interface HeaderProps {
  navigate: NavigateFunction;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="h-16 bg-white border-b flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
        <div className="flex items-center w-96">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button 
            onClick={() => this.props.navigate('/change-password')}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;