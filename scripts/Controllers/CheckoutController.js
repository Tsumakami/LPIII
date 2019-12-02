class CheckoutController{
    
    constructor(){
        let tokenController = new TokenController();
        let session = tokenController.getTokenInSession();
        CheckoutController.requestOrder(session);
        
    }
      
    static requestOrder(sessao){
        let endPoint = "https://floating-sands-83864.herokuapp.com/cart";
          
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                CheckoutController._montResumo(this.response);
                

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
                console.log(this.response);
                               

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

    static _montResumo(order){
        console.log("_montResumo");
        let commerceItems = order.commerceItems;

        console.log(order);
        //monta o box de produto
        $("#deliveryMethod").append(" " + order.shippingGroups[0].deliveryMethod);
        $("#deliveryTime").append(" " + order.shippingGroups[0].deliveryTime + " dias");

        commerceItems.forEach(element => {
            $(".products").append(`
                <div class="cardc">
                    <img src="${element.product.images[0].url}" style="width:20%">
                    <h6>${element.product.description}</h6>
                    <p class="price">R$ ${element.total.toFixed(2)}</p>
                    <p>Produto por ${element.total.toFixed(2)}? Bixo Veio.</p>
                </div>
            `);
        });

        $("#subtotal").append(" R$ " + order.subtotal.toFixed(2));
        $("#frete").append(" R$ " + order.freight.toFixed(2));
        $("#total").append(" R$ " + order.total.toFixed(2));
        
        
    }

}