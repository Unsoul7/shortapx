import React from "react";
import { Link } from "react-router-dom";
export const Dashboard = () => {
    const shorturl = "hi"
    return(
        <div>
            <main className=" bg-slate-300 flex flex-col items-center m-2 p-2 rounded-md ">
                <h1 className="text-blue-950 text-2xl self-start my-2 px-1 font-light">Shorten Links</h1>
                <input type="text" placeholder="Enter a Long URL to Short" className="rounded-md w-full my-1 h-10 px-2 border " />
                <input type="text" placeholder="Enter URL Tag" className="w-full my-1 h-10 px-2 rounded-md" />
                <Link tp='/' className="bg-white w-full px-2 py-2 my-1 rounded-md"><code>{shorturl}</code></Link>
                <button className="bg-blue-950 w-full h-10 text-white rounded-md my-1">Short</button>
            </main>
            <section className="bg-slate-300 flex flex-col items-center m-2 p-2 rounded-md ">
                
                <h1 className="text-blue-950 text-2xl self-start my-2 px-1 font-light">Recent Links</h1>

                <div className="w-full bg-white rounded-md my-2 p-4">
                    <h2 className="text-xl text-blue-950">A link name</h2>
                    <Link to='/'>a link</Link>
                </div>
            </section>
        </div>
)}
