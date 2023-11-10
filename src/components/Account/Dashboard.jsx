import React, { useLayoutEffect, useState } from "react";
import { useUser } from "../../services/api";

export const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userMutation = useUser();
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

  return <div>Dashboard</div>;
};
