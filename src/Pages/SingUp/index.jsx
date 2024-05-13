import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Component/Layout";
import { ShoppingCarContext } from "../../Context";

function SignUp() {

    const {dataUser, setDataUser, newUserValueName, setNewUserValueName, newUserValueEmail, setNewUserValueEmail, newUserValuePassword, setNewUserValuePassword, setSignOut} = useContext(ShoppingCarContext)


    
    const saveDataUser = () => {
        const objDataUser = {
            name: newUserValueName,
            email: newUserValueEmail,
            password: newUserValuePassword
        }
console.log('se esta enviando el obj')
console.log(objDataUser)
        localStorage.setItem('DATA_USER', JSON.stringify(objDataUser))
        setDataUser([...dataUser, objDataUser])
        setNewUserValueEmail('')
        setNewUserValueName('')
        setNewUserValuePassword('')
    }

    const onChangeName = (event) => {
        setNewUserValueName(event.target.value)
    }
    const onChangeEmail = (event) => {
        setNewUserValueEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setNewUserValuePassword(event.target.value)
    }
    return(
        <Layout>
            <aside className="flex flex-col justify-center gap-3 w-100 mt-8">
                <label htmlFor="name" className="flex justify-between">Name: 
                    <input type="text" id="name" value={newUserValueName} onChange={onChangeName} className="rounded-lg border border-black"/>
                </label>
                <label htmlFor="email" className="flex justify-between">Email: 
                    <input type="text" id="email" value={newUserValueEmail} onChange={onChangeEmail} className="rounded-lg border border-black"/>
                </label>
                <label htmlFor="password" className="flex justify-between">Password: 
                    <input type="text" id="password" value={newUserValuePassword} onChange={onChangePassword} className="rounded-lg border border-black"/>
                </label>
                <Link to="/" className="flex justify-center rounded-lg w-80">
                    <button className="rounded-lg border border-black w-full bg-black text-white" onClick={saveDataUser}>create</button>
                </Link>
            </aside>
        </Layout>
    )
}

export {SignUp};