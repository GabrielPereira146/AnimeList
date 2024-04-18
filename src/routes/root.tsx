import { Outlet } from "react-router-dom";
import { Header } from '../components/header';


export default function Root() {
    return (
        <>
            <Header />
            <div id="detail" className="mt-20">
                <Outlet />
            </div>
        </>
    );
}