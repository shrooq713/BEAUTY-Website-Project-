// console.log("in js");
// fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
// .then(function(response) {
//   return response.json()})
//   .then(function (json) { 
//     storeData(json)
//     // homePage()
// })
homePage()
function homePage() {
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)
  adv(body)
  category(body)
  Recommended(body)
  footer(body)

}

function storeData(json) {
  let arr = []
  for (let i = 0; i < 28; i++) {
    if (i==3||i==4||i==5||i==6) {
      continue
    }
    arr[i]=json[i]
  }
  // from 3-6 skip
  // from 7-24 >>>removeFirstChar = str.slice(8);
  
  localStorage.setItem("products",JSON.stringify(arr))
  console.log("Data is know in local store!");
}
// Helper functions
function nav(body) {
  const div = document.createElement("div")
  div.className = "nav"
  const imgLogo = document.createElement("img")
  imgLogo.src = "Image/Logo.png"
  imgLogo.id ="logo"
  console.log("img "+imgLogo.src);

  const offers = document.createElement("button")
  offers.className = "nav"
  offers.innerText = "offers"

  const homePageB = document.createElement("button")
  homePageB.innerText="Home Page"
  homePageB.className = "nav"

  const cartB = document.createElement("button")
  cartB.className = "nav"
  const CartImg = document.createElement("img")
  CartImg.src = "Image/cart.png"
  CartImg.id="cart"

  const p = document.createElement("p")
  p.className="count"
  p.innerText =localStorage.getItem('CardCount')

  cartB.append(CartImg)
  cartB.append(p)

  const signIn = document.createElement("button")
  signIn.innerText="Sign In"
  signIn.className = "nav"
  div.append(imgLogo)
  div.append(homePageB)
  div.append(cartB)
  div.append(signIn)
  body.append(div)
  signIn.addEventListener("click", function() {
    signInPage()
  })
  cartB.addEventListener("click", function() {
    orderPage()
  })

  homePageB.addEventListener("click", function() {
    homePage()
  })

  
}

function productPage(product) {
  console.log("inside product page");
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)


  const div = document.createElement("div")
  div.className = "product"
  
  // const h2 = document.createElement("h2");
  // h2.className = "product"
  // h2.innerText = "Products:"
  // div.append(h2)
  const divP = document.createElement("div")
  divP.className ="productParent"
  
    const img = document.createElement("img");
    img.className = "product"
    img.id = "imgProduct"
    // temp = testImage(img,products[i].image_link)
    // if (temp==null) {
    //   console.log("inside continue");
    //   continue
    // }
    img.src = product.image_link
    img.style.width = "400px"


    const name = document.createElement("p");
    name.className = "recomended"
    name.innerText= product.name

    const brand = document.createElement("p");
    brand.className = "recomended"
    brand.innerText= product.brand 

    //color div
    const colorDiv = document.createElement("div");
    let colorArr =[]
    for (let i = 0; i <5; i++) {
      const colorsB = document.createElement("button");
      colorsB.className = "colorsB"
      colorsB.style.backgroundColor = product.product_colors[i].hex_value 
      colorsB.style.borderRadius = "200px"
      colorsB.style.width = "50px"
      colorsB.style.height = "50px"
      colorDiv.append(colorsB)
    }

    const price = document.createElement("p");
    price.className = "recomended"
    price.innerText= product.price + product.price_sign

    const addToCart = document.createElement("button");
    addToCart.className = "addToCart"
    addToCart.innerText= "Add to cart"

    divP.append(img)
    divP.append(name)
    divP.append(brand)
    divP.append(price)
    divP.append(colorDiv)
    divP.append(addToCart)
  
    body.append(divP)

  // ............................
  //Create img , name ,prand,
  footer(body)
  // const colorsButton = document.querySelector(".colorsB")
  // for (let i = 0; i < colorsButton.length; i++) {
  //   let button = colorsButton[i]
  //   button.addEventListener("click", function() {
  //     save
  //       console.log("hiii color");
  //   })
  // }

  let addToCartButtons = document.getElementsByClassName('addToCart')
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener("click", function() {
        cardCount(product)
        totalPrice(product)
        console.log("item added to cart");
    })
  }
}

