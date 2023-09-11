import React, { Suspense } from 'react'
import type { Metadata } from 'next'
// import Loading from '../../../loading'
export const metadata:Metadata = {
    title: 'รายละเอียดสินค้า',
    description: 'Product Description',
} 
function productDetail({children} : {children : React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default productDetail