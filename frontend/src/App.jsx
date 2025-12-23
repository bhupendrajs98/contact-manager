import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Contacts from "./pages/Contacts";
import Favourite from "./pages/Favourite";

import ContactProvider from "./context/ContactContext";
import Setting from "./pages/Setting";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ContactProvider>
      <BrowserRouter>
        <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} />

        <div className={`pt-20 transition-all ${isOpen ? "pl-64" : "pl-20"}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />

            <Route path="/contacts" element={<Contacts />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/settings" element={<Setting/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ContactProvider>
  );
}
