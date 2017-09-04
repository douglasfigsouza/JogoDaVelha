var flag;
var verEmpate = true;
var Jogadas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var Jogador1 = [{ nome: "" , peca: "" , numVitorias: 0 }];
var Jogador2 = [{ nome: "", peca: "", numVitorias: 0 }];
Jogador1.numVitorias = 0;
Jogador2.numVitorias = 0;
var Empate = 0;
var numJogadas=0;

// função que escolhe x ou bolinha
function SelecionaPeca(jog, op) {
    switch (jog)
    {
        case "Jog1":
            if (op == 'X')
            {
                Jogador1.peca = "X";
                Jogador2.peca = "O";
                document.getElementById("opJog2X").disabled = true;
                document.getElementById("opJog2O").checked = true;
                document.getElementById("opJog2O").removeAttribute('disabled');

            }
            else
            {
                Jogador1.peca = "O";
                Jogador2.peca = "X";
                document.getElementById("opJog2O").disabled = true;
                document.getElementById("opJog2X").checked = true;
                document.getElementById("opJog2X").removeAttribute('disabled');
            }
            break;
        case "Jog2":
            if (op == 'X')
            {
                Jogador2.peca = "X";
                Jogador1.peca = "O";
                document.getElementById("opJog1X").disabled = true;
                document.getElementById("opJog1O").checked = true;
                document.getElementById("opJog1O").removeAttribute('disabled');
            }
            else
            {
                Jogador2.peca = "O";
                Jogador1.peca = "X";
                document.getElementById("opJog1O").disabled = true;
                document.getElementById("opJog1X").checked = true;
                document.getElementById("opJog1X").removeAttribute('disabled');
            }
            break;
    }
}
function CadastraJogadores()
{
    $("#Jogadores").removeClass('DisplayBlock');
    $("#Jogadores").addClass('DisplayNone');
    $("#jogo").removeClass("DisplayNone");
    $("#jogo").addClass("DisplayBlock");
    var form = document.getElementById('formCadJog');
    Jogador1.nome = form.Jog1.value;
    Jogador2.nome = form.Jog2.value;

    var inicio = form.inicia.value;
    if (inicio == 1) {
        document.getElementById("jogadorAtual").innerText = " " + Jogador1.nome;
        document.getElementById("peca").innerText = " " + Jogador1.peca;
        flag = 1;
    }
    else
    {
        document.getElementById("jogadorAtual").innerText = " " + Jogador2.nome;
        document.getElementById("peca").innerText = " " + Jogador2.peca;
        flag = 2;
    }
}
function Jogada(op)
{
    if (flag == 1) {
        document.getElementById(op).innerText = Jogador1.peca;
        document.getElementById(op).value = op;
        document.getElementById(op).disabled= true;
        flag = 2;
        switch (op)
        {
            case "Btn1":
                Jogadas[0][0] = Jogador1.peca;
                break;
            case "Btn2":
                Jogadas[1][0] = Jogador1.peca;
                break;
            case "Btn3":
                Jogadas[2][0] = Jogador1.peca;
                break;
            case "Btn4":
                Jogadas[0][1] = Jogador1.peca;
                break;
            case "Btn5":
                Jogadas[1][1] = Jogador1.peca;
                break;
            case "Btn6":
                Jogadas[2][1] = Jogador1.peca;
                break;
            case "Btn7":
                Jogadas[0][2] = Jogador1.peca;
                break;
            case "Btn8":
                Jogadas[1][2] = Jogador1.peca;
                break;
            case "Btn9":
                Jogadas[2][2] = Jogador1.peca;
                break;
        }
        checkJogo(flag);
    }
    else
    {
        document.getElementById(op).innerText = Jogador2.peca;
        document.getElementById(op).value = op;
        document.getElementById(op).disabled = true;
        flag = 1;
        switch (op) {
            case "Btn1":
                Jogadas[0][0] = Jogador2.peca;
                break;
            case "Btn2":
                Jogadas[1][0] = Jogador2.peca;
                break;
            case "Btn3":
                Jogadas[2][0] = Jogador2.peca;
                break;
            case "Btn4":
                Jogadas[0][1] = Jogador2.peca;
                break;
            case "Btn5":
                Jogadas[1][1] = Jogador2.peca;
                break;
            case "Btn6":
                Jogadas[2][1] = Jogador2.peca;
                break;
            case "Btn7":
                Jogadas[0][2] = Jogador2.peca;
                break;
            case "Btn8":
                Jogadas[1][2] = Jogador2.peca;
                break;
            case "Btn9":
                Jogadas[2][2] = Jogador2.peca;
                break;
        }
        checkJogo(flag);
    }

}

