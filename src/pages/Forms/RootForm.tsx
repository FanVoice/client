import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTgWebAppContext } from "../../contexts/tgContext";
import { TgWebAppContext } from "../../contexts/tgContext";


export const RootForm = () => {
    const tgContext = useTgWebAppContext();
    useEffect(() => {
        tgContext.tg.ready();
    });

    return (
        <TgWebAppContext.Provider value={{ tg: window.Telegram.WebApp }}>
            <Outlet />
        </TgWebAppContext.Provider>
    );
}