function submitNewsletter() {
    event.preventDefault();
    var msgFeedback = document.getElementsByClassName("msgFeedback");
    var email = $("#email").val();
    var separaMetade = email.substr(email.indexOf("@"));
    var verificaPonto = email.indexOf(".");
		if(email != "" && email.indexOf("@") != -1 && separaMetade.length > 1 && verificaPonto != -1){
      $("#email").removeClass("invalid");
      $("#email").addClass("valid");
      $("#email").val("");
      msgFeedback[0].setAttribute("data-success", "E-mail cadastrado com sucesso!");
  }else {
    $("#email").removeClass("valid");
    $("#email").addClass("invalid");
    msgFeedback[0].setAttribute("data-error", "Por favor, digite um e-mail valido!");
  }
}
