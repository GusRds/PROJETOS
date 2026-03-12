const openModal = document.querySelector("#add_book");
const modalAdd = document.querySelector("#add_modal");
const submit = document.querySelector("#submit_form");
const cancel = document.querySelector("#cancel")
const livros =document.querySelector(".show_books");

const library = [];


function toggleRead(index){
    library[index].read = (library[index].read === "Sim") ? "Não" : "Sim";

    renderBooks()
}

function removeBook(index){
    library.splice(index, 1);

    renderBooks()
}


function renderBooks (){
    livros.innerHTML = " "

    library.forEach((livro, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
                <h3>${livro.title}</h3>
            <p><strong>Autor:</strong> ${livro.author}</p>
            <p><strong>Ano:</strong> ${livro.year}</p>
            <p><strong>Lido:</strong> ${livro.read}</p>
           
            <button onclick="removeBook(${index})">Remover</button>
            <button onclick="toggleRead(${index})">
            Marcar como ${livro.read === "sim" ? "não" : "Lido"}
        </button>
        `
        livros.appendChild(card);
    });
    

}



function toLibrary(title, author, year, read){
    
    const newBook = new Book(title, author, year, read);
    library.push(newBook)
}

class Book {

    constructor (title, author, year, read){

        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;


    }

    getInfo(){
        console.log(`${this.title}, ${this.author}, ${this.year}, ${this.read}`)
    }

    
}


openModal.addEventListener('click', (e) =>{
    modalAdd.show()

})

submit.addEventListener('click', (e) => {
    const form = document.querySelector("#form");
    const dados = new FormData(form);

    // Extrai tudo de uma vez do FormData
    const title = dados.get("title");
    const author = dados.get("author");
    const year = dados.get("year");
    const read = dados.get("read");

    if(title && author) { // Validação simples
        toLibrary(title, author, year, read);
        form.reset();
        modalAdd.close();
        renderBooks();
    }
});

cancel.addEventListener('click', ()=>{
    modalAdd.close();
})