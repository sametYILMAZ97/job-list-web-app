import { FC } from 'react'
import { Outlet } from '@tanstack/react-location'
import NavbarComponent from '@/components/navbar'
import FooterComponent from '@/components/footer'

type RootLayoutProps = {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <>
      <div className='container mx-auto flex flex-col items-center space-y-5 py-20'>
        <NavbarComponent />
        <Outlet />
        <div className='sticky bottom-0 w-screen bg-black text-center py-6'>
          <FooterComponent />
        </div>
      </div>
    </>
  )
}

export default RootLayout
