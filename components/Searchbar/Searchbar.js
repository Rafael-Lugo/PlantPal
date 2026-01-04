import styled from "styled-components";

export default function SearchBar({ search, setSearch }){
    function handleSearch(searchString){
        setSearch(searchString);
    }

    return(
        <SearchBarWrapper>
         <input
        type="search"
        placeholder="Search plants..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button type="button" onClick={() => handleSearch("")}>
        remove
      </button>
        </SearchBarWrapper>
    )
}

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: start;`