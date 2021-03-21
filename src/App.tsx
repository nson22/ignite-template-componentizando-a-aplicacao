import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { MovieProvider } from './components/hooks/MovieContext';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieProvider>
        <SideBar/>
        <Content/>
      </MovieProvider>
   </div>
  )
}