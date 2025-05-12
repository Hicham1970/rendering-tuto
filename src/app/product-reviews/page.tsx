import React from 'react';
import { Suspense } from 'react';
import { Product } from  '@/components/product';
import { Reviews } from '@/components/reviews';

function ProducteReviews() {
  return (
      <div>
          <h1>Product Reviews</h1>
          <Suspense fallback={<h1>Loading Product Page...</h1>}>
              <Product />
          </Suspense>
            <Suspense fallback={<h1>Loading Reviews Page...</h1>}>
                <Reviews />
            </Suspense> 
    </div>
  )
}

export default ProducteReviews
