import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
`;

export const Tag = styled.p`
  background-color: #ff003c;
  color: white;
  border-radius: 30px;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  top: 35px;
  left: 40px;
`;

export const TitleLink = styled.a`
  font-size: 16px;
  margin: 1rem 0;
  color: #383838;
  text-decoration: none;
  cursor: pointer;
`;

export const Price = styled.p`
  display: inline;
  margin-right: 10px;
  font-size: 18px;
`;

export const Discount = styled.p`
  display: inline;
  color: #ff003c;
  font-size: 18px;
  text-decoration: line-through;
`;
