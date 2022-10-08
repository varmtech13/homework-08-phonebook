import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
`;
export const Input = styled.input`
  height: 48px;
  border-radius: 8px;
  padding: 4px 8px;
  border-color: #a0a0a0;
  font-size: 16px;
`;
export const Button = styled.button`
  height: 48px;
  border-radius: 8px;
  border-color: #4c1010;
  background: #4c1010;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #e4dddd;
`;
