window.addEventListener(
    "load",
    function () {
      /**
       *  First Check userName and password in the localStorage.
       *  if it is not exist create userData object and stringify it.
       *  and store in the localStorage
       */
  
      if (typeof Storage !== undefined) {
        let getUserData = localStorage.getItem("userData");
        let createUserData = { email: "", password: "", userName: "" };
        if (getUserData === null) {
          localStorage.setItem("userData", JSON.stringify(createUserData));
        }
      }
    },
    false
  );