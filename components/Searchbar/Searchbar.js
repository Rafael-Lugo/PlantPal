import styled from "styled-components";
import Search from "public/assets/icons/Search.svg";

export default function SearchBar({
  search,
  setSearch,
  isMenuActive,
  setIsMenuActive,
}) {
  function handleSearch(searchString) {
    setSearch(searchString);
  }

  return (
    <SearchContainer>
        {!isMenuActive && (
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setIsMenuActive(true)}
        >
          <Search alt="" width="32" height="32" />
        </button>
      )}
        <SearchBarWrapper $isOpen={isMenuActive}>
          <SearchInput
          type="search"
          placeholder="Search plants..."
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
          <button type="button" onClick={() => handleSearch("")}>
            remove
          </button>

          <button
           type="button"
          aria-label="Close search"
          onClick={() => setIsMenuActive(false)}
        >
          <Search alt="" width="32" height="32" />
          </button>
        </SearchBarWrapper>

       
      
    </SearchContainer>
  );
}

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 60px;
  background-color: var(--primary);
  border-radius: 0 55px 55px 0px;

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(60px)" : "translateX(-120%)"};
 
  
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  transition: transform 0.35s ease, opacity 0.2s ease;
`;

export const SearchInput = styled.input`
  border: 1px solid var(--primary);
  background-color: var(--background-ground);
`;

