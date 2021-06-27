import React from "react"

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <input onChange={(e) => setSearch(e.target.value)} value={search} />
    </div>
  )
}

export default SearchBox
