class TokenController{
    
    constructor(){
        this.token = '';
    }
    
    get getToken(){
        return this.token;
    }
    
    getTokenInSession(){
        return sessionStorage.getItem('token');
    }

    requestToken(){
        let endPoint = "https://floating-sands-83864.herokuapp.com/token/generate";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.response);
                this.token = this.response.token;
                sessionStorage.setItem('token', this.response.token);
                
            }else if(this.readyState == 4){
                console.log("Falha ao resgatar o Token");
            }
            
        };
        
        xhttp.open("GET", endPoint, true);
        xhttp.responseType = 'json';
        xhttp.send(); 
                
    }
}