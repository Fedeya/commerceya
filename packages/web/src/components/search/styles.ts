import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchField = styled.input`
  border-radius: 30px;
  border: 1px solid #eee;
  padding: 1rem 35px 1rem 25px;
  outline: none;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20px;
  top: 1rem;
  cursor: pointer;
  color: #6c6a6a;
`;
