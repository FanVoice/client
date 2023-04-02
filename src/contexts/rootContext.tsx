import { createContext, useContext } from "react"

declare global {
  interface Window { Telegram: any; }
}

export type GlobalContent = {
  tg: any;
}


export const RootContext = createContext<GlobalContent>({
  tg: window.Telegram.WebApp
});


export const useRootContext = () => useContext(RootContext)