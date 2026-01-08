import styled from "styled-components";

export default function SearchBar({ search, setSearch, isMenuActive }) {
  function handleSearch(searchString) {
    setSearch(searchString);
  }

  return (
    <SearchBarWrapper $isMenuActive={isMenuActive}>
      <SearchInput
        type="search"
        placeholder="Search plants..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button type="button" onClick={() => handleSearch("")}>
        remove
      </button>
    </SearchBarWrapper>
  );
}

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 60px;
  background-color: var(--primary);
  border-radius: 0 55px 55px 0px;

  transform: translateX(
    ${({ $isMenuActive }) => ($isMenuActive ? "0%" : "-90%")}
  );
  transition: transform 0.3s ease-in-out;
  will-change: transform;
`;

export const SearchInput = styled.input`
  border: 1px solid var(--primary);
  background-color: var(--background-ground);
`;
