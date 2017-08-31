var flag;
var pecaJog1; 
var pecaJog2;
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
    alert(inicio);
    
    if (inicio == 1) {
        pecaJog1  = form.opJog1.value;
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + NomeJog1;
        document.getElementById("peca").innerText = "Simbolo:" + peca;
        flag = 1;
    }
    else
    {
        pecaJog2 = form.opJog2.value;
        document.getElementById("jogadorInicial").innerText = "Jogador Inicial:" + NomeJog2;
        document.getElementById("peca").innerText = "Jogador Inicial:" + peca;
        flag = 2;
    }
    $("#Jogadores").addClass('DisplayNone');
    $("#jogo").removeClass("DisplayNone");
    $("#jogo").addClass("DisplayBlock");
}
function Jogada(op)
{
    if (flag == 1)
    {
        document.getElementById(op).innerText = "X";
    }
}