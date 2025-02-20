import React, { Suspense } from 'react'
import Lazy from './Lazy'
const LazyLoading = () => {
    const Lazy=React.lazy(()=> import ('./SuspenseComponent/lazy'))
  return (
    <div>
        <SuspenseComponent>
        <Lazy/>
        </SuspenseComponent>
      
    </div>
  )
}

export default LazyLoading
