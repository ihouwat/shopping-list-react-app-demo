const express = require('express');
const bodyParser = require('body-parser')

groceriesTemplate = [
  { name: 'Apple', count: 0 },
  { name: 'Apples', count: 10 },
  { name: 'Banana', count: 0 },
  { name: 'Bananas', count: 10 },
  { name: 'Oatmeal', count: 10 },
  { name: 'Clementines', count: 0 },
  { name: 'Blueberries', count: 0 },
  { name: 'Oranges', count: 0 },
  { name: 'Hummus', count: 10 },
  { name: 'Black Beans', count: 0 },
  { name: 'Chocolate Chips', count: 10 },
  { name: 'Cliff Bars', count: 0 },
  { name: 'Cereal Bars', count: 0 },
  { name: 'Almonds', count: 10 },
  { name: 'Coffee', count: 10 },
  { name: 'Orange Juice', count: 10 },
  { name: 'Flax Seed', count: 5 },
  { name: 'Grapes', count: 5 },
]

const items = [
  {name: "Apples", note: 'The note', id: 0}
]

const completeditems = [
  {name: "Bananas", note: 'The note is here', id: 1}
]

// Start app
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;

//Middleware to sort incoming favorites
const sortedFaves = function (req, res, next) {
 //Helper method to sort groceries by count
 let sortFavorites = (a, b) => {
  const itemA = a.count;
  const itemB = b.count;
  let comparison = 0;
  if (itemA < itemB) {
    comparison = 1;
  } else if (itemA > itemB) {
    comparison = -1;
  }
  return comparison
  }
  // Get top ten grocery items by count.
  // Count number is historical record of how many times each item has been bought
  const topTenFavorites = groceriesTemplate.sort(sortFavorites).slice(0,10)
  // Create a new array
  const favoritesState = []
  // For each topTen, create an object and push into favoritesState
  for (let index in topTenFavorites){
    favoritesState.push({
      // Grocery name
      name: topTenFavorites[index].name,
      // isChecked is false, when it is checked in TopNavigationFaves, it becomes tru
      isChecked: false,
    });
  }
  req.topTenFavorites = favoritesState
  next()
}

app.use(sortedFaves)

// Get lists
app.get('/', (req, res) => {
  let topTenFavorites = req.topTenFavorites;
  res.send({topTenFavorites, items, completeditems})
});

app.post('/additem', (req, res) => {
  res.send(groceriesTemplate[0])
});

app.listen(port, () => console.log(`app is running http://localhost:${port}`))

/* ROUTES to build
/DONE getitemslists --> GET = success/fail for items, completed items, and favorites (top 10 count)

/Add item --> PUT = grocery
/Complete item -->  DELETE = from items & PUT completed items, PUT item count increased
/Delete item --> DELETE = from list
/Recover item --> DELETE = from completed items & PUT items
*/