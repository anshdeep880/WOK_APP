import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const MenuManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample menu items data
  const menuItems = [
    {
      id: 1,
      name: "Chicken Tikka Masala",
      category: "Main Course",
      price: 18.99,
      status: "Available",
      description: "Tender chicken in creamy tomato sauce"
    },
    {
      id: 2,
      name: "Vegetable Biryani",
      category: "Rice",
      price: 15.99,
      status: "Available",
      description: "Fragrant basmati rice with mixed vegetables"
    },
    {
      id: 3,
      name: "Garlic Naan",
      category: "Bread",
      price: 4.99,
      status: "Available",
      description: "Fresh baked bread with garlic and herbs"
    },
    {
      id: 4,
      name: "Mango Lassi",
      category: "Beverages",
      price: 5.99,
      status: "Out of Stock",
      description: "Refreshing yogurt drink with mango"
    }
  ];

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu Management</h1>
          <p className="text-gray-600">Manage your restaurant menu items, prices, and availability</p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Item
          </Button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </div>
                  <Badge 
                    variant={item.status === 'Available' ? 'default' : 'destructive'}
                    className={item.status === 'Available' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No menu items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuManagement;