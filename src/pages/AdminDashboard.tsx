import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Package,
  Clock,
  ChefHat,
  Settings
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,345",
      icon: DollarSign,
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Orders Today",
      value: "156",
      icon: ShoppingCart,
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Active Tables",
      value: "24/30",
      icon: Users,
      change: "80%",
      changeType: "neutral"
    },
    {
      title: "Revenue",
      value: "$8,432",
      icon: TrendingUp,
      change: "+15%",
      changeType: "positive"
    }
  ];

  const quickActions = [
    { title: "Menu Management", icon: ChefHat, path: "/menu" },
    { title: "POS Billing", icon: ShoppingCart, path: "/pos" },
    { title: "Inventory", icon: Package, path: "/inventory" },
    { title: "Staff Management", icon: Users, path: "/staff" },
    { title: "Reports", icon: TrendingUp, path: "/reports" },
    { title: "Settings", icon: Settings, path: "/settings" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at your restaurant today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center space-y-2"
                  onClick={() => window.location.href = action.path}
                >
                  <action.icon className="h-6 w-6" />
                  <span className="text-xs text-center">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((order) => (
                  <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Order #{1000 + order}</p>
                      <p className="text-sm text-gray-600">Table {order + 5}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(Math.random() * 100 + 20).toFixed(2)}</p>
                      <p className="text-sm text-gray-600">
                        <Clock className="inline h-3 w-3 mr-1" />
                        {Math.floor(Math.random() * 30 + 5)} min ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
              <CardDescription>Key metrics for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Orders Completed</span>
                  <span className="font-medium">142</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Order Value</span>
                  <span className="font-medium">$28.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Peak Hour</span>
                  <span className="font-medium">7:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-medium">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Staff on Duty</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;