function converter() {

    var valorInformado = (ipt_valor.value);
    console.log(valorInformado)


    var verificacao = (valorInformado + 2) * 1

    var decimal = 0;
    var binario = 0;
    var octal = 0;
    var hexadecimal = 0;


    if (decimal_op1.checked) {

        valorInformado = Number(valorInformado)

        if (isNaN(verificacao)) {
            alert("Erro: o valor decimal inserido não é válido.")
        } else {
            if (decimal_op2.checked) {
                decimal = valorInformado.toString(10);
                div_mensagem.innerHTML += `<br>${ipt_valor.value} em decimal para decimal é = ${decimal}`;
            }

            if (binario_op2.checked) {
                binario = valorInformado.toString(2);
                div_mensagem.innerHTML += `<br>${ipt_valor.value} em decimal para binário é = ${binario}`;
            }

            if (octal_op2.checked) {
                octal = valorInformado.toString(8);
                div_mensagem.innerHTML += `<br>${ipt_valor.value} em decimal para octal é = ${octal}`;
            }

            if (hexa_op2.checked) {
                hexadecimal = valorInformado.toString(16).toUpperCase();
                div_mensagem.innerHTML += `<br>${ipt_valor.value} em decimal para hexadecimal é = ${hexadecimal}`;
            }
            excluir.style.display = 'block'
        }
    }


    if (binario_op1.checked) {
        valorInformado = parseInt(valorInformado, 2);

        if (isNaN(verificacao)) {
            alert('Erro: o valor binário inserido não é válido.')
        } else {
            if (valorInformado.toString().includes("2")) {
                alert('Erro: o valor binário inserido não é válido.')
            } else {
                if (decimal_op2.checked) {
                    decimal = valorInformado.toString(10);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em binário para decimal é = ${decimal}`;
                }
                if (binario_op2.checked) {
                    binario = valorInformado.toString(2);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em binário para binário é = ${binario}`
                }
                if (octal_op2.checked) {
                    octal = valorInformado.toString(8);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em binário para octal é = ${octal}`
                }
                if (hexa_op2.checked) {
                    hexadecimal = valorInformado.toString(16).toUpperCase();
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em binário para hexadecimal é = ${hexadecimal}`
                }
                excluir.style.display = 'block'
            }
        }

    }


    if (octal_op1.checked) {
        valorInformado = parseInt(valorInformado, 8);

        if (isNaN(verificacao)) {
            alert('Erro: o valor octal inserido não é válido.')
        } else {
            if (valorInformado.toString().includes("8") | valorInformado.toString().includes("9")) {
                alert('Erro: o valor octal inserido não é válido.')
            } else {
                if (decimal_op2.checked) {
                    decimal = valorInformado.toString(10);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em octal para decimal é = ${decimal}`;
                }

                if (binario_op2.checked) {
                    binario = valorInformado.toString(2);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em octal para binário é = ${binario}`
                }

                if (octal_op2.checked) {
                    octal = valorInformado.toString(8);
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em octal para octal é = ${octal}`
                }

                if (hexa_op2.checked) {
                    hexadecimal = valorInformado.toString(16).toUpperCase();
                    div_mensagem.innerHTML += `<br>${ipt_valor.value} em octal para hexadecimal é = ${hexadecimal}`
                }
                excluir.style.display = 'block'
            }
            
        }
    }


    if (hexa_op1.checked) {
        valorInformado = parseInt(valorInformado, 16);

        if (decimal_op2.checked) {
            decimal = valorInformado.toString(10);
            div_mensagem.innerHTML = `${decimal}`;
        }
        if (binario_op2.checked) {
            binario = valorInformado.toString(2);
            div_mensagem.innerHTML = `${binario}`
        }
        if (octal_op2.checked) {
            octal = valorInformado.toString(8);
            div_mensagem.innerHTML = `${octal}`
        }
        if (hexa_op2.checked) {
            hexadecimal = valorInformado.toString(16).toUpperCase();
            div_mensagem.innerHTML = `${hexadecimal}`
        }
        excluir.style.display = 'block'
    }

    ipt_valor.value = " ";

}


function limpar() {
    div_mensagem.innerHTML = " "
    excluir.style.display = "none"

}