function checkJogo(jog)
{
    numJogadas = numJogadas + 1;
    // valida pela tranversal linhas e colunas iguais 
    if (Jogadas[0][0] == Jogadas[1][1] && Jogadas[2][2] == Jogadas[1][1])
    {
        numJogadas = 0;
        verEmpate = false;
        verficaCampeao();
    }
    if (Jogadas[0][2] == Jogadas[1][1] && Jogadas[1][1] == Jogadas[2][0])
    {
        numJogadas = 0;
        verEmpate = false;
        verficaCampeao();
    }

    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            // valida pelas linhas na horizontal
            if (j==0 && Jogadas[j][i] == Jogadas[j + 1][i] && Jogadas[j][i] == Jogadas[j + 2][i])
            {
                numJogadas = 0;
                verEmpate = false;
                verficaCampeao();
            }
            ////valida pela linhas verticais
            if (i == 0 && Jogadas[j][i] == Jogadas[j][i + 1] && Jogadas[j][i] == Jogadas[j][i + 2])
            {
                numJogadas = 0;
                verEmpate = false;
                verficaCampeao();
            }
        }
        if (verEmpate == true && numJogadas == 9) {
            verficaCampeao();
        }
    }
    //alterna o jogador/peça na tela 
    if(jog==1)
    {
        document.getElementById("jogadorAtual").innerText=" "+Jogador1.nome;
        document.getElementById("peca").innerText=" "+Jogador1.peca;
    }
    else
    {
        document.getElementById("jogadorAtual").innerText=" "+Jogador2.nome;
        document.getElementById("peca").innerText=" "+Jogador2.peca;
    }

}
function verficaCampeao()
{
    document.getElementById("Btn1").disabled = true;
    document.getElementById("Btn2").disabled = true;
    document.getElementById("Btn3").disabled = true;
    document.getElementById("Btn4").disabled = true;
    document.getElementById("Btn5").disabled = true;
    document.getElementById("Btn6").disabled = true;
    document.getElementById("Btn7").disabled = true;
    document.getElementById("Btn8").disabled = true;
    document.getElementById("Btn9").disabled = true;

    if (numJogadas == 9 && verEmpate == true) {
        numJogadas = 0;
        Empate = Empate + 1;
        document.getElementById('jogador1').innerText = Jogador1.nome;
        document.getElementById('vitoria1').innerText = Jogador1.numVitorias;

        document.getElementById('jogador2').innerText = Jogador2.nome;
        document.getElementById('vitoria2').innerText = Jogador2.numVitorias;

        document.getElementById('empate').innerText = Empate;
        alert("Empate!");
    }
    else if (flag == 2) {
        Jogador1.numVitorias = Jogador1.numVitorias + 1;
        document.getElementById('jogador1').innerText = Jogador1.nome;
        document.getElementById('vitoria1').innerText = Jogador1.numVitorias;

        document.getElementById('jogador2').innerText = Jogador2.nome;
        document.getElementById('vitoria2').innerText = Jogador2.numVitorias;

        verEmpate = true;
        alert("Jogador: "+Jogador1.nome+" Campeão");
    }
    else {
        document.getElementById('jogador1').innerText = Jogador1.nome;
        document.getElementById('vitoria1').innerText = Jogador1.numVitorias;

        Jogador2.numVitorias = Jogador2.numVitorias + 1;
        document.getElementById('jogador2').innerText = Jogador2.nome;
        document.getElementById('vitoria2').innerText = Jogador2.numVitorias;

        verEmpate = true;
        alert("Jogador: " + Jogador2.nome + " Campeão");
    }
}
function reiniciaPartida()
{
    if (flag == 2) {
        alert("Quem começa: "+Jogador2.nome);
        document.getElementById("jogadorAtual").innerText = " " + Jogador2.nome;
        document.getElementById("peca").innerText = " " + Jogador2.peca;
    } else {
        alert("Quem começa: " + Jogador1.nome);
        document.getElementById("jogadorAtual").innerText = " " + Jogador1.nome;
        document.getElementById("peca").innerText = " " + Jogador1.peca;
    }
    
    Jogadas[0][0] = 1;
    Jogadas[1][0] = 2;
    Jogadas[2][0] = 3;
    Jogadas[0][1] = 4;
    Jogadas[1][1] = 5;
    Jogadas[2][1] = 6;
    Jogadas[0][2] = 7;
    Jogadas[1][2] = 8;
    Jogadas[2][2] = 9;

    document.getElementById("Btn1").innerText = "";
    document.getElementById("Btn2").innerText = "";
    document.getElementById("Btn3").innerText = "";
    document.getElementById("Btn4").innerText = "";
    document.getElementById("Btn5").innerText = "";
    document.getElementById("Btn6").innerText = "";
    document.getElementById("Btn7").innerText = "";
    document.getElementById("Btn8").innerText = "";
    document.getElementById("Btn9").innerText = "";

    document.getElementById("Btn1").removeAttribute("disabled");
    document.getElementById("Btn2").removeAttribute("disabled");
    document.getElementById("Btn3").removeAttribute("disabled");
    document.getElementById("Btn4").removeAttribute("disabled");
    document.getElementById("Btn5").removeAttribute("disabled");
    document.getElementById("Btn6").removeAttribute("disabled");
    document.getElementById("Btn7").removeAttribute("disabled");
    document.getElementById("Btn8").removeAttribute("disabled");
    document.getElementById("Btn9").removeAttribute("disabled");
}
function resetaPartida()
{
    $("#Jogadores").addClass('DisplayBlock');
    $("#jogo").removeClass("DisplayBlock");
    $("#jogo").addClass("DisplayNone");
    Empate = 0
    numJogadas = 0;

    document.getElementById('jogador1').innerText = "";
    document.getElementById('vitoria1').innerText = "";

    document.getElementById('jogador2').innerText = "";
    document.getElementById('vitoria2').innerText = "";
    
    document.getElementById('empate').innerText = "";

    Jogador1.nome = "";
    Jogador1.peca = "";
    Jogador1.numVitorias = 0;

    Jogador2.nome = "";
    Jogador2.peca = "";
    Jogador2.numVitorias = 0;
    
    document.getElementById("Jog1").value = "";
    document.getElementById("Jog2").value = "";

    document.getElementById("opJog1O").removeAttribute('disabled');
    document.getElementById("opJog2O").removeAttribute('disabled');

    document.getElementById("opJog1X").removeAttribute('disabled');
    document.getElementById("opJog2X").removeAttribute('disabled');

    document.getElementById("opJog1O").checked=false;
    document.getElementById("opJog2O").checked=false;

    document.getElementById("opJog1X").checked=false;
    document.getElementById("opJog2X").checked = false;

    document.getElementById("iniciaJog1").checked = false;
    document.getElementById("iniciaJog2").checked = false;

    document.getElementById("Btn1").removeAttribute("disabled");
    document.getElementById("Btn2").removeAttribute("disabled");
    document.getElementById("Btn3").removeAttribute("disabled");
    document.getElementById("Btn4").removeAttribute("disabled");
    document.getElementById("Btn5").removeAttribute("disabled");
    document.getElementById("Btn6").removeAttribute("disabled");
    document.getElementById("Btn7").removeAttribute("disabled");
    document.getElementById("Btn8").removeAttribute("disabled");
    document.getElementById("Btn9").removeAttribute("disabled");

    Jogadas[0][0] = 1;
    Jogadas[1][0] = 2;
    Jogadas[2][0] = 3;
    Jogadas[0][1] = 4;
    Jogadas[1][1] = 5;
    Jogadas[2][1] = 6;
    Jogadas[0][2] = 7;
    Jogadas[1][2] = 8;
    Jogadas[2][2] = 9;

    document.getElementById("Btn1").innerText = "";
    document.getElementById("Btn2").innerText = "";
    document.getElementById("Btn3").innerText = "";
    document.getElementById("Btn4").innerText = "";
    document.getElementById("Btn5").innerText = "";
    document.getElementById("Btn6").innerText = "";
    document.getElementById("Btn7").innerText = "";
    document.getElementById("Btn8").innerText = "";
    document.getElementById("Btn9").innerText = "";
}