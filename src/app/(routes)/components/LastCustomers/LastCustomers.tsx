import { CustonIcon } from '@/components/CustomIcon'
import { Building } from 'lucide-react'
import React from 'react'
import { CustomerTable } from '../CustomerTable'

export const LastCustomers = () => {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5'>
        <div className='flex gap-x-2 items-center'>
            <CustonIcon icon={Building} />
            <p className='text-xl'>Last customers</p>
        </div>
        <div>
          <CustomerTable />
        </div>
    </div>
  )
}
