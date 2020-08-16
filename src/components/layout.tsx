import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <Layout className="h-full bg-white font-sans">
      <Layout.Header className="bg-white flex items-center justify-between">
        <Link to="/">
          <div>Car Insurance</div>
        </Link>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/reviews">Reviews</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/articles">Articles</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer className="mt-8">
        <div>
          Copyright © 2009-2020 Natural Intelligence Ltd. All Rights Reserved.
        </div>
        <div>
          <div>
            Designed to help users make confident decisions online, this website
            contains information about a wide range of products and services.
            Certain details, including but not limited to prices and special
            offers, are provided to us directly from our partners and are
            dynamic and subject to change at any time without prior notice.
            Though based on meticulous research, the information we share does
            not constitute legal or professional advice or forecast, and should
            not be treated as such.
          </div>
          <div>Reproduction in whole or in part is strictly prohibited.</div>
          <div>
            <div>About Us</div>
            <div>Cookie Policy</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Partner with Us</div>
          </div>
        </div>
      </Layout.Footer>
    </Layout>
  )
}

export default MainLayout
