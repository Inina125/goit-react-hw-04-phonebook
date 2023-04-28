import styled from 'styled-components';

const ListCont = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Item = styled.li`
  display: flex;
  color: #333;
  align-items: center;
  height: 48px;
  line-height: 48px;
`;

const DeleteBtn = styled.button`
  padding: 6px 5px;
  margin: 0 10px;
  border-color: #ccc;
  border-radius: 6px;
  text-transform: capitalize;
`;

export { ListCont, Item, DeleteBtn };
