var Jogador1;
// função que escolhe x ou bolinha
function SelecionaPeca(jog, op) {
    switch (jog)
    {
        case "Jog1":
            if (op == 'X')
            {
                document.getElementById("opJog1O").disabled = true;
                document.getElementById("opJog2O").removeAttribute('disabled');

            }
            else
            {
                document.getElementById("opJog1X").disabled = true;
                document.getElementById("opJog2X").removeAttribute('disabled');
            }
            break;
        case "Jog2":
            if (op == 'X') {
                document.getElementById("opJog2O").disabled = true;
                document.getElementById("opJog1O").removeAttribute('disabled');
            }
            else
            {
                document.getElementById("opJog2X").disabled = true;
                document.getElementById("opJog1X").removeAttribute('disabled');
            }
            break;
    }
}
function CadastraJogadores()
{
    var form1 = document.getElementById('formCadJog');
    Jogador1 = form1.Jog1.value;
    alert(Jogador1);
}
function Jogada(op)
{
    document.getElementById(op).innerText = "X";
}