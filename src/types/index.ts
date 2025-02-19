export interface Institute {
  id: string;
  name: string;
  address: string;
  contact: string;
  contractStart: string;
  contractEnd: string;
  activeStudents: number;
  activeExams: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  instituteId: string;
  instituteName: string;
  status: 'active' | 'inactive';
}

export interface ExamStats {
  totalExams: number;
  activeExams: number;
  completedExams: number;
  upcomingExams: number;
}

export interface UserStats {
  totalUsers: number;
  students: number;
  instructors: number;
  admins: number;
}