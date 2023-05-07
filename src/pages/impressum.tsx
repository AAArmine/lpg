import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

const Impressum = dynamic(() => import('../templates/Impressum'), {
  // eslint-disable-next-line react/display-name
  loading: () => <Loader />,
});
export default Impressum;
