type StoredLogin = {
   value: string;
   timeStamp: number;
}

const LOGIN_MAIL = "LOGIN_MAIL";

const TOKEN_LIVE_TIME = 86340000;

function isExpired( timeStamp?: number ): boolean {
   if (!timeStamp) return true;

   const now = Date.now();
   return now - timeStamp > TOKEN_LIVE_TIME;
}

export function setLogin( loginMail: string ): void {
   localStorage.setItem(
      LOGIN_MAIL,
      JSON.stringify({
         value: loginMail,
         timeStamp: Date.now()
      })
   );
   console.log("Login");
}

export function removeLogin(): void {
   localStorage.removeItem(LOGIN_MAIL);
}

export function getLogin(): StoredLogin | null {
   const storedLogin = localStorage.getItem(LOGIN_MAIL);
   if (storedLogin) {
      const parsedLogin: StoredLogin = JSON.parse(storedLogin);
      if (!isExpired(parsedLogin.timeStamp)) {
         return parsedLogin;
      }
      removeLogin();
   }
   return null;
}
