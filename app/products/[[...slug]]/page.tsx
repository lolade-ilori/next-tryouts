import React from 'react'

interface Props {
    params: {slug: string[]}
    searchParams: {sortOrder: string}
}

const ProductsDetails = ({params : {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>ProductsDetails {slug} {sortOrder}</div>
  )
}

export default ProductsDetails