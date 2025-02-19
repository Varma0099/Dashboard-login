export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'student' | 'instructor' | 'admin' | 'super_admin';
  gender: 'male' | 'female' | 'other';
  phoneNumber: string;
  location?: string;
  isFirstLogin: boolean;
  status: 'active' | 'inactive';
}

export interface PasswordChange {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RegisterUser {
  fullName: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  phoneNumber: string;
  role: 'student' | 'instructor' | 'admin';
  location?: string;
}