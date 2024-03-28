import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Component/Layout";

function SignIn() {

    
    return(
        <Layout>
            <aside className="flex flex-col justify-center gap-3 w-100 mt-8">
                <label htmlFor="email" className="flex justify-between">Email: 
                    <input type="text" id="email" className="rounded-lg border border-black"/>
                </label>
                <label htmlFor="password" className="flex justify-between">Password: 
                    <input type="text" id="password"  className="rounded-lg border border-black"/>
                </label>
                <Link to="/" className="flex justify-center rounded-lg w-80">
                    <button className="rounded-lg border border-black w-full bg-black text-white">Log in</button>
                </Link>
                <Link to='/sing-up'>
                    <button className="w-full rounded-lg border border-black">Sing Up</button>
                </Link>
            </aside>
        </Layout>
    )
}

export {SignIn};