$("#button").click(function () {
    var username = $('#nome').val();
    var cpf = sessionStorage.getItem("cpf");
    var phone = sessionStorage.getItem("phone");
    var email = $('#email').val();
    var password = $('#password').val();

    console.log(username);
    console.log(cpf);
    console.log(phone);
    console.log(password);

    $.ajax({
        url:`https://floating-sands-83864.herokuapp.com/register`,
        dataType: 'json',
        type: 'post',
        data: {
            'username': username,
            'identityDocument': cpf,
            'cellPhone': phone,
            'email': email,
            'password': password
        },
        success: function(response){         
            alert("Usuário Registrado com sucesso!");   
        },
        error: function(error){
            alert("Algo de errado não está certo...");
        }  
    });
});