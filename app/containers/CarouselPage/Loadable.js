/**
 * Asynchronously loads the component for CarouselPage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
