import React from 'react'
import Link from 'next/link'


function ProductsPage() {
    return (
        <>
            <h1>Products Page</h1>
            <Link href='/products/1'>Product 1</Link>
            <Link href='/products/2'>Product 2</Link>
            <Link href='/products/3'>Product 3</Link>
        </>
  )
}

export default ProductsPage
