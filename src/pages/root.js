import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/navigation";

export default function Root() {
    return (
        <>
            <Navigation />
            <div className="pl-60">
                <Outlet />
            </div>
        </>
    );
}
