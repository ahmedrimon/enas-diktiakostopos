import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar/Navbar'

export default function RootLayout() {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
