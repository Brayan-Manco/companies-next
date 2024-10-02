import { CustonIcon } from '@/components/CustomIcon'
import { BarChart } from 'lucide-react'
import React from 'react'
import { GraphicSuscribers } from '../GraphicSuscribers'


export const SalesDistributors = () => {
  return (
    <div className='shadow-sm bg-background rounded p-5'>
      <div className='flex gap-x-2 items-center'>
        <CustonIcon icon={BarChart} />
        <p className='text-xl'>Sales Distributors</p>
      </div>
        <GraphicSuscribers/>
    </div>
  )
}
