import React, { Component } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

interface LoginState {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  errors: {
    email?: string;
    password?: string;
  };
}

interface LoginProps {
  navigate: NavigateFunction;
}

class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    email: '',
    password: '',
    showPassword: false,
    isLoading: false,
    errors: {},
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const errors: { email?: string; password?: string } = {};
    if (!this.state.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!this.state.password) {
      errors.password = 'Password is required';
    } else if (this.state.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
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
    const { email, password, showPassword, isLoading, errors } = this.state;

    return (
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in to your account"
      >
        <form onSubmit={this.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => this.setState({ showPassword: !showPassword })}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Need help?</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Contact your administrator or{' '}
            <a href="mailto:support@exampro.com" className="font-medium text-blue-600 hover:text-blue-500">
              support team
            </a>
          </p>
        </div>
      </AuthLayout>
    );
  }
}

export default Login;