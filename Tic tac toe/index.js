const tabuleiro = function (){
    let posições = ["","","","","","","","",""];


    function estaCheio(){
        const cheio = posições.includes("")
        return !cheio
    }

    function getTabuleiro(){
        return posições;
    }

    function marcarCasa(posição, simbolo){
        if(posições[posição] === ""){
            posições[posição] = simbolo;
            return true;
        }
        return false;
    }

    function resetar(){
        posições.forEach((element, index)=> {
            posições[index] = ""
        });
    }

    return {
        getTabuleiro, marcarCasa, resetar, estaCheio
    }
}();

function criarJogador(name, simbolo){

    return{
        name, simbolo
    }




}

const judge = function(){
    const jogador1 = criarJogador("Gustavo", "X");
    const jogador2 = criarJogador("Marcelo", "O");
    
    let jogadorAtual = jogador1;

    function jogarRodada(posição){
       
        const marcouSucesso = tabuleiro.marcarCasa(posição, jogadorAtual.simbolo);
        
      
        if (!marcouSucesso) return false;

        
        const alguemVenceu = checarVencedor(); 

       
        if (!alguemVenceu) {
            jogadorAtual = (jogadorAtual === jogador1) ? jogador2 : jogador1;
        }
       
        
        return alguemVenceu; 
    }
    function resetarTurno() {
        jogadorAtual = jogador1;
    }

    const vencedor = [[0,1,2],[3,4,5],[6,7,8]
                ,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  function checarVencedor(){
        const gavetas = tabuleiro.getTabuleiro();
        let teveVencedor = false;  
        
        vencedor.forEach((element)=> {
           const conteudoA = gavetas[element[0]];
           const conteudoB = gavetas[element[1]];
           const conteudoC = gavetas[element[2]];

            if(conteudoA === conteudoB && conteudoA === conteudoC && conteudoA !== ""){
                console.log(`${jogadorAtual.name} venceu!`);
                teveVencedor = true; 
            }
        });
        
        return teveVencedor; 
    }

    return{
        jogarRodada,resetarTurno
    }
}();


const DisplayController = function (){
    const celulas = document.querySelectorAll(".celula");

    function render(){
        const gavetas = tabuleiro.getTabuleiro();

        celulas.forEach((element, index) => {
            const simbolonoArray = gavetas[index];

            element.classList.remove("X", "O");

            element.textContent = simbolonoArray;

            if (simbolonoArray !== "") {
            element.classList.add(simbolonoArray); 
        }
            element.textContent = gavetas[index]; 
        });
    }

    celulas.forEach((element) =>{
        element.addEventListener("click", ()=>{
            
            const fimDeJogo = judge.jogarRodada(element.dataset.index);
            const empate = tabuleiro.estaCheio();

           
           
            render(); 
            
            if (fimDeJogo === true) {
          
                setTimeout(() => {
                    alert("Temos um vencedor! O jogo vai recomeçar."); 
                    tabuleiro.resetar(); 
                    render();
                    judge.resetarTurno();
                }, 10); 
            }else if(empate===true){
                setTimeout(() => {
                     alert("Jogo empatado! resetando...")
                    tabuleiro.resetar();
                    judge.resetarTurno(); 
                    render();
                }, 10);
               
            }
            
        });
    });
    
}();
