let sneakers = JSON.parse(localStorage.getItem('item')) ?
JSON.parse(localStorage.getItem('item')) :
[
    {
        id: 1,
        image:"https://i.postimg.cc/13nTNWZp/Sneaker1.png",
        name:"PUMA MEN'S CAVEN TAPE WHITE SNEAKER",
        color:"WHITE",
        type:"SHOE",
        brand:"PUMA",
        price:1099,
    },
    {
        id: 2,
        image:"https://i.postimg.cc/tTX2Dk8v/Sneaker2.png",
        name:"NIKE MEN'S AIR MAX 97 WHITE/YELLOW SNEAKER",
        color:"WHITE",
        type:"SHOE",
        brand:"NIKE",
        price:3599,
    },
    {
        id: 3,
        image:"https://i.postimg.cc/L55vFX9z/Sneaker3.png",
        name:"ADIDAS ORIGINALS MEN'S NITEBALL",
        color:"YELLOW",
        type:"SHOE",
        brand:"ADIDAS",
        price:2199,
    },
    {
        id: 4,
        image:"https://i.postimg.cc/kMYfFxsw/Sneaker4.png",
        name:"NIKE JUNIOR AIR FORCE 1 HIGH LV8 3",
        color:"TAN",
        type:"HIGH-TOP",
        brand:"NIKE",
        price:2099,
    },
    {
        id: 5,
        image:"https://i.postimg.cc/9F41xrN2/Sneaker5.png",
        name:"FILA MEN'S SPAGHETTI AZTEC CREAM SNEAKER",
        color:"CREAM",
        type:"HIGH-TOP",
        brand:"FILA",
        price:2199,
    },
    {
        id: 6,
        image:"https://i.postimg.cc/BZmw7WST/Sneaker6.png",
        name:"ASICS MEN'S JAPAN STONE SNEAKER",
        color:"STONE",
        type:"SHOE",
        brand:"ASICS",
        price:1399,
    },
    {
        id: 7,
        image:"https://i.postimg.cc/8CdZh9Xr/Sneaker7.png",
        name:"VANS MEN'S OLD SKOOL PRIDE WHITE SNEAKER",
        color:"WHITE",
        type:"SHOE",
        brand:"VANS",
        price:1099,
    },
    {
        id: 8,
        image:"https://i.postimg.cc/3Nq18TNz/Sneaker8.png",
        name:"NEW BALANCE MEN'S 574 PREMIUM OG GREY SNEAKER",
        color:"GREY",
        type:"SHOE",
        brand:"NEW BALANCE",
        price:1899,
    },
];

function displayed(){
    sneakers.forEach((item)=>{
        document.querySelector('#my-products').innerHTML+=`
        <div class="card m-3 p-2 text-center" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="..." style="height:18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Color: ${item.color}</p>
    <p class="card-text">Type: ${item.type}</p>
    <p class="card-text">Price: R${item.price}</p>
    <a href="#" class="btn btn-primary">Purchase</a>
  </div>
</div>`
    })
};

displayed();

localStorage.setItem('item', JSON.stringify(sneakers));