//Business logic for Pizza
function Pizza() {
  this.sizePrice = 0;
  this.Prices = [];
  this.totalPrice = 0;
}

Pizza.prototype.setSize = function (pizzaSizeID, sizeList) {
  this.sizePrice = 0;
  for (let i = 0; i < sizeList.sizes.length; i++) {
    if (pizzaSizeID === sizeList.sizes[i].id) {
      this.sizePrice = sizeList.sizes[i].sizePrice;
    }
  }
};

Pizza.prototype.addToppings = function (toppingIDs, toppingList) {
  this.Prices = [];
  for (let i = 0; i < toppingIDs.length; i++) {
    for (let j = 0; j < toppingList.toppings.length; j++) {
      if (toppingIDs[i] === toppingList.toppings[j].id) {
        this.Prices.push(toppingList.toppings[j].Price);
      }
    }
  }
};

Pizza.prototype.calculatePizzaPrice = function () {
  let toppingsTotalPrice = 0;
  this.Prices.forEach(function (topping) {
    toppingsTotalPrice += topping;
  });
  this.totalPrice = this.sizePrice + toppingsTotalPrice;
};

//Business logic for Size and SizeList
function Size(pizzaSize, sizePrice) {
  this.pizzaSize = pizzaSize;
  this.sizePrice = sizePrice;
}

function SizeList() {
  this.sizes = [];
  this.sizeID = 0;
}

SizeList.prototype.addSize = function (size) {
  size.id = this.AssignID();
  this.sizes.push(size);
};

SizeList.prototype.AssignID = function () {
  this.sizeID += 1;
  return this.sizeID;
};

//Business logic for Topping and ToppingList
function Topping(Type, Price) {
  this.Type = Type;
  this.Price = Price;
}
function ToppingList() {
  this.toppings = [];
  this.toppingID = 0;
}

ToppingList.prototype.addTopping = function (topping) {
  topping.id = this.AssignID();
  this.toppings.push(topping);
};

ToppingList.prototype.AssignID = function () {
  this.toppingID += 1;
  return this.toppingID;
};

// User interface logic---------------------------------------------------------------------
//Displays checklist with possible sizes to user
function displayPizzaSizeList(SizeListToShow) {
  let pizzaSizeSelect = $("select#sizes");
  let htmlForPizzaSizeList = "";
  SizeListToShow.sizes.forEach(function (size) {
    htmlForPizzaSizeList +=
      "<option value=" +
      size.id +
      ">" +
      size.pizzaSize +
      " - $" +
      size.sizePrice +
      "</option>";
  });
  pizzaSizeSelect.html(htmlForPizzaSizeList);
}

//Displays checkboxes with possible toppings for customer
function displayPizzaToppingList(toppingListToShow) {
  let pizzaToppingSelect = $("div#toppings");
  let htmlForPizzaToppingList = "";
  toppingListToShow.toppings.forEach(function (topping) {
    htmlForPizzaToppingList +=
      "<label for=" +
      topping.id +
      "></label><input id='topping' type='checkbox' value=" +
      topping.id +
      ">" +
      " " +
      topping.Type +
      ": $" +
      topping.Price +
      "</label><br>";
  });
  pizzaToppingSelect.html(htmlForPizzaToppingList);
}

//Displays result statement with pizza's cost
function displayPizzaTotalPrice(pizza) {
  let pizzaTotalPriceSelect = $("div#result");
  let htmlForPizzaTotalPrice = "<h2>Your total: $" + pizza.totalPrice + "</h2>";
  pizzaTotalPriceSelect.html(htmlForPizzaTotalPrice);
}

$(document).ready(function () {
  let pizza = new Pizza();
  //pizza sizes
  let small = new Size('Small 10"', 12);
  let medium = new Size('Medium 12"', 14);
  let large = new Size('Large 14"', 16);

  let sizeList = new SizeList();
  sizeList.addSize(small);
  sizeList.addSize(medium);
  sizeList.addSize(large);
  console.log(sizeList);

  //pizza toppings
  let available_toppings = [
    { id: 0, Type: "Chicken", Price: 1.5 },
    { id: 0, Type: "Salami", Price: 0.9 },
    { id: 0, Type: "Basil", Price: 0.5 },
    { id: 0, Type: "Pesto", Price: 1.1 },
  ];

  function get_topping(type) {
    return available_toppings.find(at => at.Type === type);
  }

  let toppingList = new ToppingList();
  toppingList.addTopping(get_topping('Salami'));
  toppingList.addTopping(get_topping('Basil'));
  toppingList.addTopping(get_topping('Chicken'));
  toppingList.addTopping(get_topping('Pesto'));

  displayPizzaSizeList(sizeList);
  displayPizzaToppingList(toppingList);

  $("form#check-price").submit(function (event) {
    event.preventDefault();
    const choosenPizzaSizeID = parseFloat($("select#sizes").val());
    const choosenPizzaToppingIDs = $("#toppings input:checkbox:checked")
      .map(function () {
        return parseFloat($(this).val());
      })
      .get();

    pizza.setSize(choosenPizzaSizeID, sizeList);
    pizza.addToppings(choosenPizzaToppingIDs, toppingList);
    pizza.calculatePizzaPrice();
    displayPizzaTotalPrice(pizza);
  });
});
