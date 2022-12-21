function searchFun(){
    const search_box=document.getElementById("search-item").value.toUpperCase();
    const all_product=document.getElementById("all-product")
    const individual_product=document.querySelectorAll(".product")
    const product_name=all_product.getElementsByTagName("h2")
    for(var i=0;i<(product_name.length);i++){
        let match=individual_product[i].getElementsByTagName('h2')[0];

        if(match){
           let textvalue= match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(search_box) > -1){
            individual_product[i].style.display="";
           }
           else{
            individual_product[i].style.display="none";
           }
        }
    }
}