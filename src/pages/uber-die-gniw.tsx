import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

const About = dynamic(() => import('../templates/About'), {
  // eslint-disable-next-line react/display-name
  loading: () => <Loader />,
});
export default About;
