import { Pagination } from '@/components/ui/pagination'
import { IMeta } from '@/lib/types'
import PaginationAll from './Pagination'


const PremiumPagination = ({meta} : {meta:IMeta}) => {
  return (
    <div className="">
      <Pagination>
          <PaginationAll meta={meta} />
        </Pagination>
    </div>
  )
}

export default PremiumPagination