function orderPage() {
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)

  const div = document.createElement("div")
  div.className = "order"
  const h2 = document.createElement("h2")
  h2.innerText = "Order details"
  const div1 = document.createElement("div")
  div1.className = "productInCard"
  const price = document.createElement("p")
  price.id = "price"
  const totalP = document.createElement("p")
  totalP.id = "totalPrice"
  div.append(h2)
  div1.append(price)
  div1.append(totalP)
  div.append(div1)
  body.append(div)
  
  const form = document.createElement("form")
  form.className="formOrder"
  const div11 = document.createElement("div")
  const name = document.createElement("label")
  name.innerText = "Enter your name: "
  const inputName = document.createElement("input")
  inputName.type ="text"

  const phone = document.createElement("label")
  phone.innerText = "Enter your phone number: "
  const inputphone = document.createElement("input")
  inputphone.type ="phone"
  const div22 = document.createElement("div")

  const div33 = document.createElement("div")
  const city = document.createElement("label")
  city.innerText = "City: "
  const inputCity = document.createElement("input")
  inputCity.type ="text"


  const sumbitB = document.createElement("input")
  sumbitB.type ="submit"
  sumbitB.innerText = "Order"
  sumbitB.className="sumbitB"
  const div44 = document.createElement("div")

  div11.append(name)
  div11.append(inputName)
  div22.append(phone)
  div22.append(inputphone)
  div33.append(city)
  div33.append(inputCity)

  form.append(div11)
  form.append(div22)
  
  div33.append(sumbitB)
  form.append(div33)

  div44.append(sumbitB)
  form.append(div44)
  div.append(form)
  body.append(div)
  footer(body)

}
function signInPage() {
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)
  
  const div = document.createElement("div")
  div.className = "signIn"
  const imgLogo = document.createElement("img")
  imgLogo.src = "Image/Logo.png"
  imgLogo.id ="logoSing"
  div.append(imgLogo)

  const form = document.createElement("form")
  form.className="formSingin"
  const div1 = document.createElement("div")
  const userName = document.createElement("label")
  userName.innerText = "Enter user name: "
  const inputUsername = document.createElement("input")
  inputUsername.type ="text"
  inputUsername.id = "userName"

  const password = document.createElement("label")
  password.innerText = "Enter Password: "
  const inputPassword = document.createElement("input")
  inputPassword.type ="password"
  const div2 = document.createElement("div")
  inputPassword.id = "password"

  const sumbitB = document.createElement("input")
  sumbitB.type ="submit"
  sumbitB.className="sumbitB"
  const div3 = document.createElement("div")

  div1.append(userName)
  div1.append(inputUsername)
  div2.append(password)
  div2.append(inputPassword)
  form.append(div1)
  form.append(div2)
  
  div3.append(sumbitB)
  form.append(div3)
  div.append(form)
  body.append(div)
  footer(body)

  sumbitB.addEventListener("click", function() {
    storeUser()
    changeUserName()
})
}
function storeUser(){
  let users = localStorage.getItem("users")
  // let randomKey = (Math.random() + 1).toString(36).substring(7);
  // console.log("random", randomKey);
  let inputUserName= document.getElementById("userName").value
  let inputPassword= document.getElementById("password").value
  // let temp = {"Key": randomKey,"inputUserName":inputUserName,"inputPassword":inputPassword}
  let temp =[inputUserName,inputPassword]
  // users.push(temp)
  localStorage.setItem("users",temp);


 }
