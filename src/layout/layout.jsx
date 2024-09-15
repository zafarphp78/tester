import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return (<div>
            <Outlet />
        </div>);
};
export default Layout;
//# sourceMappingURL=layout.jsx.map