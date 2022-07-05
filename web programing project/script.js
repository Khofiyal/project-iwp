function checkpass(){
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    console.log(pass,cpass);
    let messsage = document.getElementById("message");

    if(pass.length != 0){
        if(pass == cpass){
            message.textContent = "";
        }
        else{
            message.textContent = "Password not match";
            message.style.color = "#ff4d4d";
        }
    }
    else{

    }
}