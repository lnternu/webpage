data = {
    user: "abdu",
    pass: "2005",
}

let accept = () =>{
    let userName = document.getElementById('user').value
    let password = document.getElementById('pass').value
    if (data.user == userName && data.pass == password) {
        window.location.href = 'http://66.228.59.137'
    }else{
        alert("Password is error")
    }
  
}
