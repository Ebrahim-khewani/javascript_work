

var itemofproducts = [
    {
        addres: "address",
        dtl: "dtl",
        price: 3,
        img: " "
    },
    {
        addres: "address2",
        dtl: "dtl2",
        price: 2,
        img: " "
    }
    ,
    {
        addres: "address3",
        dtl: "dtl3",
        price: 5,
        img: " "
    }
];

var totalofprice = 0;

itemofproducts.forEach(functionTotalprod => {
    totalofprice += functionTotalprod.price;
}
);

console.log(totalofprice);

itemsfound = [];
let itemserch = function (txtserch) {
    itemsfound.splice(0, itemsfound.length);
    itemofproducts.forEach(product => {
        // if (product.addres === se)
         if (product.addres === txtserch)
        itemsfound.push(product);
    });
 
    if (itemsfound === null || itemsfound.length === 0) {
        // console.log("Item not Found");
        
       document.getElementById("results").innerHTML  = "Not found"+' '+txtserch;
         //console.log(se);
      } else {
        document.getElementById("results").innerHTML  = "found"+' '+txtserch;
        //console.log('found'+ se);
      }
     
    // return itemsfound;
}

//console.log(itemserch("address3"));


const btnserch =   document.getElementById('btn-serch');

var inputserc = document.querySelector('#serch')

btnserch.addEventListener('click', ()=>{
    
    itemserch(inputserc.value);
});

//document.getElementById("demo").innerHTML = document.getElementById('serch').value;
//  const element = document.getElementById("myBtn");
//   element.addEventListener("click", myFunction);
//  function myFunction() {
//    document.getElementById("demo").innerHTML = document.getElementById('serch').value;
// }
//  document.addEventListener('DOMContentLoaded', function() {
//      var button = document.querySelector('#btn-serch');
//      button.addEventListener('click', itemserch(document.querySelector('#serch')));
//    });
//  }
