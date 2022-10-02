//Selectors

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector("#rows");
let total = document.querySelector("#total");




//Functions
function deleteRow(event){
    if (confirm("Are you sure want to delete?")){
        event.target.parentElement.parentElement.remove();
        calculateTotal();
    }
}

function calculateTotal(){
    let costs =document.querySelectorAll(".cost");
    total.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
}



//Process

products.forEach(function (product){
    let newOption = new Option(product.name,product.id);
    items.append(newOption);
})


inputForm.addEventListener("submit",function (e){
    e.preventDefault();
    let currentProduct = products.find(product=>product.id==items.value);
    let cost = currentProduct.price * quantity.valueAsNumber;
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
        <td>
            ${currentProduct.name}
            <p class="del-btn small text-danger" onclick="deleteRow(event)"> Delete </p>
        </td>
        <td class="text-end">${currentProduct.price}</td>
        <td class="text-end">${quantity.valueAsNumber}</td>
        <td class="text-end cost w-25">${cost}</td>
    `;
    rows.append(newTr);
    inputForm.reset();
    calculateTotal();
})