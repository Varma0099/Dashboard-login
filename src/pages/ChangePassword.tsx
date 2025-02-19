import React, { Component } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

interface ChangePasswordState {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  showPasswords: {
    current: boolean;
    new: boolean;
    confirm: boolean;
  };
  isLoading: boolean;
  errors: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
}

interface ChangePasswordProps {
  navigate: NavigateFunction;
}

class ChangePassword extends Component<ChangePasswordProps, ChangePasswordState> {
  state: ChangePasswordState = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showPasswords: {
      current: false,
      new: false,
      confirm: false,
    },
    isLoading: false,
    errors: {},
  };

  togglePasswordVisibility = (field: keyof typeof this.state.showPasswords) => {
    this.setState(prevState => ({
      showPasswords: {
        ...prevState.showPasswords,
        [field]: !prevState.showPasswords[field],
      },
    }));
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const errors: { currentPassword?: string; newPassword?: string; confirmPassword?: string } = {};
    
    if (!this.state.currentPassword) {
      errors.currentPassword = 'Current password is required';
    }

    if (!this.state.newPassword) {
      errors.newPassword = 'New password is required';
    } else if (this.state.newPassword.length < 8) {
      errors.newPassword = 'New password must be at least 8 characters';
    }

    if (!this.state.confirmPassword) {
      errors.confirmPassword = 'Please confirm your new password';
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors, isLoading: false });
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.props.navigate('/');
  };

  render() {
    const { currentPassword, newPassword, confirmPassword, showPasswords, isLoading, errors } = this.state;

    return (
      <AuthLayout
        title="Change Password"
        subtitle="Please set a new password for your account"
      >
        <form onSubmit={this.handleSubmit} className="space-y-6">
          {/* Current Password Field */}
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPasswords.current ? 'text' : 'password'}
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => this.setState({ currentPassword: e.target.value })}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.currentPassword ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter current password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => this.togglePasswordVisibility('current')}
              >
                {showPasswords.current ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password Field */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPasswords.new ? 'text' : 'password'}
                id="newPassword"
                value={newPassword}
                onChange={(e) => this.setState({ newPassword: e.target.value })}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.newPassword ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => this.togglePasswordVisibility('new')}
              >
                {showPasswords.new ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => this.togglePasswordVisibility('confirm')}
              >
                {showPasswords.confirm ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </AuthLayout>
    );
  }
}

export default ChangePassword;