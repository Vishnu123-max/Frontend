const data = async(userId)=>{
    const status = await fetch(`http://127.0.0.1:3000/getData/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data) {
            // console.log(data)
          return data
        } 
       else {
          return {};
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
        return false
      });
      return status
}

export {data}