var buttonLetsCook = document.querySelector('.lets-cook')
var buttonFavorites = document.querySelector('#favorite')
var buttonDelete = document.querySelector('#delete')
var buttonViewFavorites = document.querySelector('.view-favorites')
var form = document.querySelector('form')
var dishSpace = document.querySelector('.recipe-text')
var potImage = document.querySelector('.pot')
var favoriteDishes = document.querySelector('.favorites-list')
var formInputToDelete = document.querySelector('#delete-item-form')
var mainFormView = document.querySelector('.form')
var mainDisplayView = document.querySelector('.display')
var favoritesView = document.querySelector('.favorites')

var meals = {
  desserts: ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'],
  mainDishes: ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap',  'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'],
  sides: ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'],
  entireMeal: ['Like, I\'m not adding this functionality, or something.']
}

var currentDish;
var favorites = []

window.addEventListener('load', function() {
  favoritesFromLocalStorage()
  updateFavorites()
})

buttonLetsCook.addEventListener('click', function(event) {
  event.preventDefault()
  var dish = [...form.children[1].children].filter(el => el.children[0].checked)[0].children[0].id
  getRandomDish(dish)
  updateDish(currentDish)
  showDish()
})

buttonFavorites.addEventListener('click', function() {
  addToFavorites()
  updateFavorites()
  addToLocalStorage()
})

buttonDelete.addEventListener('click', function(event) {
  event.preventDefault()
  deleteFavorite()
  updateFavorites()
  addToLocalStorage()
})

buttonViewFavorites.addEventListener('click', switchView)

function favoritesFromLocalStorage() {
  favorites = localStorage.getItem('favorites').split(',')
}

function addToLocalStorage() {
  localStorage.setItem('favorites', favorites)
}

function switchView() {
  favoritesView.classList.toggle('hidden')
  mainFormView.classList.toggle('hidden')
  mainDisplayView.classList.toggle('hidden')
  buttonViewFavorites.innerText === 'View Favorites' ? buttonViewFavorites.innerText = 'Main Page' : buttonViewFavorites.innerText = 'View Favorites'
}

function deleteFavorite() {
  var index = favorites.findIndex(el => el === formInputToDelete.value)
  if (index !== -1) {
    favorites.splice(index, 1)
    formInputToDelete.value = ''
  }
}

function addToFavorites() {
  if(!favorites.includes(currentDish) && currentDish !== 'Like, I\'m not adding this functionality, or something.') {
    favorites.push(currentDish)
  }
}

function updateFavorites() {
  favoriteDishes.innerText = ''
  favoriteDishes.innerText = favorites.join(', ')
}

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