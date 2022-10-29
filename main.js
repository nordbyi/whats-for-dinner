var buttonLetsCook = document.querySelector('.lets-cook')
var form = document.querySelector('form')
var dishSpace = document.querySelector('.recipe-text')
var potImage = document.querySelector('.pot')

var meals = {
  desserts: ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'],
  mainDishes: ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap',  'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'],
  sides: ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'],
  entireMeal: ['Like, I\'m not adding this functionality, or something.']
}

var currentDish;

buttonLetsCook.addEventListener('click', function(event) {
  event.preventDefault()
  var dish = [...form.children[1].children].filter(el => el.children[0].checked)[0].children[0].id
  getRandomDish(dish)
  updateDish(currentDish)
  showDish()
})

function updateDish() {
  dishSpace.children[1].innerText = currentDish
}

function getRandomDish(dish) {
  var dish = meals[dish][randomIndex(meals[dish])]
  console.log(dish)
  currentDish = dish
}

function showDish() {
  dishSpace.classList.remove('hidden')
  potImage.classList.add('hidden')
}

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}