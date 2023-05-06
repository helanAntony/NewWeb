function Login()
        {         
            var email= document.getElementById("emailid").value;   
            var pwd= document.getElementById("pass").value;		
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
            if(email==""){
                alert("Please enter your user email id : ");
            }
            else if (!filter.test(email))
            {
                alert("Invalid email : ");
            }
            else if(pwd=='')
            {
                alert("Please enter Password : ");
            }
            else
            {				                            
                   alert("Thank You for Login : ");          
            }
           
        }