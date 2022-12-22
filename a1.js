function searchFunc(){
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textValue = td.textContent || td.innerHTML;

            if(textValue.toLocaleUpperCase().indexOf(filter) >-1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

async function api() {
    
    let products = await fetch("https://62e6bd340e5d74566aebd18b.mockapi.io/api/v1/products");
    products = await products.json();
    let data = Object.values(products);
    
    console.log(data[0]);
    
    document.getElementById('myTable').innerHTML = data[0].map((product) => 
       
          `<tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.color}</td>
              <td>${product.availability}</td>    
            </tr>`
).join("");
}
api();