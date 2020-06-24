import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import WelcomeModal from "../components/WelcomeModal"
import { Layout, Tooltip } from "antd"

const IndexPage = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true)

  const handleSubmit = () => {
    setModalIsVisible(false)
  }

  return (
    <Layout>
      <SEO title="Compare Best Car Insurance" />
      <Layout.Header className="bg-white flex items-center justify-center">
        <Link to="/">
          <img
            src="https://umbrella.data.naturalint.com/staging/sites/uploads/photo/CI-NewLogo.20190924094322.svg"
            className="h-8"
          />
        </Link>
      </Layout.Header>
      <Layout.Content className="h-screen mx-6 my-8">
        <div className="text-right">
          <Tooltip title="This site is a free online resource that strives to offer helpful content and comparison features to its visitors. Please be advised that the operator of this site accepts advertising compensation impacts the location and order in which the companies (and/or their products) are presented, and in some cases may also impact the  rating that is assigned to them. To the extent that ratings appear on this site, such rating is determined by our subjective opinion and based on  methodology that aggregates our analysis of brand market share and reputation, each brand's conversion rates, compensation paid to us and general consumer interest. Company listings on this page DO NOT imply endorsement. We do not feature all providers on the market. Except as expressly set forth in our Terms of Use, all representations and warranties regarding the information presented on this page are disclaimed. The information, including pricing, which appears on this site is subject to change at any time.">
            <span>Advertising Disclosure</span>
          </Tooltip>
        </div>
        <div className="text-3xl font-semibold">
          Recommended for you in Los Angeles, CA
        </div>
        <div className="text-2xl">
          Here are the top insurers based on your answers.
        </div>
        <WelcomeModal visible={modalIsVisible} handleSubmit={handleSubmit} />
      </Layout.Content>
    </Layout>
  )
}
export default IndexPage
