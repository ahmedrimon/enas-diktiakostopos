import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar/Navbar'
import Footer from '../pages/Shared/Footer/Footer'

export default function RootLayout() {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
