import Sidebar from "@/Components/AdminComponents/Sidebar";
import { IoIosPerson } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }) {
    return <>


        <div className="flex">
            <ToastContainer theme="dark" />
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h[60px] px-12 border-b border-black">
                    <h3 className="text-3xl font-bold">Admin Pannel</h3>
                    <IoIosPerson className="text-3xl" />
                </div>
                {children}
            </div>
        </div>



    </>;
}