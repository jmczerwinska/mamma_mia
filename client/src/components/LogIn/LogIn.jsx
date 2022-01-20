import React from "react";

function LogIn() {
  return (
    <div>
      <form>
        <input type="text" name="email" />
        <input type="password" name="passwword" />
        <input type="submit" value="Zaloguj" className="button" />
      </form>
      <p>Zapomniałeś hasła?</p>
      <p>Nie masz jeszcze konta? <a>Załóż je!</a></p>
    </div>
    );
}

export default LogIn;
