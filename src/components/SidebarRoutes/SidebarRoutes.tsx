'use client'

import { SidebarItem } from '@/components/SidebarItem'
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSideBar } from './SidebarRoutes.data'
import { Separator } from "@/components/ui/separator"
import { Button } from '../ui/button'

export const SidebarRoutes = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>

        <div className='p-2 md:p-6'>
          <p className='text-slate-500 mb-2'>GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem  key={item.label} item={item} />
          ))}
        </div>

        <Separator/>

        <div className='p-2 md:p-6'>
          <p className='text-slate-500 mb-2'>TOOLS</p>
          {dataToolsSideBar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator/>

        <div className='p-2 md:p-6'>
          <p className='text-slate-500 mb-2'>SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

      </div>

      <div>
        <div className='text-center p-6'>
          <Button className='w-full' variant='outline'>
            Upgrade Plan
          </Button>
        </div>
        <Separator/>
        <footer className='text-center mt-3 p-3'>
          2024. All rights reserved
        </footer>
      </div>
    </div>
  )
}

