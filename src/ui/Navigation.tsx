import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Navigation = ({ path }: { path: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mt-24">
      <Button link={true} onClick={() => navigate(-1)}>
        Go back
      </Button>
      <Button onClick={() => navigate(path)}>Next Step</Button>
    </div>
  );
};

export default Navigation;
