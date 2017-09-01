var flag;
var verEmpate=true;
var Jogadas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var Jogador1 = [{ nome: "" , peca: "" , numVitorias: 0 }];
var Jogador2 = [{ nome: "", peca: "", numVitorias: 0 }];
Jogador1.numVitorias = 0;
Jogador2.numVitorias = 0;
var Empate = 0;
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
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + Jogador1.nome;
        document.getElementById("peca").innerText = "Simbolo:" + Jogador1.peca;
        flag = 1;
    }
    else
    {
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + Jogador2.nome;
        document.getElementById("peca").innerText = "Jogador Inicial:" + Jogador2.peca;
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
        checkJogo(op);
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
        checkJogo();
    }
}

function checkJogo()
{
    // valida pela tranversal linhas e colunas iguais 
    if (Jogadas[0][0] == Jogadas[1][1] && Jogadas[2][2] == Jogadas[1][1])
    {
        verficaCampeao();
        verEmpate = false;
        alert(flag);
        Empate = flag;
    }
    if (Jogadas[0][2] == Jogadas[1][1] && Jogadas[1][1] == Jogadas[2][0])
    {
        verEmpate = 1;
        verficaCampeao();
        Empate = flag;
        alert(flag);
    }

    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            // valida pelas linhas na horizontal
            if (j==0 && Jogadas[j][i] == Jogadas[j + 1][i] && Jogadas[j][i] == Jogadas[j + 2][i])
            {
                verficaCampeao();
                verEmpate = false;
                Empate = flag;
                alert(flag);
            }
            ////valida pela linhas verticais
            if (i == 0 && Jogadas[j][i] == Jogadas[j][i + 1] && Jogadas[j][i] == Jogadas[j][i + 2])
            {
                verficaCampeao();
                verEmpate = false;
                Empate = flag;
                alert(flag);
            }       
        }
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


        if (Empate==2) {
            Jogador1.numVitorias = Jogador1.numVitorias + 1;
            document.getElementById('jogador1').innerText = Jogador1.nome;
            document.getElementById('vitoria1').innerText = Jogador1.numVitorias;

            document.getElementById('jogador2').innerText = Jogador2.nome;
            document.getElementById('vitoria2').innerText = Jogador2.numVitorias;
        }
        else if(Empate==1) {
            document.getElementById('jogador1').innerText = Jogador1.nome;
            document.getElementById('vitoria1').innerText = Jogador1.numVitorias;

            Jogador2.numVitorias = Jogador2.numVitorias + 1;
            document.getElementById('jogador2').innerText = Jogador2.nome;
            document.getElementById('vitoria2').innerText = Jogador2.numVitorias;
        }
        else if(Empate==0) {
            alert(Empate);
            document.getElementById('jogador1').innerText = Jogador1.nome;
            document.getElementById('vitoria1').innerText = Jogador1.numVitorias;
            document.getElementById('jogador2').innerText = Jogador2.nome;
            document.getElementById('vitoria2').innerText = Jogador2.numVitorias;
            Empate = Empate + 1;
            document.getElementById('empate').innerText = Empate;

        }


 
}
function resetPartida()
{
    if (flag == 2) {
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + Jogador2.nome;
        document.getElementById("peca").innerText = "Jogador Inicial:" + Jogador2.peca;
    }else{
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + Jogador1.nome;
        document.getElementById("peca").innerText = "Jogador Inicial:" + Jogador1.peca;
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
}