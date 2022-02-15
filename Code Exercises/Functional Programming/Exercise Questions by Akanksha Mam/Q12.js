const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
];

// Q12.1
const itemsWithQUantityLessThanTwo = (acc, currentItem) => currentItem.quantity < 2 ? [...acc, currentItem]: acc;
const res = inventory.reduce(itemsWithQUantityLessThanTwo, []);
console.log(res);

// Q12.2
const totalQuantityOfItems = (acc, currentItem) => acc + currentItem.quantity;
const totalQuantity = inventory.reduce(totalQuantityOfItems, 0);
console.log(totalQuantity);

// Q12.3
const itemWithQuantityZero = (acc, currentItem) => !currentItem.quantity ? [...acc, currentItem]: acc;
const itemsWithQuantityZero = inventory.reduce(itemWithQuantityZero, []);
console.log(itemsWithQuantityZero);