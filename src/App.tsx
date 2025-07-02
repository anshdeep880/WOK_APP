
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import MenuManagement from "./pages/MenuManagement";
import POSBilling from "./pages/POSBilling";
import InventoryManagement from "./pages/InventoryManagement";
import StaffManagement from "./pages/StaffManagement";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import TablesManagement from "./pages/TablesManagement";
import TableMenu from "./pages/TableMenu";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerMenu from "./pages/CustomerMenu";
import CustomerCheckout from "./pages/CustomerCheckout";
import CustomerPayment from "./pages/CustomerPayment";
import OrderPreparing from "./pages/OrderPreparing";
import Notifications from "./pages/Notifications";
import Performance from "./pages/Performance";
import KitchenOrders from "./pages/KitchenOrders";
import Recipes from "./pages/Recipes";
import KitchenReports from "./pages/KitchenReports";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Index />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/manager" element={<AdminDashboard />} />
          <Route path="/dashboard/waiter" element={<AdminDashboard />} />
          <Route path="/dashboard/kitchen" element={<AdminDashboard />} />
          <Route path="/menu" element={<MenuManagement />} />
          <Route path="/pos" element={<POSBilling />} />
          <Route path="/pos-billing/:tableNumber" element={<POSBilling />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/staff" element={<StaffManagement />} />
          <Route path="/reports" element={<ReportsAnalytics />} />
          <Route path="/tables" element={<TablesManagement />} />
          <Route path="/table-menu/:tableNumber" element={<TableMenu />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/customer-menu/:tableNumber" element={<CustomerMenu />} />
          <Route path="/customer-checkout/:tableNumber" element={<CustomerCheckout />} />
          <Route path="/customer-payment/:tableNumber" element={<CustomerPayment />} />
          <Route path="/order-preparing/:tableNumber" element={<OrderPreparing />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/kitchen-orders" element={<KitchenOrders />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/kitchen-reports" element={<KitchenReports />} />
          <Route path="/home" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
