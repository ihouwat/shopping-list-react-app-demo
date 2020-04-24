const express = require('express');
const bodyParser = require('body-parser')

const db =  {
  groceriesTemplate: [
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
  ], 
  items: [
    {name: "Apples", note: 'The note', id: 0},
    {name: "Oranges", note: 'The note', id: 1},
    { name: 'Flax Seed', note: 'The note', id: 2},
  ],
  completeditems: [
    {name: "Bananas", note: 'The note is here', id: 1}
  ]
}



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
  const sortTopTenFavorites = db.groceriesTemplate.sort(sortFavorites).slice(0,10)
  // Create a new array
  const topTenFavorites = []
  // For each topTen, create an object and push into favoritesState
  for (let index in sortTopTenFavorites){
    topTenFavorites.push({
      // Grocery name
      name: sortTopTenFavorites[index].name,
      // isChecked is false, when it is checked in TopNavigationFaves, it becomes tru
      isChecked: false,
    });
  }
  req.topTenFavorites = topTenFavorites
  next()
}

app.use(sortedFaves)


// Get lists
app.get('/', (req, res) => {
  res.json({
    topTenFavorites: req.topTenFavorites,
    items: db.items,
    completeditems: db.completeditems,
  })
});

// Add item to grocery list
app.put('/additem', (req, res) => {
  db.items.push({
    name: "Oatmeal",
    note: "Don't get quick oatmeal",
    id: "ba9302jad",
  })
  console.log('newItem', db.items[db.items.length - 1])
  res.json({
    items: db.items,
  })
});

// Complete item from grocery list
app.put('/completeitem', (req, res) => {
  completedItem = {name: "Oranges", note: 'The note', id: 1}
  for(var i=0; i < db.items.length; i++){
    // Look for a match in items
    if (db.items[i].name === completedItem.name){
      // If there is a match, put that item in the completed items list
      db.completeditems.push({
        name: db.items[i].name,
        note: db.items[i].note,
        id: db.items[i].id,
      })
      // Remove the item from the items list
      db.items.splice(i, 1) 
    }
  }
  for(var j=0; j < db.groceriesTemplate.length; j++) {
    // Find item in groceriesTemplate constant
    if(db.groceriesTemplate[j].name === completedItem){
      // Increase item count, which is used to determine the top ten favorites
      db.groceriesTemplate[j].count ++
      console.log(db.groceriesTemplate)
    }
  }
    res.json({
      items: db.items,
      completeditems: db.completeditems,
    })
});

app.put('/deleteitem', (req, res) => {
  deleted1 = {name: "Oranges", note: 'The note', id: 1}
  deletedList = 'items'
  list = ''
  deletedList === 'items' ? list = db.items
  : list = db.completeditems
  for(var i=0; i < list.length; i++){
    // Look for a match in items
    if (db.items[i].name === deleted1.name){
      // Delete the item from the list
      console.log('deleteditem', db.items[i])
      db.items.splice(i, 1) 
    }
  }
  res.json({
    items: db.items,
  })
})

app.listen(port, () => console.log(`app is running http://localhost:${port}`))

/* ROUTES to build
/DONE getitemslists --> GET = success/fail for items, completed items, and favorites (top 10 count)
/DONE Add item --> PUT = grocery
/DONE Complete item -->  DELETE = from items & PUT completed items, PUT item count increased
/DONE Delete item --> DELETE = from list

/Recover item --> DELETE = from completed items & PUT items
*/