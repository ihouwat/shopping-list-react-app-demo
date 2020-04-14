import React from "react"
 
const freshThymeStore = {
  name: "Fresh Thyme",
  categories: [
    {
      id: 1,
      category: "Produce",
      items: [{id: "e727tzk7d", name: "Apple", note: ""}, 
        {id: "l5wdbzkaw", name: "Bananas", note: ""}
      ]
    },
    {
      id: 2,
      category: "Bulk Foods",
      items: [{id: "e727tzk7d", name: "Oatmeal", note: ""}, 
        {id: "l5wdbzkaw", name: "Almonds", note: ""}
      ]
    },
  ]
}
 
function Category({ categories }) {
  const categorizedItems = (categories).map(category => {
    return (
      <div>
      <h1>{category.category}</h1>
      {category.items.map(item => <p>{item.name}</p>) }
      </div>
    ) 
})


 
  return (
    <div >
      {categorizedItems}
    </div>
  )
}

 
function Test() {
  return (
    <div>
    <Category key={freshThymeStore.categories.id} categories={freshThymeStore.categories} />
    </div>
  )
}
 
export default Test