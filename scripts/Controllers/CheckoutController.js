class CheckoutController{
    
    constructor(){
        this.order = '';
        let tokenController = new TokenController();
        let session = tokenController.getTokenInSession();
        CheckoutController.requestOrder(session);
        
    }
      
    static requestOrder(sessao){
        let endPoint = "https://floating-sands-83864.herokuapp.com/cart";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.stringify(this.response));
                order(JSON.stringify(this.response));
                

            }else if(this.readyState == 4){
                console.log("Falha ao buscar o pedido");
            }
            
        };
        
        xhttp.open("GET", endPoint, true);
        xhttp.setRequestHeader("Content-Type", "application/json")
        xhttp.setRequestHeader("x-access-token", sessao);
        xhttp.responseType = 'json';
        xhttp.send(); 
                
    }

    static sendEndereco(form){
        let endPoint = "https://floating-sands-83864.herokuapp.com/checkout/shipping/address";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.stringify(this.response));
                               

            }else if(this.readyState == 4){
                console.log("Falha ao setar o endereço");
            }
            
        };
        
        xhttp.open("PUT", endPoint, true);
        xhttp.setRequestHeader("Content-Type", "application/json")
        xhttp.setRequestHeader("x-access-token", sessao);
        xhttp.responseType = 'json';
        xhttp.send(JSON.stringify(form)); 
    }

    static sendPayment(form){
        let endPoint = "https://floating-sands-83864.herokuapp.com/checkout/payment/select";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.stringify(this.response));
                               

            }else if(this.readyState == 4){
                console.log("Falha ao setar o endereço");
            }
            
        };
        
        xhttp.open("PUT", endPoint, true);
        xhttp.setRequestHeader("Content-Type", "application/json")
        xhttp.setRequestHeader("x-access-token", sessao);
        xhttp.responseType = 'json';
        xhttp.send(JSON.stringify(form)); 
    }
    static sendOrder(form){
        let endPoint = "https://floating-sands-83864.herokuapp.com/checkout/finish";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.stringify(this.response));
                               

            }else if(this.readyState == 4){
                console.log("Falha ao setar o endereço");
            }
            
        };
        
        xhttp.open("POST", endPoint, true);
        xhttp.setRequestHeader("Content-Type", "application/json")
        xhttp.setRequestHeader("x-access-token", sessao);
        xhttp.responseType = 'json';
        xhttp.send(JSON.stringify(form)); 
    }

}