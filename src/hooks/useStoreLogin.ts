import { getLogin, setLogin } from "../utilities/ts/storeLogin";

export function useStoreLogin() {
   const storedLogin = getLogin();
   return {storedLogin, setLogin};
}
