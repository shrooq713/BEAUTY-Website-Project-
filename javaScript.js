fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    console.log(json)
    const div = document.querySelector(".recomended")
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = json[i].image_link
      img.style.width = "300px"
      const name = document.createElement("p");
      name.innerText= json[i].name
      const brand = document.createElement("p");
      brand.innerText= json[i].brand 
      const price = document.createElement("p");
      price.innerText= json[i].price + json[i].price_sign
      const addToCart = document.createElement("button");
      addToCart.innerText= "Add to cart"
      
      div.append(img);
      div.append(name);
      div.append(brand);
      div.append(price);
      div.append(addToCart);
      
    }
  })
