onSubmitSignIn = () => {

    const signInEmail = document.getElementById("inputEmailLogin").value;
    const signInPass = document.getElementById("inputPasswordLogin").value;

    if(signInEmail!=='' && signInPass!==''){
          fetch('http://localhost:3003/login',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: signInEmail,
              password:signInPass
            })
          })
          .then(data=>{
            if(data.status===401){document.getElementById("statusLogin").innerHTML = "Wrong credentials";}
            else if(data.status===400){document.getElementById("statusLogin").innerHTML = "Ooops, try again later";}
            else{window.location = data.url}
          })
          .catch(err=>{
            document.getElementById("statusLogin").innerHTML = "Ooops, try again later";
           });
    }else{
      document.getElementById("statusLogin").innerHTML = "Enter email and password";
    }
  }