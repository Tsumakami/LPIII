var TokenControllerInstance = new TokenController();

var TokenValidate = TokenControllerInstance.getTokenInSession();
var Token = '';

if (TokenValidate == null || TokenValidate == undefined || TokenValidate == '') {
    TokenControllerInstance.requestToken();
    Token = sessionStorage.setItem('token');
} else {
    Token = TokenValidate;
}

$(".comprar").click(function () {
    $.ajax({
        url: `https://floating-sands-83864.herokuapp.com/cart/addItem`,
        dataType: 'json',
        contentType: "application/json",
        type: 'post',
        headers: {
            'x-access-token': Token
        },
        data: JSON.stringify({
            "productId": "5dc98c30ce52b41bde59274a"      
        }),
        success: function (response) {
            alert("Produto Adicionado com Sucesso!");
            window.location.href = 'carrinho.html'
        },
        error: function (error) {
            alert("Houve um erro!");
        }
    });
});

/*$(".teste").click(function () {
    $.ajax({
        url: `https://floating-sands-83864.herokuapp.com/cart/addItem`,
        dataType: 'json',
        contentType: "application/json",
        type: 'post',
        headers: {
            'x-access-token': Token
        },
        data: JSON.stringify({
            "productId": sessionStorage.getItem('id')      
        }),
        success: function (response) {
            alert("Produto Adicionado com Sucesso!");
            window.location.href = 'carrinho.html'
        },
        error: function (error) {
            alert("Houve um erro!");
        }
    });
});*/