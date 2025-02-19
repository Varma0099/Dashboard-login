import React, { Component } from 'react';
import { Users, GraduationCap, Building2, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class DashboardStats extends Component {
  stats = [
    {
      title: 'Total Users',
      value: '2,345',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Exams',
      value: '42',
      change: '+8%',
      icon: GraduationCap,
      color: 'bg-green-500',
    },
    {
      title: 'Institutes',
      value: '18',
      change: '+5%',
      icon: Building2,
      color: 'bg-purple-500',
    },
    {
      title: 'Avg. Completion',
      value: '85%',
      change: '+3%',
      icon: Clock,
      color: 'bg-orange-500',
    },
  ];

  chartData = [
    { name: 'Jan', students: 400, exams: 240 },
    { name: 'Feb', students: 300, exams: 139 },
    { name: 'Mar', students: 200, exams: 980 },
    { name: 'Apr', students: 278, exams: 390 },
    { name: 'May', students: 189, exams: 480 },
    { name: 'Jun', students: 239, exams: 380 },
  ];

  render() {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {this.stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-sm p-6 flex items-start justify-between"
            >
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                <p className="text-green-600 text-sm mt-1">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={this.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" name="Students" />
                <Bar dataKey="exams" fill="#10b981" name="Exams" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardStats;