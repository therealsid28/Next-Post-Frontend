import { Outlet } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <div className="p-4">
          <Outlet />
        </div>
      </Layout>
    </>
  );
}

export default App;
