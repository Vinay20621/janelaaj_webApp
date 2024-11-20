import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Index'
import PieChart from '../src/component/pieChart/Index';
import Table from '../src/component/table/Index'
import BarChart from './component/barGraph/Index';
import Login from '../src/pages/login/Index'
import { useContext } from 'react';
import { AuthCreateContex } from './contex/AuthContex';
import Model from '../src/component/partnerDetailsModel/index'
// import ProtectedRoute  from '../src/pages/protectedRoute/index'
const ProtectedRoute = ({ isAuthorized, children }) => {
  return isAuthorized ? children : <Navigate to="/" />;
};
function App() {
  const {authorized} =useContext(AuthCreateContex)
  return (
    <>
     <Routes>
      <Route path='/' element={<Login/> }/>
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthorized={authorized}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      <Route path='/test' element={<Model/>}/>
      <Route path='/pie-chart' element={ <PieChart />}/>

      <Route path='*' element={<h1>No Pages Found</h1>}/>
     </Routes>
    </>
  )
}

export default App
