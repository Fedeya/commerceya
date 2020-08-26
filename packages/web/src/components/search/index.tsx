import { SearchField, SearchContainer, SearchIcon } from './styles';

const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchField type="text" placeholder="Search products" />
      <SearchIcon />
    </SearchContainer>
  );
};

export default Search;
