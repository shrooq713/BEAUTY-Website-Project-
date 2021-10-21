console.log("in js");

let users = JSON.parse(localStorage.getItem("products"))
if (users != null) {
  console.log("inside if");
  homePage()
}else{
  console.log("inside else");
  fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then(function(response) {    
    return response.json()})
    .then(function (json) { 
      console.log("in fetch");
      storeData(json)
      homePage()
})
}

// setTimeout(() => { homePage()}, 9000);
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
  signIn.id = "signInB"
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

function productPage(product,i) {
  console.log("inside product page");
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)


  const div = document.createElement("div")
  div.className = "product"
  
  const divP = document.createElement("div")
  divP.className ="productParent"
  const img = document.createElement("img");
  img.className = "recomended"
  img.id = "imgProduct"
  if (i==0||i==1||i==2) {
    img.src = product.image_link
  }else{
    let fixLink = product.image_link.slice(8);
    fixLink = fixLink.slice(4);
    fixLink = "http://".concat(fixLink);
    console.log("fix link is : "+fixLink);
    img.src = fixLink
  }
    //

    img.style.width = "400px"


    const name = document.createElement("p");
    name.className = "recomended"
    name.innerText= product.name

    const brand = document.createElement("p");
    brand.className = "recomended"
    brand.innerText= product.brand 

    //NOT FINISH YET

    //color div
    // const colorDiv = document.createElement("div");
    // // let colorArr =[]

    // for (let i = 0; i <5; i++) {
    //   let temp = product.product_colors[i]
    //   // if (product.product_colors[i].includes("hex_value")) {
    //   //   continue
    //   // }
    //   const colorsB = document.createElement("button");
    //   colorsB.className = "colorsB"
    //   colorsB.style.backgroundColor = product.product_colors[i].hex_value 
    //   colorsB.style.borderRadius = "200px"
    //   colorsB.style.width = "50px"
    //   colorsB.style.height = "50px"
    //   colorDiv.append(colorsB)
    // }

    const price = document.createElement("p");
    price.className = "recomended"
    if (product.price ==0.0 || product.price ==0) {
      fixPrice = Math.floor(Math.random() * 8)+1
      price.innerText= fixPrice + product.price_sign
    }    // else set price
    else{
      price.innerText= product.price + product.price_sign

    }

    const addToCart = document.createElement("button");
    addToCart.className = "addToCart"
    addToCart.innerText= "Add to cart"

    divP.append(img)
    divP.append(name)
    divP.append(brand)
    divP.append(price)
    // divP.append(colorDiv)
    divP.append(addToCart)
  
    body.append(divP)

  // ............................
  footer(body)
  // const colorsButton = document.querySelector(".colorsB")
  // for (let i = 0; i < colorsButton.length; i++) {
  //   let button = colorsButton[i]
  //   button.addEventListener("click", function() {
  //
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

  // NOT FINISH YET >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // const productTitle = document.createElement("h5")
  // const priceTitle = document.createElement("h5")
  // const quantityTitle = document.createElement("h5")
  // const totalTitle = document.createElement("h5")
  // productTitle.innerText = "Product"
  // priceTitle.innerText = "Price"
  // quantityTitle.innerText = "quantity"
  // totalTitle.innerText = "total"

  // productTitle.className = "Product"
  // priceTitle.className = "Price"
  // quantityTitle.className = "quantity"
  // totalTitle.className = "total"

  // const price = document.createElement("p")
  // price.id = "price"
  // const totalP = document.createElement("p")
  // totalP.className = "totalPrice"
  // totalP.innerText = 0
  // div1.append(productTitle)
  // div1.append(priceTitle)
  // div1.append(quantityTitle)
  // div1.append(totalTitle)
  // div1.append(price)
  // div1.append(totalP)

  div.append(h2)
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

  const signUpLink = document.createElement("p")
  const LinkB = document.createElement("button")
  LinkB.innerText = "sign up!"
  LinkB.className="sumbitB"
  signUpLink.innerText= "You don't have account?"

  const sumbitB = document.createElement("Button")
  sumbitB.className="sumbitB"
  sumbitB.innerText = "sign in"
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
  div.append(signUpLink)
  div.append(LinkB)
  body.append(div)
  footer(body)

  sumbitB.addEventListener("click", function() {
    checkUser()
  })
  LinkB.addEventListener("click", function() {
    signUpPage()
  })  
}
function signUpPage() {
  const body = document.querySelector("body")
  body.innerHTML = ""
  nav(body)
  
  const div = document.createElement("div")
  div.className = "signUp"
  const imgLogo = document.createElement("img")
  imgLogo.src = "Image/Logo.png"
  imgLogo.id ="logoSing"
  div.append(imgLogo)

  const form = document.createElement("form")
  form.className="formSingUp"
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

  const sumbitB = document.createElement("Button")
  sumbitB.className="sumbitB"
  sumbitB.innerText = "sign up"
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
    // changeUserName()
  })
}
function storeUser(){
  let users = JSON.parse(localStorage.getItem("users"))||[]
  let userInfo={
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value
  }
  users.push(userInfo)
  localStorage.setItem("users",JSON.stringify(users));
  changeUserName(userInfo)
 }
