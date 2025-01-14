const multi1 = document.querySelector("#input1");
const multi2 = document.querySelector("#input2");
const results = document.querySelector("#calculos");

const operation = document.querySelector("#results");

const createTable = (valuex,valuey) =>{
    operation.innerHTML = "";
    for(let i=1;i<=valuey;i++){
        const result = valuex * i;
        
        const DomTest = `<div class="row">
        <div id="calculus">${valuex} x ${i} = ${result}
        </div>`
        const parser = new DOMParser()
        const htmlTemp = parser.parseFromString(DomTest,"text/html")

        const row = htmlTemp.querySelector(".row")

        operation.appendChild(row)
    }
}
results.addEventListener("submit",(event) =>{
    event.preventDefault();
    const value1 =+ multi1.value;
    const value2 =+ multi2.value;
    if(!value1 || !value2) return;

   createTable(value1,value2)
    


})