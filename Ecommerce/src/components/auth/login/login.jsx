import { useState } from 'react';
import { useLoginMutation } from '../../../apis/productAPI'; 
import {useNavigate} from 'react-router';

const Login = () => {

const navigate = useNavigate(); 

  const userProfile = {
    username: "",
    password: ""
  };

  const [userDetails, setUserDetails] = useState(userProfile);

  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const {accessToken} = await login(userDetails).unwrap();
      localStorage.setItem("accessToken", accessToken);
      navigate('/products');
    } catch (err) {
      console.error('Login failed:', err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">Welcome back</h1>
        <p className="text-sm text-slate-500 mb-6">Sign in to your account</p>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1.5">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={userDetails.username}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
          
              name="password"
              type="password"
              value={userDetails.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="xxxxxxxx"
            />
          </div>

          {isError && (
            <p className="text-sm text-red-600">
              {error?.data?.message || 'Login failed. Check your credentials.'}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white font-medium rounded-lg py-2.5
                       hover:bg-blue-700 active:bg-blue-500 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div className="mt-4 text-sm text-slate-500">
          <div><span>don't have an account?</span></div>
          <button
            type="submit"
            className="w-20 bg-blue-500 text-white font-medium rounded-lg py-2.5
                       hover:bg-blue-700 active:bg-blue-500 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       disabled:opacity-60 disabled:cursor-not-allowed "
          >
           
          {isLoading ? '' : 'SignUp'}
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;