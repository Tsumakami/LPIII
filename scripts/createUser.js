var TokenControllerInstance = new TokenController();

var TokenValidate = TokenControllerInstance.getTokenInSession();
var Token = '';

if (TokenValidate == null || TokenValidate == undefined || TokenValidate == '') {
    TokenControllerInstance.requestToken();
    Token = sessionStorage.setItem('token');
} else {
    Token = TokenValidate;
}

$("#button").click(function () {
    var username = $('#nome').val();
    var cpf = sessionStorage.getItem("cpf");
    var phone = sessionStorage.getItem("phone");
    var email = $('#email').val();
    var password = $('#password').val();

    $.ajax({
        url: `https://floating-sands-83864.herokuapp.com/register`,
        dataType: 'json',
        contentType: "application/json",
        type: 'post',
        headers: {
            'x-access-token': Token
        },
        data: JSON.stringify({
            'username': username,
            'email': email,
            'password': password,
            'firstName': username,
            'lastName': username,
            'cellPhone': phone,
            'legalDocument': cpf      
        }),
        success: function (response) {
            alert("Usuário Registrado com sucesso!");
        },
        error: function (error) {
            alert("Algo de errado não está certo...");
        }
    });
});

