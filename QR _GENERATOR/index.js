const submit = document.querySelector("#generator")
const text=document.querySelector("#submit");  
const code = document.querySelector("#display_qr")
const value = document.querySelector("#text")

const codeGenerator = () =>{
    code.style.border='solid 2px #808080';
    
    text.value="QR gerado com sucesso!!";
    code.innerHTML="";
    const DomTest = `<img class="row" src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value.value}">`
    const parser = new DOMParser()
    const htmlTemp = parser.parseFromString(DomTest,"text/html")

    const row = htmlTemp.querySelector(".row")

    code.appendChild(row)
}

submit.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    submit.style.height='auto';
    if(!value.value){
        code.style.border="none"
        return code.innerHTML="Entre com algum link ou texto!" 
        
    }

    codeGenerator()

})