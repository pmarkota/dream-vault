import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DreamJournal from "./pages/DreamJournal";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import { Login } from "./components/Login/Login";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <NextUIProvider>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dream-journal" element={<DreamJournal />} />
              <Route path="/pricing" element={<SubscriptionPlans />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
