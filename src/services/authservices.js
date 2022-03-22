const signup = async (myBody) => {
    console.log(myBody)
    const status = await fetch(`http://127.0.0.1:3000`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data) {
          console.log(data)
          
          return true;
        } 
       else {
          return false;
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        window.alert("Something went Wrong!!");
        console.error("Error:", error);
        return false
      });
      return status
  };



  const login = async (myBody) => {
    console.log(myBody)
    const status = await fetch(`http://127.0.0.1:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data.userId) {
          console.log("Login Success");
          localStorage.setItem("userId", data.userId)
          localStorage.setItem("username", data.username)
          console.log("Register Success");
          return true;
        } 
   else {
          return false;
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        window.alert("Something went Wrong!!");
        console.error("Error:", error);
        return false
      });
      return status
  };

  export { login, signup };