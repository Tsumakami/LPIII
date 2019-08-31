//-->> Formats(Nome):
document.querySelector('#nome').focus();
document.querySelector('#nome').addEventListener("input", function isTextName() {
    var name = document.querySelector('#nome').value;
    var size = name.length;
    var regExpCaracter = /[\d\.\+\-\*\&\¨\%\$\/\#\@\!'\"\(\)\;\:\?\<\>\,]/;
    for (var x = 0; x < size; x++) {
        if (regExpCaracter.test(name[x])) {
            name = name.replace(name[x], "");
            document.querySelector('#nome').value = name;
        }
        document.querySelector('#nome').setAttribute("maxlength", "25");
    }
});

//-->> Validations (Nome):
document.querySelector('#nome').addEventListener("focusout", function () {
    let name = document.querySelector('#nome').value;
    let select = document.querySelector('#nome');
    let size = name.length;
    if (size >= 5) {
        select.classList.remove('invalid');
        select.classList.add('valid');
        document.querySelector('#spanName').classList.add('spanNone');
    } else if (size < 5) {
        select.classList.remove('valid');
        select.classList.add('invalid');
        document.querySelector('#spanName').classList.remove('spanNone');
    }
});
//-->>

//-->> Formats (CPF):         
document.querySelector('#cpf').addEventListener("focusout", function maskCPF() {
    var cpf = document.querySelector('#cpf').value;
    if (cpf.length == 11) {
        document.querySelector('#cpf').setAttribute("maxlength", "14");
        var cpf = document.querySelector('#cpf').value;
        var textCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        document.querySelector('#cpf').value = textCpf;
    }
});

document.querySelector('#cpf').addEventListener("input", function isNumberCPF() {
    var cpf = document.querySelector('#cpf').value;
    var size = cpf.length;
    var regexCaracter = /[\W\A-Za-z]/;
    for (var x = 0; x < size; x++) {
        if (regexCaracter.test(cpf[x])) {
            cpf = cpf.replace(cpf[x], "");
            document.querySelector('#cpf').value = cpf;
        }
        document.querySelector('#cpf').setAttribute("maxlength", "11");
    }
});

//-->> Validations (CPF):
document.querySelector('#cpf').addEventListener("focusout", function () {
    let cpf = document.querySelector('#cpf').value;
    let select = document.querySelector('#cpf');
    let size = cpf.length;

    if (size == 14 || size == 11) {
        var result = validateCPF(cpf);
        if (result) {
            select.classList.remove('invalid');
            select.classList.add('valid');
            document.querySelector('#spanCPF').classList.add('spanNone');
        } else {
            select.classList.remove('valid');
            select.classList.add('invalid');
            document.querySelector('#spanCPF').classList.remove('spanNone');
        }
    } else {
        select.classList.remove('valid');
        select.classList.add('invalid');
        document.querySelector('#spanCPF').classList.remove('spanNone');
    }
});
//-->>

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

//-->> Formats (Phone):
document.querySelector('#telefone').addEventListener("focusout", function maskPhone() {
    var phone = document.querySelector('#telefone').value;
    if (phone.length == 10) {
        var dd = phone[0] + phone[1];
        var first = phone[2] + phone[3] + phone[4] + phone[5];
        var second = phone[6] + phone[7] + phone[8] + phone[9];
        document.querySelector('#telefone').setAttribute("maxlength", "14");
        document.querySelector('#telefone').value = "(" + dd + ")" + " " + first + "-" + second;
        document.querySelector('#telefone').removeEventListener('focusout', addEventListener, false);
    } else if (phone.length != 14) {
        document.querySelector('#telefone').setAttribute("maxlength", "10");
        while (phone.indexOf("(") != -1) { phone = phone.replace("(", ""); }
        while (phone.indexOf(")") != -1) { phone = phone.replace(")", ""); }
        while (phone.indexOf(" ") != -1) { phone = phone.replace(" ", ""); }
        while (phone.indexOf("-") != -1) { phone = phone.replace("-", ""); }
        document.querySelector('#telefone').value = phone;
    }
});

document.querySelector('#telefone').addEventListener("input", function isNumberPhoneFixed() {
    var phone = document.querySelector('#telefone').value;
    var regexNumber = /[^\d]/;
    var size = phone.length;
    while (size--) {
        if (regexNumber.test(phone[size])) {
            var textPhone = document.querySelector('#telefone').value;
            textPhone = textPhone.replace(textPhone[size], "");
            document.querySelector('#telefone').value = textPhone;
        }
        document.querySelector('#telefone').setAttribute("maxlength", "10");
    }
});

//-->> Validations (Phone): 
document.querySelector('#telefone').addEventListener("focusout", function () {
    let select = document.querySelector('#telefone');
    let phone = document.querySelector('#telefone').value;
    let size = phone.length;
    var ddInvalid = 0;
    var ddValid = 0;
    var dd = parseInt(phone[1] + phone[2]);
    var v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 23, 25, 26, 29, 30, 36,
        39, 40, 50, 52, 56, 57, 58, 59, 60, 70, 72, 76, 78, 80, 90];
    for (var i = 0; i < v.length; i++) {
        if (dd == v[i]) {
            ddInvalid++;
        } else if (dd != v[i]) {
            ddValid++;
        }
    }

    if (ddValid == 22 || size == 14) {
        select.classList.remove('invalid');
        select.classList.remove('valid');
        select.classList.add('valid');
        document.querySelector('#spanPhone').classList.add('spanNone');
    } if (ddInvalid == 1 || size < 14) {
        select.classList.remove('invalid');
        select.classList.remove('valid');
        select.classList.add('invalid');
        document.querySelector('#spanPhone').classList.remove('spanNone');
    }
});
//-->>

