
var x;
x = 0;

var fruits = [
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
fruits.forEach(myFunction => {
    x += myFunction.price;
}
);

console.log(x);

itms = [];

function check(num) {
    fruits.forEach(prou => {
        if (prou.addres == num)
            itms.push(prou);
    });
    return itms;
}

console.log(check("address3"));




