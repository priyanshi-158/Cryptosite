import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return (
        <>

            <div className="App flex overflow-hidden">
                <div className="navbar flex-[0.2] bg-[rgb(0,21,41)]">
                    <Navbar />
                </div>
            </div>
            <main className="lg:left-[270px] relative w-[80%] overflow-x-hidden">
                <Outlet />
            </main>
            <footer className="bg-[#bbd7f1] bottom-0 relative">
                <div className="flex flex-col justify-center items-center">
                    <h5 className="text-md font-bold">Cryptosite</h5>
                    <h5 className="text-md font-bold">© All rights reserved.</h5>
                    <div className="flex">
                        <Link to='/' className="px-1 underline text-blue-700 font-semibold">Home</Link>
                        <Link to='/news' className="px-1 underline text-blue-700 font-semibold">News</Link>
                        <Link to='/Cryptocurrencies' className="px-1 underline text-blue-700 font-semibold">CryptoCurrency</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}