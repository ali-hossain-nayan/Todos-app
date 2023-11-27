import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className='bg-gradient-to-br from-purple-400 to-indigo-500 min-h-screen py-8'>

        <div className="container mx-auto px-4 pt-10">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-6">
            <img
                className="rounded-full h-20 w-20"
                src={user.picture}
                alt='picture'
              />
             
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                Given Name: {user.given_name  || 'N/A'}
              </p>
              <p className="text-gray-600">
                Family Name: {user.family_name || 'N/A'}
              </p>
              <p className="text-gray-600">
                Nickname: {user.family_name || 'N/A'}
              </p>
              <p className="text-gray-600">
                Locale: {user.locale || 'N/A'}
              </p>
              <p className="text-gray-600">
                Updated At: {user.updated_at || 'N/A'}
              </p>
              <p className="text-gray-600">
                Email: {user.email || 'N/A'}
              </p>
              <p className="text-gray-600">
                Email Verified: {user.email_verified ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
