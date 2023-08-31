import React from 'react'
import type { Metadata } from 'next'
export const metadata:Metadata = {
    title: 'รายละเอียดสินค้า',
    description: 'Product Description',
} 
function productDetail({children} : {children : React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}

export default productDetail