const teste = document.querySelector('#submit') //pegando o botão
const names = document.querySelector('#name') //pegando os nomes
const view = document.querySelector('.view_names') //pegando a div onde os nomes serão exibidos
const remove = document.querySelector('#sort');


teste.addEventListener('click',(e)=>{
    names.innerHTML="Novo nome";
    if(!names.value){
        alert("Adicione um nome!")
        
    }

    const newName = document.createElement("p")
    newName.innerHTML = names.value;
    view.appendChild(newName)
    e.preventDefault();
})

remove.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(view.childElementCount==0){
        alert("Não há nomes para serem sorteados!")
    }
    
    const nomes = view.children;
    sorteado =Math.floor(Math.random()*nomes.length);
    alert(`O nome sorteado foi ${nomes[sorteado].textContent
    }`)
    view.removeChild(nomes[sorteado])
   
})