const food = [
    { name: 'baguette', icon: '🥖', price: 10 },
    { name: 'tomato', icon: '🍅', price: 2 },
    { name: 'avocado', icon: '🥑', price: 80 }
]

const meat = [
    { name: 'bacon', icon: '🥓', price: 20 },
    { name: 'beef', icon: '🍖', price: 30 },
    { name: 'chicken', icon: '🍗', price: 25 }
]

const fruits = [
    { name: 'melon', icon: '🍈', price: 12 },
    { name: 'watermelon', icon: '🍉', price: 10 },
    { name: 'apple', icon: '🍎', price: 5 },
]


const menu = [
  {
        color: 'RED',
        elements: [
            { name: 'apple', icon: '🍎', price: 5 },
            { name: 'tomato', icon: '🍅', price: 2 },
            { name: 'beef', icon: '🍖', price: 30 }
        ]
    },
  {
        color: 'GREEN',
        elements: [
            { name: 'avocado', icon: '🥑', price: 80 },
            { name: 'melon', icon: '🍈', price: 12 },
            { name: 'watermelon', icon: '🍉', price: 10 },
        ]
    },
  {
        color: 'YELLOW',
        elements: [
            { name: 'baguette', icon: '🥖', price: 10 }
        ]
    },
  {
        color: 'BROWN',
        elements: [
            { name: 'bacon', icon: '🥓', price: 20 },
            { name: 'chicken', icon: '🍗', price: 25 }
        ]
    },
]




//"apple, tomato and watermelon are color RED. Look at them: ${icon}"

// console.log(`${menu[0].elements[0].name}`)
// console.log(JSON.stringify(menu[0].elements[0].name))

var newList = []

for (let i = 0; i < menu.length; i++) {
  fruitString = ""
  icons = ""

  if (menu[i].elements.length == 1) {
    newList.push(JSON.stringify(menu[i].elements[0].name) + " is color " + JSON.stringify(menu[i].color) + ". Look it up: " + JSON.stringify(menu[i].elements[0].icon))
  }
  else{
    for (let j = 0; j < menu[i].elements.length; j++) {
      if (j == menu[i].elements.length - 1) {
        fruitString = fruitString + " and " + JSON.stringify(menu[i].elements[j].name)
      }
      else {
        fruitString = fruitString + ", " + JSON.stringify(menu[i].elements[j].name)
      }
      icons = icons + JSON.stringify(menu[i].elements[j].icon)



    }
    fruitString = fruitString + " are color " + JSON.stringify(menu[i].color) + ". Look at them: " + icons
    newList.push(fruitString)
  }
}



const meals = [
    { name: 'pizzaSlice', icon: '🍕', price: 2 },
    { name: 'soup', icon: '🥣', price: 3 },
    { name: 'taco', icon: '🌮', price: 1 },
    { name: 'hamburger', icon: '🍔', price: 4 },
    { name: 'salad', icon: '🥗', price: 3 },
    { name: 'pancakes', icon: '🥞', price: 1 },
    { name: 'sushi', icon: '🍣', price: 4 },
    { name: 'icecream', icon: '🍨', price: 2 },
    { name: 'cake', icon: '🍰', price: 3 },
]

console.log(newList)
