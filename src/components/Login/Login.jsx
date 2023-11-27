import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400" >
      <div className="flex flex-col items-center gap-4">
        {isAuthenticated && <p>Welcome back! {user.family_name}</p>}
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        ) : (
          <>
            <h1 className="text-center">Title: Learnathon 2.0</h1>
            <p className="text-center">Subtitle: Ali Hoosain Nayan</p>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
