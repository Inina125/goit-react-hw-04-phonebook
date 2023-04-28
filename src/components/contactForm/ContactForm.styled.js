import styled from 'styled-components';

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input`
  color: #333;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 300px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  margin: 8px 0;
`;

const AddBtn = styled.button`
  width: 300px;
  height: 32px;
  line-height: 32px;
  padding: 0 5px;
  margin: 5px 0px;
  border-color: #ccc;
  border-radius: 6px;
  text-transform: capitalize;
`;

export { FormCont, Field, AddBtn };
