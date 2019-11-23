class LoginController extends TokenController{
    
    constructor(){
        super();
        this.email = '';
        this.password = '';       
        
        let token = this.getTokenInSession()
        if(token == null || token == ''){
            this.requestToken();
        }
        console.log("TOKEN:", this.getTokenInSession());

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
            xhttp.setRequestHeader("x-access-token", this.getTokenInSession());
            
            xhttp.send(JSON.stringify(body));
                              
        }
           
    }

    static logout(){
        sessionStorage.clear();
        window.location.reload();
    }
}