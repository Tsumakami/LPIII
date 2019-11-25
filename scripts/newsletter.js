var TokenControllerInstance = new TokenController();

var TokenValidate = TokenControllerInstance.getTokenInSession();
var Token = '';

if (TokenValidate == null || TokenValidate == undefined || TokenValidate == '') {
  TokenControllerInstance.requestToken();
  Token = sessionStorage.setItem('token');
} else {
  Token = sessionStorage.getItem('token');
}

function submitNewsletter() {
    event.preventDefault();
    var msgFeedback = document.getElementsByClassName("msgFeedback");
    var email = $("#email").val();
    var separaMetade = email.substr(email.indexOf("@"));
    var verificaPonto = email.indexOf(".");
		if(email != "" && email.indexOf("@") != -1 && separaMetade.length > 1 && verificaPonto != -1){
      $.ajax({
        url: `https://floating-sands-83864.herokuapp.com/newsletter`,
        dataType: 'json',
        contentType: "application/json",
        type: 'post',
        headers: {
          'x-access-token': Token
        },
        data: JSON.stringify({
          email: email
        }),
        success: function (response) {
          $("#email").removeClass("invalid");
          $("#email").addClass("valid");
          $("#email").val("");
            msgFeedback[0].setAttribute("data-success", response.message);
        },
        error: function (error) {
          console.log(error);
        }
      });
  }else {
    $("#email").removeClass("valid");
    $("#email").addClass("invalid");
    msgFeedback[0].setAttribute("data-error", "Por favor, digite um e-mail valido!");
  }
}
