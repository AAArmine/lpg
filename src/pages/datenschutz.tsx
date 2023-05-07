import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

const Datenschutz = dynamic(() => import('../templates/Datenschutz'), {
  // eslint-disable-next-line react/display-name
  loading: () => <Loader />,
});

export default Datenschutz;
