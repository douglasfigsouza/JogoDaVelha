var flag;
var pecaJog1; 
var pecaJog2;
var Jogadas = [[1,2,3],[4,5,6],[7,8,9]];
// função que escolhe x ou bolinha
function SelecionaPeca(jog, op) {
    switch (jog)
    {
        case "Jog1":
            if (op == 'X')
            {
                pecaJog1 = "X";
                document.getElementById("opJog2X").disabled = true;
                document.getElementById("opJog2O").removeAttribute('disabled');

            }
            else
            {
                pecaJog1 = "O";
                document.getElementById("opJog2O").disabled = true;
                document.getElementById("opJog2X").removeAttribute('disabled');
            }
            break;
        case "Jog2":
            if (op == 'X')
            {
                pecaJog2 = "X";
                document.getElementById("opJog1X").disabled = true;
                document.getElementById("opJog1O").removeAttribute('disabled');
            }
            else
            {
                pecaJog2="O"
                document.getElementById("opJog1O").disabled = true;
                document.getElementById("opJog1X").removeAttribute('disabled');
            }
            break;
    }
}
function CadastraJogadores()
{
    var form = document.getElementById('formCadJog');
    var NomeJog1 = form.Jog1.value;
    var NomeJog2 = form.Jog2.value;
    var inicio = form.inicia.value;
    
    if (inicio == 1) {
        pecaJog1 = form.opJog1.value;
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + NomeJog1;
        document.getElementById("peca").innerText = "Simbolo:" + pecaJog1;
        flag = 1;
    }
    else
    {
        pecaJog2 = form.opJog2.value;
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + NomeJog2;
        document.getElementById("peca").innerText = "Jogador Inicial:" + pecaJog2;
        flag = 2;
    }
    $("#Jogadores").addClass('DisplayNone');
    $("#jogo").removeClass("DisplayNone");
    $("#jogo").addClass("DisplayBlock");
}
function Jogada(op)
{
    if (flag == 1) {
        document.getElementById(op).innerText = pecaJog1;
        document.getElementById(op).value = op;
        document.getElementById(op).disabled= true;
        flag = 2;
        switch (op)
        {
            case "Btn1":
                Jogadas[0][0] = pecaJog1;
                break;
            case "Btn2":
                Jogadas[1][0] = pecaJog1;
                break;
            case "Btn3":
                Jogadas[2][0] = pecaJog1;
                break;
            case "Btn4":
                Jogadas[0][1] = pecaJog1;
                break;
            case "Btn5":
                Jogadas[1][1] = pecaJog1;
                break;
            case "Btn6":
                Jogadas[2][1] = pecaJog1;
                break;
            case "Btn7":
                Jogadas[0][2] = pecaJog1;
                break;
            case "Btn8":
                Jogadas[1][2] = pecaJog1;
                break;
            case "Btn9":
                Jogadas[2][2] = pecaJog1;
                break;
        }
        checkJogo(op);
    }
    else
    {
        document.getElementById(op).innerText = pecaJog2;
        document.getElementById(op).value = op;
        document.getElementById(op).disabled = true;
        flag = 1;
        switch (op) {
            case "Btn1":
                Jogadas[0][0] = pecaJog2;
                break;
            case "Btn2":
                Jogadas[1][0] = pecaJog2;
                break;
            case "Btn3":
                Jogadas[2][0] = pecaJog2;
                break;
            case "Btn4":
                Jogadas[0][1] = pecaJog2;
                break;
            case "Btn5":
                Jogadas[1][1] = pecaJog2;
                break;
            case "Btn6":
                Jogadas[2][1] = pecaJog2;
                break;
            case "Btn7":
                Jogadas[0][2] = pecaJog2;
                break;
            case "Btn8":
                Jogadas[1][2] = pecaJog2;
                break;
            case "Btn9":
                Jogadas[2][2] = pecaJog2;
                break;
        }
    }
    checkJogo();
}

function checkJogo(op)
{
    for (var i = 0; i < 2; i++)
    {
        for (var j = 0; j < 2; j++)
        {
            alert(j + " " + i);
            alert(Jogadas[i][j]);
        }
    }
}