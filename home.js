var modal = document.getElementById("modal");

var btn = document.getElementById("btn");

var span = document.getElementById("closebtn");

const contnt = document.getElementById("tag");


        btn.onclick = function() {

            let fname = document.getElementById("fname").value;
            let email = document.getElementById("email").value;
            let pswd = document.getElementById("pswd").value;
            let pswd2 = document.getElementById("pswd2").value;
            
            if(fname.length !== 0 & email.length !== 0 & pswd.length == 0 & pswd2.length !== 0 & pswd == pswd2){
                contnt.innerHTML = ("CONGRATULATIONS");
                modal.style.display = "block"; 
                modal.style.fontSize = "15px"
            }
            else if(pswd !== pswd2 & fname.length == 0 || email.length == 0){
                contnt.innerHTML = ("All fields are required and confirm your password");
                modal.style.display = "block"; 
                modal.style.fontSize = "8px";
            }
            else if(pswd !== pswd2 & fname.length !== 0 & email.length !== 0){
                contnt.innerHTML = ("Password is not matching");
                modal.style.display = "block"; 
                modal.style.fontSize = "12px"

            }
            else if(fname.length == 0 || email.length == 0 || pswd.length == 0 || pswd2.length == 0){
                contnt.innerHTML = ("All fields are required");
                modal.style.display = "block"; 
                modal.style.fontSize = "12px";
            }
            else{
                contnt.innerHTML = ("CONGRATULATIONS");
                modal.style.display = "block";
                modal.style.fontSize = "15px"
            }
            
        }
    
        span.onclick = function() {
            modal.style.display = "none";

            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pswd").value = "";
            document.getElementById("pswd2").value = "";

        }

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }






    