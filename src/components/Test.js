import React from "react"
 
const categoryStore = {
  title: "Fresh Thyme",
  categories: [
    {
      id: 1,
      category: "Produce",
      items: ['Apple', 'Bananas']
    },
    {
      id: 1,
      category: "Produce",
      items: ['Apple', 'Bananas']
    },
  ]
}
 
function Category({ category }) {
  const nestedCategories = (category.items || []).map(category => {
    return (
      <div>
      <Category key={category.id} category={category} type="child" />
      <div>{category.items}</div>
      </div>
    ) 
  })
  console.log(category.items)
 
  return (
    <div >
      <div>{category.category}</div>
      {nestedCategories}
    </div>
  )
}

 
function Test() {
  return (
    <div>
      {
        categoryStore.categories.map((category) => {
          return (
            <div>
            <Category key={category.id} category={category} />
            </div>
          )
        })
      }
    </div>
  )
}
 
export default Test