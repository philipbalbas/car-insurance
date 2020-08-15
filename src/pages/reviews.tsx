import React from "react"
import loadable from "@loadable/component"

import MainLayout from "../components/layout"
const ReviewsList = loadable(() => import("../components/reviews"))
const StickyBanner = loadable(() => import("../components/StickyBanner"))

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
