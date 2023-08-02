import React, { useState } from 'react'

const SearchBar = ({ recipes, onSearchChange }) => {
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (e) => {
    setSearchInput(e.target.value)

    const filteredResults =
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    onSearchChange(filteredResults)
  }
  
  return (
    <>
      <div id="searchBar">
        <input
          id='indexNameInput'
          type="text"
          placeholder="Search Disasters"
          onChange={handleChange}
          value={searchInput} />

        {searchInput.length > 0 && (
          <ul>
            {recipes.map((recipe) => {
              if (
                recipe.name &&
                recipe.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <li key={recipe.id}>
                    {recipe.name}
                  </li>
                )
              }
              return null
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default SearchBar