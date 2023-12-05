import { Box } from '@mui/material';
import { S } from './style';

export const Loading = () => {
  return (
    <S.Wrapper>
      <Box sx={{ display: 'flex' }}>
        <span className="loader"></span>
      </Box>
    </S.Wrapper>
  );
};
