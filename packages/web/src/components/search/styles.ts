import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchField = styled.input`
  border-radius: 30px;
  border: 1px solid #eee;
  padding: 10px 35px 10px 20px;
  outline: none;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  color: #6c6a6a;
`;