//-->> Formats (Email):
document.querySelector('#email').addEventListener("input", function isEmail() {
    var email = document.querySelector('#email').value;
    var size = email.length;
    let countAr = 0;
    let countPon = 0;
    var regexEmail = /[\+\-\*\&\¨\%\$\/\#\!'\"\(\)\;\:\?\<\>\,\^\~\ ]/;
    for (var x = 0; x < size; x++) {
        if (email[x] == '@') {
            countAr++;
            if (countAr >= 2) {
                email = email.replace(email[x], "");;
                document.querySelector('#email').value = email;
            }
        }

        if (regexEmail.test(email[x]) || countPon > 2) {
            email = email.replace(email[x], "");
            document.querySelector('#email').value = email;
        }
    }
});

//-->> Validations (Email):
document.querySelector('#email').addEventListener("focusout", function () {
    let email = document.querySelector('#email').value;
    let select = document.querySelector('#email');
    let size = email.length;
    if (email.indexOf("@") != -1) {
        for (var i = 0; i < email.length; i++) {
            if (email.indexOf(".") != -1) {
                if (email[i + 1] == "c") {
                    if (email[i + 2] == "o") {
                        if (email[i + 3] == "m") {
                            var com = email.split("@")[1];
                            var comVerification = com.split(".")[0];
                            if (comVerification.length > 0) {
                                // É válido
                                select.classList.remove('invalid');
                                select.classList.add('valid');
                                document.querySelector('#spanEmail').classList.add('spanNone');
                            } else {
                                // Inválido
                                select.classList.remove('valid');
                                select.classList.add('invalid');
                                document.querySelector('#spanEmail').classList.remove('spanNone');
                            }
                        }
                    }
                }

                if (email[i + 1] == "n") {
                    if (email[i + 2] == "e") {
                        if (email[i + 3] == "t") {
                            var net = email.split("@")[1];
                            var netVerification = net.split(".")[0];
                            if (netVerification.length > 0) {
                                // É válido
                                select.classList.remove('invalid');
                                select.classList.add('valid');
                                document.querySelector('#spanEmail').classList.add('spanNone');
                            } else {
                                // Inválido
                                select.classList.remove('valid');
                                select.classList.add('invalid');
                                document.querySelector('#spanEmail').classList.remove('spanNone');
                            }
                        }
                    }
                }

            } else {
                // Inválido
                select.classList.remove('valid');
                select.classList.add('invalid');
                document.querySelector('#spanEmail').classList.remove('spanNone');
            }
        }

    } else {
        // Inválido        
        select.classList.remove('valid');
        select.classList.add('invalid');
        document.querySelector('#spanEmail').classList.remove('spanNone');
    }
});
//-->>

//-->> Validations (Senha):
document.querySelector('#password').addEventListener("focusout", function () {
    let password = document.querySelector('#password').value;
    let select = document.querySelector('#password');
    let rselect = document.querySelector('#rpassword');
    let size = password.length;
    if (size != 0 && rselect.value.localeCompare(password) == 0) {
        select.classList.remove('invalid');
        rselect.classList.remove('valid');
        select.classList.add('valid');
        rselect.classList.add('valid');
        document.querySelector('#spanPassword').classList.add('spanNone');
    } else {
        select.classList.remove('valid');
        rselect.classList.remove('valid');
        select.classList.add('invalid');
        rselect.classList.add('invalid');
        document.querySelector('#spanPassword').classList.remove('spanNone');
    }
});
//-->>

//-->> Validations (Senha Repetida):
document.querySelector('#rpassword').addEventListener("focusout", function () {
    let password = document.querySelector('#password').value;
    let select = document.querySelector('#password');
    let rselect = document.querySelector('#rpassword');
    let size = password.length;
    if (size != 0 && rselect.value.localeCompare(password) == 0) {
        select.classList.remove('invalid');
        rselect.classList.remove('valid');
        select.classList.add('valid');
        rselect.classList.add('valid');
        document.querySelector('#spanrPassword').classList.add('spanNone');
        document.querySelector('#spanPassword').classList.add('spanNone');
    } else {
        select.classList.remove('valid');
        rselect.classList.remove('valid');
        select.classList.add('invalid');
        rselect.classList.add('invalid');
        document.querySelector('#spanrPassword').classList.remove('spanNone');
        document.querySelector('#spanPassword').classList.remove('spanNone');
    }
});
//-->>

//-->> Button:
document.querySelector('#button').addEventListener("click", function validationSave() {
    let name = document.querySelector('#nome');
    let phone = document.querySelector('#telefone');
    let cpf = document.querySelector('#cpf');
    let email = document.querySelector('#email');
    let senha = document.querySelector('#password');
    let rsenha = document.querySelector('#rpassword');
    if (name.classList.contains('valid') && phone.classList.contains('valid') && cpf.classList.contains('valid')
        && email.classList.contains('valid') && email.classList.contains('valid') && senha.classList.contains('valid')
        && rsenha.classList.contains('valid')) {
        alert('Dados Inseridos estão válidos!');
    } else {
        alert('Dados Inseridos estão inválidos!');
    }
});