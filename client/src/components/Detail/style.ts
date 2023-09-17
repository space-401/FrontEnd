import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.COLOR['gray-6']};
  padding: 4px 6px;
  display: flex;
  gap: 8px;
`;

const UserName = styled.div``;

const S = {
  Wrapper,
  UserName,
};

export default S;
