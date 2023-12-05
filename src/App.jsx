import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DreamJournal from "./pages/DreamJournal";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import { Account } from "./pages/Account";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { NextUIProvider } from "@nextui-org/react";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { NewDreamForm } from "./pages/DreamJournal/NewDreamForm";
import { PaymentFailure } from "./pages/PaymentFailure";
import { CheckoutSerious } from "./components/Checkout/CheckoutSerious";
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

              {/* dream journal */}
              <Route path="/dream-journal" element={<DreamJournal />} />
              <Route
                path="/dream-journal/new-dream"
                element={<NewDreamForm />}
              />

              {/* subscription plans */}
              <Route path="/pricing" element={<SubscriptionPlans />} />
              {/* login and signup */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* account */}
              <Route path="/account" element={<Account />} />

              {/* payment success */}
              <Route path="/payment-success" element={<PaymentSuccess />} />

              {/* payment failure */}
              <Route path="/payment-failure" element={<PaymentFailure />} />

              {/* checkout */}
              <Route path="/checkout-serious" element={<CheckoutSerious />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
