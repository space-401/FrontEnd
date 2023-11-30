import { PATH } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { ErrorComponent } from '@/components/common';

const NotFound = () => {
  const navigate = useNavigate();
  return <ErrorComponent resetError={() => navigate(PATH.HOME)} />;
};

export default NotFound;
