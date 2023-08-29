function validation(){
    if(document.Forminfo.Firstname.value==""){
        document.getElementById("result").innerHTML="Enter your First name*";
        return false;
    }
    else if(document.Forminfo.Lastname.value==""){
        document.getElementById("result").innerHTML="Enter your Last name*";
        return false;
    }
    else if(document.Forminfo.Location.value==""){
        document.getElementById("result").innerHTML="Enter your Location*";
        return false;
    }
    else if(document.Forminfo.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Forminfo.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Forminfo.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be at least 6-digits*";
        return false;
    }
    else if(document.Forminfo.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.Forminfo.CPassword.value !== document.Forminfo.Password.value){
        document.getElementById("result").innerHTML="Password does not match*";
        return false;
    }
    else if(document.Forminfo.Password.value == document.Forminfo.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById("popup");
function CloseSlide(){
    popup.classList.remove("open-slide");
}






