import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";
import { Link } from "react-router-dom";
import { Layout } from "../../Component/Layout";

function SignIn() {

    const {dataUser, setSignOut} = useContext(ShoppingCarContext)
    const noDataUser = dataUser.length == 0 ? false : true
    const hasDataUser = !noDataUser

    const handleSignIn = () => {
        const stringFalseOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringFalseOut)
        setSignOut(false)
    }

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
                    <button disabled={hasDataUser} onClick={() => handleSignIn()} className="rounded-lg border border-black w-full bg-black text-white">Log in</button>
                </Link>
                <Link to='/sing-up'>
                    <button disabled={!hasDataUser} className="w-full rounded-lg border border-black">Sing Up</button>
                </Link>
            </aside>
        </Layout>
    )
}

export {SignIn};