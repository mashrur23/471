
          import React, { useState, useEffect } from 'react';
          import { useNavigate } from 'react-router-dom';
          
          const ProfileDashboard = () => {
            const [user, setUser] = useState(null);
            const [error, setError] = useState('');
            const navigate = useNavigate();
          
            useEffect(() => {
              const storedUser = localStorage.getItem('user');
              if (storedUser) {
                setUser(JSON.parse(storedUser));
              } else {
                setError('User not found');
              }
            }, []);
          
            const handleLogout = () => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/login');
            };
          
            return (
              <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
                {error && <p className="text-red-500 text-center">{error}</p>}
                {user ? (
                  <div className="text-center">
                    {/* Profile Picture */}
                    <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={user.avatar || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
          
                    {/* User Name */}
                    <h1 className="mt-4 text-2xl font-semibold">{user.name || 'User Name'}</h1>
          
                    {/* User Email */}
                    <p className="mt-2 text-gray-600">{user.email}</p>
          
                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <p className="text-xl font-bold text-center">Loading...</p>
                )}
              </div>
            );
          };
          
          export default ProfileDashboard;
          