function adv(body) {
  const div = document.createElement("div")
  div.className = "offers"
  const img = document.createElement("img")
  img.className= "offers"
  img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBl6rS7F9bEKrlkKL3yU3LowwNYXvQPzsZjw&usqp=CAU"
  div.append(img)
  body.append(div)
}
function Recommended(body) {
  let products = JSON.parse(localStorage.getItem('products'))

  const div = document.createElement("div")
  div.className = "recomended"
  console.log("in Recommended section");
  
  const h2 = document.createElement("h2");
  h2.className = "recomended"
  h2.innerText = "Recommended Products:"
  div.append(h2)
  const divP = document.createElement("div")
  divP.className ="recomendedParent"

  let productButton= []
  for (let i = 0; i < 28; i++) {
    const buttonCh = document.createElement("button")
    buttonCh.id = "buttonCh"+i
    productButton.push(buttonCh) 
  }
  for (let i = 0; i < 28; i++) {
    if (i==3||i==4||i==5||i==6) {
      continue
    }
    const img = document.createElement("img");
    img.className = "recomended"
    img.id = "imgProduct"
    if (i==0||i==1||i==2) {
      img.src = products[i].image_link
    }else{
      let fixLink = products[i].image_link.slice(8);
      fixLink = fixLink.slice(4);
      fixLink = "http://".concat(fixLink);
      console.log("fix link is : "+fixLink);
      img.src = fixLink
    }
    console.log("count "+i);
    // temp = testImage(img,products[i].image_link)
    // if (temp!=null) {
    //   console.log("inside continue");
    //   continue
    // }
    // img.src = products[i].image_link
    img.style.width = "250px"


    // img.onload = handel(img)
    // img.addEventListener("error", function(event) {
    //   event.target.src = json[i].image_link
    //   event.onerror = null
    // })
    const name = document.createElement("p");
    name.className = "recomended"
    name.innerText= products[i].name

    const brand = document.createElement("p");
    brand.className = "recomended"
    brand.innerText= products[i].brand 

    const price = document.createElement("p");
    price.className = "recomended"
    // if price ==0.0 then random price 
    let fixPrice = 0.0;
    if (products[i].price ==0.0 || products[i].price ==0) {
      fixPrice = Math.floor(Math.random() * 8)
      price.innerText= fixPrice + products[i].price_sign
    }
    // else set price
    else{
      price.innerText= products[i].price + products[i].price_sign

    }

    const addToCart = document.createElement("button");
    addToCart.className = "addToCart"
    addToCart.innerText= "Add to cart"

    // if (img.src != 'Image/Default.jpg') {

    // let flag=false
    // img.onerror = function(){
    //   this.onerror = null;
    //   this.src = 'Image/Default.jpg'
    //   if(this.src == 'file:///Users/shrooqsaleh/Desktop/tuwaiq/Lab%20code/BEAUTY-Website-Project-/Image/Default.jpg'){
    //     console.log("this.src >>"+this.src);
    //     flag=true
    //   }
    // };
    // if(!flag){
      productButton[i].append(img)
      productButton[i].append(name)
      productButton[i].append(brand)
      productButton[i].append(price)
      productButton[i].append(addToCart)
      divP.append(productButton[i])
    // }
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i])
    })
  }

  let addToCartButtons = document.getElementsByClassName('addToCart')
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener("click", function() {
        cardCount(products[i])
        totalPrice(products[i])
    })
  }
}
function testImage(img,URL) {
  // Create the image
  const imgElement = new Image();
  img.onload="true";
  img.onerror= null
  console.log("immmg on errrrrrror"+ img.onerror);
  img.src =URL
  return img.onerror
}
function category(body) {
  const div = document.createElement("div")
  div.className = "shopByCategory"
  console.log("in category section");
  let imageSrc = [
    {
      name: "Eye products",
      src: "Image/mascara.png"
    },
    {
      name:"Face products",
      src:"Image/face.png"
    },
    {
      name:"Lipstick",
      src:"Image/lipstick.png"
    },
    {
      name:"Pallet",
      src:"Image/pallet.png"
    },
    {
      name:"Nail products",
      src:"Image/nail.png"
    },]
  console.log("image "+imageSrc[0].name);
  // const div = document.querySelector(".shopByCategory")
  const divParent = document.createElement("div");
  divParent.className="shopByCategoryParent"
  const h2 = document.createElement("h2");
  h2.className = "shopByCategory"
  h2.innerText = "Shop By Category:"
  div.append(h2)
  const idName = ["divChild1","divChild2","divChild3","divChild4"]
  for (let i = 0; i < 5; i++) {
    const divCh = document.createElement("div");
    divCh.id = idName[i]
    const b = document.createElement("button");
    b.className = "shopByCategory"
    
    const img = document.createElement("img");
    img.className = "shopByCategory"

    img.src = imageSrc[i].src
    b.innerText = imageSrc[i].name
    b.append(img)
    
    divCh.append(b)
    divParent.append(divCh)
  }
  div.append(divParent)
  body.append(div)
}

function footer(body) {
  const div = document.createElement("div")
  div.className = "footer"
  // const div = document.querySelector(".footer")

  //div1111
  const div1 = document.createElement("div")
  const heder1 = document.createElement("p")
  heder1.className = "nav"
  heder1.innerText = "Pupler Categories"

  const ul1 = document.createElement("ul")
  let list = ["Eye products","Pallet","lipstick","face products"]
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = ""
    a.innerText = list[i]
    li.append(a)
    ul1.append(li)
  }
  div1.append(heder1)
  div1.append(ul1)
  //div2222
  const div2 = document.createElement("div")
  const heder2 = document.createElement("p")
  heder2.className = "nav"
  heder2.innerText = "Pupler Categories"

  const ul2 = document.createElement("ul")
  let list2 = ["About us","Contact us"]
  for (let i = 0; i < list2.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = ""
    a.innerText = list2[i]
    li.append(a)
    ul2.append(li)
  }
  div2.append(heder2)
  div2.append(ul2)

  div.append(div1)
  div.append(div2)
  body.append(div)
}
function cardCount(product) {
  const countP = document.querySelector('.count')
  let cardCount = localStorage.getItem('CardCount')
  //convert into int to count the products in card
  cardCount = parseInt(cardCount)

  // if Card is not empty increse count in card button by 1 then save it into local storage
  // else if the card empty add first product with count 1
  if (cardCount) {
      countP.innerHTML =cardCount+1
      localStorage.setItem("CardCount",cardCount+1)
      console.log("product added to card");
  }else{
      localStorage.setItem("CardCount",1)
      countP.innerHTML = 1
      console.log("first product added to card");
  }

  // call addProductToCart() to add product into card
  // addProductToCart(product)
}
function totalPrice(product,priceP) {
  let cartCost = localStorage.getItem('userName')
  // const priceP = document.querySelector('#totalPrice')
  let temp = 0;
  if(cartCost!=null){
      cartCost = parseFloat(cartCost)
      temp = parseFloat(product.price)
      temp = cartCost + temp
      localStorage.setItem("totalCost", temp)
      // priceP.innerText = temp 
  }else{
      localStorage.setItem("totalCost", product.price)
      // priceP.innerText = product.price 
  }
}

function changeUserName() {
  let users = localStorage.getItem('users')
  const usersB = document.querySelector('#userName')
  // let temp = 0;
  // if(users!=null){
    usersB.innerText =users[0]
  
}

