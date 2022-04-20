# _Pizza Parlor_

#### By _**Evgeniya Meshuris**_

#### _This is form will give a cost of pizza based on choice of size and toppings._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScrypt_
* _jQuery_

## Description

_This is form will give a cost of pizza based on choice of size and toppings._

## Setup/Installation Requirements

* _Copy the repository URL named "pizza-parlor"_
* _Clone the copied repository to your computer_
* _Open the cloned directory named "pizza-parlor"_
* _From the top of this directory, open index.html_
* _Fill out the From_
* _Click Submit to see the result_
* _Click Start Over if you want to repeat a request_

## Known Bugs

* _None known bugs_

## License

Licensed under the [MIT License](LICENSE)

Copyright (c) _2022_ _Evgeniya Meshuris_


## Tests:

test: "it should return 16 because 2 toppings equaling $2 and $14 for medium pizza "
code:  
  let available_toppings = [
    { id: 0, Type: "Chicken", Price: 1.5 },
    { id: 0, Type: "Salami", Price: 0.9 },
    { id: 0, Type: "Basil", Price: 0.5 },
    { id: 0, Type: "Pesto", Price: 1.1 },
  ];

  let toppingList = new ToppingList();
  toppingList.addTopping(get_topping('Salami'));
  toppingList.addTopping(get_topping('Pesto'));
  
  let small = new Size('Small 10"', 12);
  let medium = new Size('Medium 12"', 14);
  let large = new Size('Large 14"', 16);

  let sizeList = new SizeList();
  sizeList.addSize(small);
  sizeList.addSize(medium);
  sizeList.addSize(large);
  pizza.setSize(12, sizeList);
  console.log(pizza.calculatePizzaPrice())

Expected output: $16

test: "it should return 16 because 0 toppings equaling $0 and $16 for large pizza "
code:  
  let toppingList = new ToppingList();
  
  let small = new Size('Small 10"', 12);
  let medium = new Size('Medium 12"', 14);
  let large = new Size('Large 14"', 16);

  let sizeList = new SizeList();
  sizeList.addSize(small);
  sizeList.addSize(medium);
  sizeList.addSize(large);
  pizza.setSize(14, sizeList);
  console.log(pizza.calculatePizzaPrice())

Expected output: $16