import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Index'
import PieChart from '../src/component/pieChart/Index';
import Table from '../src/component/table/Index'
import BarChart from './component/barGraph/Index';
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<BarChart/> }/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/pie-chart' element={ <PieChart />}/>

      <Route path='*' element={<h1>No Pages Found</h1>}/>
     </Routes>
    </>
  )
}

export default App
