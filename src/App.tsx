import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./components/dashboard/Overview";
import Workflows from "./components/dashboard/sidebar/Workflows";
import Automation from "./components/dashboard/sidebar/Automation";
import Analytics from "./components/dashboard/sidebar/Analytics";
import Settings from "./components/dashboard/sidebar/Settings";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="automation" element={<Automation />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes >
  );
}