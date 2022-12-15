
function buttonClicked(){
    let container = document.getElementById("container");
    container.style.display = "none";

    document.getElementById("checkout").style.display = 'flex';


    /////////////////////////////    NAME SECTION      ////////////////////////////////////////////////////////

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById('lastName').value;   
    let name = document.getElementById("name");
    name.innerHTML = firstName + " " + lastName;

    ////////////////////////////     ADDRESS SECTION    ///////////////////////////////////////////////////////

    let address = document.getElementById("address").value;
    document.getElementById("checkOutAddress").innerHTML = address;

    ///////////////////////////////DELIVERY TYPE////////////////////////////////////////////////////////////////////////////
    let deliveryType = document.getElementById("deliveryType").value;
    document.getElementById("delivery").innerHTML = deliveryType;


    ///////////////////////////      ORDER SECTION      ////////////////////////////////////////////
    
    
    const porkPrice = 5.00;
    const chickenPrice = 7.00;
    const vegetablePrice = 30.00;
    const fruitPrice = 20.00;
    
    let vegetable = document.getElementById("vegetable").value;
    let fruit = document.getElementById("fruit").value;
    let chicken = document.getElementById("chicken").value;
    let pork = document.getElementById("pork").value;
    console.log(fruit);
    
    if(vegetable > 0){
        document.getElementById("checkVegetable").innerHTML = vegetable + " " + "x Vegetable Hamper";
        
    }
    else {
        document.getElementById("checkVegetable").style.display = "none";
    }
    
    if(fruit > 0){
        document.getElementById("checkFruit").innerHTML = fruit + " " + "x Fruit Hamper";
        
    }
    else {
        document.getElementById("checkFruit").style.display = "none";
    }
    
    if(chicken > 0){
        document.getElementById("checkChicken").innerHTML = chicken + " " + "x Chicken";
        
    }
    else {
        document.getElementById("checkChicken").style.display = "none";
    }
    
    if(pork > 0){
        document.getElementById("checkPork").innerHTML = pork + " " + "x Pork";
        
    }
    else {
        document.getElementById("checkPork").style.display = "none";
    }
    
    let totalValue = (vegetable*vegetablePrice) + (fruit*fruitPrice) + (chicken*chickenPrice) + (pork*porkPrice);
    document.getElementById("totalValue").innerHTML = "Total order: " + "$" + (totalValue).toFixed(2);
    console.log((totalValue).toFixed(2));

    function validate(){
        var x = document.querySelectorAll('#Form1 input').value;
        if (x == "" || x == null) {
          alert("Name must be filled out");
          return false;
        }        
    }

    document.querySelector("#logo").addEventListener("click", function refresh(){
        location.reload();
    });
    
}

