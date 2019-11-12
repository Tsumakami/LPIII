class LoginController {
    
    constructor(){
        this.email = '';
        this.password = '';       
       
        document.getElementsByClassName("login-form")[0].addEventListener('submit', () => {
            event.preventDefault();
        });
        
    }

    submitLogin(){
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
                
        if(this.email != '' && this.password != ''){
            let endPoint = "https://floating-sands-83864.herokuapp.com/login";
            let body = {
                    'username': this.email,
                    'password': this.password
            }
            
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                    sessionStorage.setItem('email', this.response.email);
                    window.location.href = "../../index.html";               
                }else if(this.readyState == 4){
                    alert("Falha ao efetuar o login");
                }
                console.log(this);
            };
            console.log("aqui");
            xhttp.open("POST", endPoint, true);
            xhttp.responseType = 'json';
            xhttp.setRequestHeader("Content-Type", "application/json")
            xhttp.setRequestHeader("x-access-token", "9c4d47f35442bebb1c2f11c3df3bde7bfcd53f710a048dc9974ba98c6bc9f2b115b911edd65ea8ffdd117b87a41b28f3")
            
            xhttp.send(JSON.stringify(body));
                              
        }
           
    }

}