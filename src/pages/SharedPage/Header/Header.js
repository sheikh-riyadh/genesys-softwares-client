import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Notice from "../../../components/Notice/Notice";

export default function Header() {

    const navItems = () => {
        return (
            <>
                <li><a href="/">Home</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Register</a></li>
            </>
        )
    }
    return (
        <div className="">
            <Notice />
            <div className="navbar lg:px-[91px] py-2 bg-[#F0F0F0]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm">
                            {navItems()}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  text-sm">
                            {navItems()}
                        </ul>
                    </div>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    <img src="assets/logo.png" alt="Logo" className="w-8 lg:w-11" />
                </a>
                <div className="navbar-end gap-2">
                    <div className="w-36 flex justify-center items-center relative">
                        <input type="text" className="input w-full outline-none border-0 focus:outline-none hover:bg-slate-300 bg-[#F0F0F0] hover:rounded-full" />
                        <BsSearch className="absolute right-5" />
                    </div>
                    <AiOutlineUser className="text-3xl lg:text-xl" />
                    <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}