import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (

        <footer className="px-3 md:px-5 lg:px-[40px] xl:px-[91px] py-[95px]">
            <div className="grid md:grid-cols-3 xl:grid-cols-12 gap-10 mb-24">
                <div className="xl:col-span-3 text-start">
                    <img src="/assets/logo.png" alt="" />
                    <p className="mt-14">By completing this form you're signing up to receive our emails and can unsubscribe at any time</p>
                </div>
                <div className="xl:col-span-2 text-start">
                    <h1 className="uppercase font-semibold">Menu</h1>
                    <ul>
                        <li className="mt-2 xl:mt-4">Home</li>
                        <li className="mt-2 xl:mt-4">Gift Card</li>
                        <li className="mt-2 xl:mt-4">Seasonal</li>
                        <li className="mt-2 xl:mt-4">Kid & Nursery</li>
                        <li className="mt-2 xl:mt-4">Pet</li>
                        <li className="mt-2 xl:mt-4">Gift Registry</li>
                    </ul>
                </div>
                <div className="xl:col-span-2 text-start">
                    <h1 className="uppercase font-semibold">Menu</h1>
                    <ul>
                        <li className="mt-2 xl:mt-4">Home</li>
                        <li className="mt-2 xl:mt-4">Gift Card</li>
                        <li className="mt-2 xl:mt-4">Seasonal</li>
                        <li className="mt-2 xl:mt-4">Kid & Nursery</li>
                        <li className="mt-2 xl:mt-4">Pet</li>
                        <li className="mt-2 xl:mt-4">Gift Registry</li>
                    </ul>
                </div>
                <div className="xl:col-span-2 text-start">
                    <h1 className="uppercase font-semibold">Menu</h1>
                    <ul>
                        <li className="mt-2 xl:mt-4">Home</li>
                        <li className="mt-2 xl:mt-4">Gift Card</li>
                        <li className="mt-2 xl:mt-4">Seasonal</li>
                        <li className="mt-2 xl:mt-4">Kid & Nursery</li>
                        <li className="mt-2 xl:mt-4">Pet</li>
                        <li className="mt-2 xl:mt-4">Gift Registry</li>
                    </ul>
                </div>
                <div className="xl:col-span-3 text-start">
                    <h1 className="uppercase font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <span className="my-6 block">Signup for our newsletter to stay up to date on sales and events.</span>
                    <div className="form-control mb-3">
                        <div className="input-group">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                            <button className="btn px-6">
                                Join
                            </button>
                        </div>
                    </div>
                    <p>By completing this form you're signing up to receive our emails and can unsubscribe at any time</p>
                </div>
            </div>
            <div className="form-control">
                <div className="input-group justify-end mb-5">
                    <select className="select select-bordered rounded-none">
                        <option disabled selected>United States(USD $)</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-5">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                <div>
                    <img src="/assets/visa-card.png" alt="visa_card" />
                </div>
            </div>
            <div className="divider"></div>
        </footer>
    )
}