import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const GlobalLoading = () => {
  return (
    <div className='flex justify-center items-center py-14'>
        <Spinner/>
    </div>
  )
}

export default GlobalLoading