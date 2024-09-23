import { CustonIcon } from '@/components/CustomIcon'
import { CarsSummaRyProps } from './CardSummary.types'

export const CardSummary = (Props: CarsSummaRyProps) => {

  const { icon: Icon, average, title, tooltipText, total } = Props
  return (
    <div className='shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition'>
      <div className='flex justify-between'>
        <CustonIcon icon={Icon}/>
        {title}
      </div>
    </div>
  )
}
