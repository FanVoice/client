import { createContext, useContext } from "react"

declare global {
  interface Window { Telegram: any; }
}

export type GlobalContent = {
  tg: any;
}


export const TgWebAppContext = createContext<GlobalContent>({
  tg: window.Telegram.WebApp
});


export const useTgWebAppContext = () => useContext(TgWebAppContext)