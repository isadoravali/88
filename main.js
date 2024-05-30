// Declaração de variáveis globais para armazenar a última posição do mouse
var lastPositionOfX, lastPositionOfY;

// Obtenção do elemento canvas e contexto 2D
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// Inicialização de variáveis de cor e largura da linha
color = "black";
widthOfLine = 1;

// Adição de um ouvinte de evento para o clique do mouse
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    // Início da Atividade Adicional: Obtém a cor e a largura da linha do HTML
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    // Fim da Atividade Adicional

    // Define o evento do mouse como "mousedown"
    mouseEvent = "mousedown";
}

// Adição de ouvintes de eventos para o levantamento e saída do mouse
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    // Define o evento do mouse como "mouseup"
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    // Define o evento do mouse como "mouseleave"
    mouseEvent = "mouseleave";
}

// Adição de um ouvinte de evento para o movimento do mouse
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    // Obtenção das coordenadas atuais do mouse em relação ao canvas
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    // Verifica se o botão do mouse está pressionado
    if (mouseEvent == "mousedown") {
        // Configura o contexto para desenhar
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        // Exibe no console a última e a atual posição do mouse
        console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);

        // Move para a última posição do mouse e desenha uma linha até a posição atual
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
    }

    // Atualiza as últimas posições do mouse
    lastPositionOfX = currentPositionOfMouseX; 
    lastPositionOfY = currentPositionOfMouseY;
}

// Função adicional para limpar a área do canvas
function clearArea () {
    ctx.clearReact(0, 0, ctx.canvas.width, ctx.canvas.height);
}