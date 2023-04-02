import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRootContext } from "../../contexts/rootContext";


export const RootForm = () => {
    const rootContext = useRootContext();
    useEffect(() => {
        rootContext.tg.ready();
    });

    return (
        <Outlet />
    );
}