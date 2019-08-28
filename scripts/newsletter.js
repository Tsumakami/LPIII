function submitNewsletter() {
  event.preventDefault();
    var email = $("#email").val();
    var separaMetade = email.substr(email.indexOf("@"));
    var verificaPonto = separaMetade.indexOf(".");
    console.log("teste: " + verificaPonto);
		if(email != "" && email.indexOf("@") != -1 && verificaPonto != -1){
    alert("Seu email foi cadastrado com sucesso!");
    $("#email").val("");
  }else {
    alert("Ocorreu um erro, por favor verifique seu email e tente novamente!");
  }
}
