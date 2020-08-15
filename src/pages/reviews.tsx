import React from "react"

import MainLayout from "../components/layout"
import ReviewsList from "../components/reviews"
import StickyBanner from "../components/StickyBanner"

const Reviews = () => {
  return (
    <MainLayout>
      <div
        className="px-4 flex m-auto relative"
        style={{
          maxWidth: 1024,
        }}
      >
        <ReviewsList />
        <StickyBanner />
      </div>
    </MainLayout>
  )
}

export default Reviews
