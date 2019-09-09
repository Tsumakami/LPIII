function submitNewsletter() {
    event.preventDefault();
    var msgFeedback = document.getElementsByClassName("msgFeedback");
    var email = $("#email").val();
    var separaMetade = email.substr(email.indexOf("@"));
    // var verificaPonto = separaMetade.indexOf(".");
    console.log("DAWDAW: " + separaMetade.length);
		if(email != "" && email.indexOf("@") != -1 && separaMetade.length > 1){
      msgFeedback[0].setAttribute("data-success", "E-mail cadastrado com sucesso!");
    $("#email").val("");
  }else {
    msgFeedback[0].setAttribute("data-error", "Por favor, digite um e-mail valido!");
  }
}
