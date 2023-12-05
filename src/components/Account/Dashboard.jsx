import React, { useLayoutEffect, useState } from "react";
import { useUser } from "../../services/api";
import { useToCustomerPortal } from "../../services/paymentsApi";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userMutation = useUser();
  const customerPortalMutation = useToCustomerPortal();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useLayoutEffect(() => {
    const data = userMutation.mutate(
      { token },
      {
        onSuccess: (data) => {
          setUser(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }, []);

  const returnUrl = import.meta.env.VITE_BASE_URL;
  const handleGoToBilling = () => {
    const data = customerPortalMutation.mutate(
      { returnUrl },
      {
        onSuccess: (data) => {},
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className="text-white">
      <h1 className="mx-8 mt-5 text-center uppercase border-b-large border-b-cyan-500">
        Welcome, {user.username}
      </h1>
      <div className="h-auto py-5 pt-0 mx-5 mt-3 rounded-lg shadow-lg max-w-screen bg-gradient-to-tr from-cyan-900 via-neutral-600 to-cyan-800 shadow-neutral-700">
        <h1 className="py-2 text-xl text-center rounded-t-lg shadow-lg bg-gradient-to-tr from-neutral-700 via-cyan-900 to-neutral-700 shadow-cyan-800">
          Your account details
        </h1>
        <div className="px-3 py-2 mx-3 mt-5 rounded-lg bg-gradient-to-tr from-cyan-700 via-neutral-500 to-can-700">
          <h1 className="text-xl font-bold text-neutral-800 ">
            AI images left
          </h1>
          <h1 className="text-slate-100">
            You can generate{" "}
            <span className="font-bold text-neutral-800">
              {user.subscriptionPlanId === 1
                ? Math.max(5 - user.aiImagesGeneratedThisMonth, 0)
                : user.subscriptionPlanId === 2
                ? Math.max(35 - user.aiImagesGeneratedThisMonth, 0)
                : 0}{" "}
            </span>
            images this month.
          </h1>
        </div>
        <div className="px-3 py-2 mx-3 mt-5 rounded-lg bg-gradient-to-tr from-cyan-700 via-neutral-500 to-can-700">
          <h1 className="text-xl font-bold text-neutral-800 ">
            Your current plan
          </h1>
          <h1 className="text-slate-100">
            You are currently using{" "}
            <span className="font-bold text-neutral-800">
              {user.subscriptionPlanId === 1
                ? "free"
                : user.subscriptionPlanId === 2
                ? "serious"
                : 0}{" "}
            </span>
            version of DreamVault.
          </h1>
          {user.subscriptionPlanId === 1 ? (
            <h1>
              Upgrade your plan to get exclusive benefits available only to
              premium users.
            </h1>
          ) : null}
        </div>
        {user.subscriptionPlanId === 1 ? (
          <h1
            className="py-2 mx-3 mt-3 text-center transition-all duration-500 ease-in-out rounded-lg shadow-lg cursor-pointer bg-neutral-700 shadow-neutral-800 hover:shadow-xl hover:shadow-neutral-800 hover:bg-neutral-600"
            onClick={() => navigate("/pricing")}
          >
            Upgrade to Serious
          </h1>
        ) : (
          <h1
            className="py-2 mx-3 mt-3 text-center transition-all duration-500 ease-in-out rounded-lg shadow-lg cursor-pointer bg-neutral-700 shadow-neutral-800 hover:shadow-xl hover:shadow-neutral-800 hover:bg-neutral-600"
            onClick={() => handleGoToBilling()}
          >
            Go to billing settings
          </h1>
        )}
      </div>
    </div>
  );
};
