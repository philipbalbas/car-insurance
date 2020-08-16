import React from "react"

import MainLayout from "../components/layout"
import ArticlesList from "../components/ArticlesList"
import StickyBanner from "../components/StickyBanner"

const Articles = () => {
  return (
    <MainLayout>
      <div className="px-4 flex m-auto relative max-w-screen-lg">
        <ArticlesList />
        <StickyBanner />
      </div>
    </MainLayout>
  )
}

export default Articles
