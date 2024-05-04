import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Component/Layout";
import { ShoppingCarContext } from "../../Context";
function MyAccount() {
    const {dataUser, parsedData} = useContext(ShoppingCarContext)
    const arrayParsedData = [parsedData]
    //localStorage.setItem('DATA_USER', JSON.stringify(dataUser))
    

    return(
        <Layout>
            <div className="flex flex-col w-80 mt-8">
                <div className="flex w-full justify-between">
                    <p>Email</p>
                    <p className="ml-4">{arrayParsedData.map((data, index) => (<span key={index}>{data.email}</span>))}</p>
                </div>
                <div className="flex w-full justify-between">
                    <p>Password</p>
                    <p className="ml-4">{arrayParsedData.map((data,index) => (<span key={index}>{data.password}</span>))}</p>
                </div>
                <Link to="/" className="flex justify-center mt-4 bg-black text-white rounded-lg">
                    <div>Edit</div>
                </Link>
            </div>
        </Layout>
    )
}

export {MyAccount};