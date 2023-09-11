import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 32px 0 24px 0;
  border-radius: 20px;
  overflow: hidden;
`;

const WrapperInner = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1016px;
`;

const SearchForm = styled.form``;

const SearchInput = styled.input``;

const SubmitButtonBox = styled.div``;

const SubmitButton = styled.input``;

const StyleResetContainer = styled.div`
  div{
    border: none!important;
    background: inherit;
  }
`

const S = {
  Wrapper,
  WrapperInner,
  Container,
  SearchForm,
  SearchInput,
  SubmitButtonBox,
  SubmitButton,
  StyleResetContainer
};

export default S;
