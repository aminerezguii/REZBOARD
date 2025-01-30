import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Rezboard");
  };

  return (
   <div className="min-h-screen bg-gradient-to-r from-violet-800 via-purple-700 to-pink-400">
      
      <div className="absolute top-0 left-0 p-3 flex justify-around items-center w-full z-10 bg-white shadow-2xl ">
        <h1 className=" text-gray-800 text-3xl font-bold">REZBOARD</h1>
        <h1 className=""></h1>
        <h1 className=""></h1>
        <h1 className=""></h1>
        <h1 className=""></h1>
        <nav className="space-x-5 right-9 ">
          <a href="#" className="text-zinc-700 text-lg">Features</a>
          <a href="#" className="text-zinc-700 text-lg">Solutions</a>
          <a href="#" className="text-zinc-700 text-lg">Plans</a>
          <a href="#" className="text-zinc-700 text-lg">Pricing</a>
          <a href="#" className="text-zinc-700 text-lg">Resources</a>
        </nav>
      </div>

    
    
    
   <div className="flex h-full pt-24 z-10 relative">

          <div className=" w-screen flex items-center justify-center  ">

                 <div className="text-center">
                   <h1 className=" w-auto text-9xl font-bold mb-4 text-white"> Welcome To REZBOARD</h1>
                   <p className="text-lg font-semibold text-white"> Your simple, intuitive tool to manage projects, tasks, and collaborate effortlessly.
                    <br></br>
                    Stay organized and boost productivity with custom boards, lists, and real-time updates.
                    <br></br> Get started now yeeey ! 
                   </p>
                  </div>
          </div>



          <div className=" flex items-center justify-center bg-white shadow-2xl rounded-lg m-8">
             <div className="p-8 w-80">
               <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Login</h2>

               <form onSubmit={handleLogin}>

                    <div className="mb-4">
                         <label htmlFor="email" className="block text-gray-700">Email : </label>
                         <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                
                          <div className="mb-6">
                          <label htmlFor="password" className="block text-gray-700">Password : </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg" />
                           </div>

                      <div className="flex justify-between">
                          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"> Login </button>
                      </div>
               </form>

                      <div className="mt-4 text-center">
                        <span className="text-sm"> Don't u have an account ? Goddammit ! </span>
                        <button className="text-blue-500 hover:underline"> Sign Up it's free ! </button>
                      </div>
             </div>
          </div>     
   </div> 
   </div>
    
  );
}

export default LoginPage;
