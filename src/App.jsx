import { Navigate, Route, Routes } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

import AdminPage from "./pages/adminPage/AdminPage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminLayout> <AdminPage /> </AdminLayout>} />
      <Route path="/user" element={<UserLayout> <UserPage /> </UserLayout>} />
    </Routes>
  );
}

export default App;