function checkUser(){
  let users = JSON.parse(localStorage.getItem("users"))||[]

  for (let i = 0; i < users.length; i++) {
    if(users[i].userName === document.querySelector("#userName").value && users[i].password ===document.querySelector("#password").value){
        homePage()
    }else{
      alert("The username or password is not correct!")
      signInPage()
    }
    
  }
}
function adv(body) {
  const div = document.createElement("div")
  div.className = "offers"
  const img = document.createElement("img")
  img.className= "offers"
  img.src ="Image/code.jpg"
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
  // h2.innerText = "Recommended Products:"
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
    img.style.width = "250px"

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
      fixPrice = Math.floor(Math.random() * 8)+1
      price.innerText= fixPrice + products[i].price_sign
    }
    // else set price
    else{
      price.innerText= products[i].price + products[i].price_sign

    }

    const addToCart = document.createElement("button");
    addToCart.className = "addToCart"
    addToCart.innerText= "Add to cart"

    productButton[i].append(img)
    productButton[i].append(name)
    productButton[i].append(brand)
    productButton[i].append(price)
    productButton[i].append(addToCart)
    divP.append(productButton[i])
    
      
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i],i)
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
  const idName = ["divChild0","divChild1","divChild2","divChild3","divChild4"]
  const idButton = ["Eye","Face","Lipstick","Pallet"]
  for (let i = 0; i < 4; i++) {
    const divCh = document.createElement("div");
    divCh.id = idName[i]
    const b = document.createElement("button");
    b.className = "shopByCategory"
    b.id = idButton[i]
    
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
  //"Eye","Face","Lipstick","Pallet"
  let eyeB = document.querySelector('#Eye')
  eyeB.addEventListener("click", function() {
    EyeProduct(body)
  })
  
  let faceB = document.querySelector('#Face')
  faceB.addEventListener("click", function() {
    FaceProduct(body)
  })
  let lipstickB = document.querySelector('#Lipstick')
  lipstickB.addEventListener("click", function() {
    LipstickProduct(body)
  })
  let palletB = document.querySelector('#Pallet')
  palletB.addEventListener("click", function() {
    PalletProduct(body)
  })
}
function EyeProduct(body) {
  body.innerHTML = ""
  nav(body)
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
    img.style.width = "250px"

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

    if (products[i].name === "Liquid Liner"|| products[i].name === "Eyeshadow" || products[i].name ==="Pressed Eye Shadow"
    ||products[i].name ==="Perfect Lash Mascara"||products[i].name ==="Gel Liner") {
      productButton[i].append(img)
      productButton[i].append(name)
      productButton[i].append(brand)
      productButton[i].append(price)
      productButton[i].append(addToCart)
      divP.append(productButton[i])
    }
    
      
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i],i)
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
  footer(body)
}
function FaceProduct(body) {
  body.innerHTML = ""
  nav(body)
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
    img.style.width = "250px"

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

    if (products[i].name === "Realist Invisible Setting Powder"|| products[i].name === "B Smudged" 
    || products[i].name ==="Pressed Eye Shadow"||products[i].name ==="Pressed Powder Foundation"||products[i].name ==="Amalia"||
    products[i].name ==="Pressed Foundation") {
      productButton[i].append(img)
      productButton[i].append(name)
      productButton[i].append(brand)
      productButton[i].append(price)
      productButton[i].append(addToCart)
      divP.append(productButton[i])
    }
    
      
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i],i)
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
  footer(body)
}
function LipstickProduct(body) {
  body.innerHTML = ""
  nav(body)
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
    img.style.width = "250px"

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

    if (products[i].name === "Lippie Pencil"|| products[i].name === "Blotted Lip" 
    || products[i].name ==="Lippie Stix"||products[i].name ==="B Glossy Lip Gloss"||products[i].name ==="Lip Gloss"||
    products[i].name ==="Amalia" || products[i].name ==="Lipstick") {
      productButton[i].append(img)
      productButton[i].append(name)
      productButton[i].append(brand)
      productButton[i].append(price)
      productButton[i].append(addToCart)
      divP.append(productButton[i])
    }
    
      
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i],i)
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
  footer(body)
}
function PalletProduct(body) {
  body.innerHTML = ""
  nav(body)
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
    img.style.width = "250px"

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

    if (products[i].name === "B Smudged"|| products[i].name === "Multi Purpose Powder - Blush & Eye" 
    || products[i].name ==="Multi Purpose Powder - Blush & Eye"||products[i].name ==="Multi Purpose Powder - Eye Shadow & Face"||products[i].name ==="Lip Gloss"||
    products[i].name ==="Bronzer - loose" || products[i].name ==="Bronzer - pressed"|| products[i].name ==="Pressed Eye Shadow"
    || products[i].name ==="Mineral Blush" || products[i].name ==="Loose Mineral Eyeshadow") {
      productButton[i].append(img)
      productButton[i].append(name)
      productButton[i].append(brand)
      productButton[i].append(price)
      productButton[i].append(addToCart)
      divP.append(productButton[i])
    }
    
      
  }
  div.append(divP)
  body.append(div)
  
  
  for (let i = 0; i < productButton.length; i++) {
    let button = productButton[i]
    button.addEventListener("click", function() {
      productPage(products[i],i)
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
  footer(body)
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
  //convert into int to count the products in cart
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
  addProductToCart(product)
}

function totalPrice(product) {    
  let cartCost = localStorage.getItem('totalCost')
  // const priceP = document.querySelector('.totalPrice')
  console.log("total incresed "+cartCost);
  
  console.log("total incresed "+cartCost);
  let temp = 0;
  if(cartCost!=null){
      cartCost = parseFloat(cartCost)
      temp = parseFloat(product.price)
      temp = cartCost + temp
      localStorage.setItem("totalCost", temp)
      // priceP.innerText = temp +" "
  }else{
      localStorage.setItem("totalCost", product.price)
      // priceP.innerText = product.price
  }
}
// NOT FINISH YET
// function changeUserName(user) {
//   // let users = localStorage.getItem('users')
//   const usersB = document.querySelector('#signInB')
//   usersB.innerText = user.userName
//   // document.getElementById("userName").value
  
// }

function addProductToCart(product) {//set items
  let cartItems =JSON.parse(localStorage.getItem("productInCart")) ||[]
  cartInfo = {
    [product.name]:product
  }
  cartItems.push(cartInfo)
  localStorage.setItem("productInCart",JSON.stringify(cartItems))
}

//NOT FINISH YET
// function displayCart() {
//   // let cartItems =JSON.parse(localStorage.getItem("productInCart")) ||[]
//   let cartItems =JSON.parse(localStorage.getItem("productInCart")) ||[]
//   let productDiv = document.querySelector(".productInCard")
//   if (cartItems&&productDiv) {
//     productDiv.innerHTML = '';
//     for (let i = 0; i < cartItems.length; i++) {      
//     }
//   }
// }