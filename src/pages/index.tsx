import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Layout, Tooltip, Button } from "antd"
import loadable from "@loadable/component"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const WelcomeModal = loadable(() => import("../components/WelcomeModal"))

const insurers = [
  {
    name: "21st Century",
    link: "/",
  },
  {
    name: "Agilerates",
    link: "/",
  },
  {
    name: "AllState",
    link: "/",
  },
  {
    name: "Best Auto Insurance",
    link: "/",
  },
  {
    name: "Blue Sky Coverage",
    link: "/",
  },
  {
    name: "ClearCover",
    link: "/",
  },
  {
    name: "Compare",
    link: "/",
  },
  {
    name: "Dairyland Insurance",
    link: "/",
  },
  {
    name: "Elephant",
    link: "/",
  },
  {
    name: "Farmers",
    link: "/",
  },
  {
    name: "Geico",
    link: "/",
  },
  {
    name: "Insurify",
    link: "/",
  },
  {
    name: "Liberty Mutual",
    link: "/",
  },
  {
    name: "Metlife",
    link: "/",
  },
  {
    name: "National General",
    link: "/",
  },
  {
    name: "Progressive",
    link: "/",
  },
  {
    name: "Liberty Mutual",
    link: "/",
  },
  {
    name: "Root Insurance",
    link: "/",
  },
  {
    name: "Safeauto",
    link: "/",
  },
  {
    name: "Select National Insurance",
    link: "/",
  },
  {
    name: "Serenity Insurance",
    link: "/",
  },
  {
    name: "The General",
    link: "/",
  },
  {
    name: "The Insurance Center",
    link: "/",
  },
  {
    name: "The Zebra",
    link: "/",
  },
  {
    name: "Wawanesa",
    link: "/",
  },
]

const IndexPage = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const handleSubmit = () => {
    setModalIsVisible(false)
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.defer = true
    script.src = "https://api.lincx.com/ad"
    script.setAttribute("data-zone-id", "c2barv")
    document.getElementById("offers")?.appendChild(script)
  }, [])

  return (
    <Layout className="h-full bg-gray-100">
      <SEO title="Compare Best Car Insurance" />
      <Layout.Header className="bg-white flex items-center justify-center md:justify-start">
        <Link to="/">
          <img
            src="https://umbrella.data.naturalint.com/staging/sites/uploads/photo/CI-NewLogo.20190924094322.svg"
            className="h-8"
          />
        </Link>
      </Layout.Header>
      <Layout.Content>
        <div className="bg-blue-700 p-8">
          <div>
            <div className="text-white text-4xl font-light">
              Best Car Insurance Quotes in 2020
            </div>
            <div className="text-white text-sm font-light">
              Last update: 6/29/2020
            </div>
            <div className="flex">
              <div className="bg-white px-4 py-2 mt-2 text-blue-700 text-xl">
                Drive easy, knowing you're covered
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 my-8">
          <div className="text-right">
            <Tooltip title="This site is a free online resource that strives to offer helpful content and comparison features to its visitors. Please be advised that the operator of this site accepts advertising compensation impacts the location and order in which the companies (and/or their products) are presented, and in some cases may also impact the  rating that is assigned to them. To the extent that ratings appear on this site, such rating is determined by our subjective opinion and based on  methodology that aggregates our analysis of brand market share and reputation, each brand's conversion rates, compensation paid to us and general consumer interest. Company listings on this page DO NOT imply endorsement. We do not feature all providers on the market. Except as expressly set forth in our Terms of Use, all representations and warranties regarding the information presented on this page are disclaimed. The information, including pricing, which appears on this site is subject to change at any time.">
              <span>Advertising Disclosure</span>
            </Tooltip>
          </div>
          <div>
            <div className="text-3xl font-semibold">
              Recommended for you in Los Angeles, CA
            </div>
            <div className="text-2xl">
              Here are the top insurers based on your answers.
            </div>
            <div id="offers"></div>
          </div>
          <div>
            <div className="text-base text-gray-900 font-semibold mb-4">
              Additional Companies
            </div>
            <div className="flex flex-wrap">
              {insurers.map((item, i) => (
                <Link to={item.link} key={i} className="mx-2 mb-2">
                  <Button className="uppercase text-sm" size="large">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-3xl md:text-xl font-semibold text-gray-900 mb-4">
              Car Insurance in United States
            </div>
            <div className="text-base text-gray-900 mb-3 font-light">
              In virtually all U.S. states, motorists are legally obligated to
              purchase bodily injury liability and property damage liability. A
              handful of states also require drivers to purchase extras, such as
              uninsured & underinsured motorist coverage and personal injury
              protection (PIP). Penalties for non-compliance range from small
              fines to suspension of license and/or registration, vehicle
              impoundment, and in some cases imprisonment.
            </div>
            <div className="text-base text-gray-900 mb-3 font-light">
              Thirty-eight states are what is known as “fault” insurance states,
              whereby the driver who is at fault in an accident is legally
              responsible to cover damages through their bodily-injury and
              property-damage liability coverage. The remaining 12 states are
              “no-fault” states, whereby policyholders claim losses from their
              own insurance provider – regardless of which driver was at fault.
            </div>
            <div className="text-base text-gray-900 mb-3 font-light">
              The best auto insurance companies in each state provide liability,
              comprehensive, collision, PIP, and uninsured & underinsured
              motorist coverage, plus a range of paid add-ons.
            </div>
          </div>

          <div className="text-2xl md:text-base text-gray-900 mb-3 font-light">
            Get a quote for the coverage you need from United States Insurance
          </div>

          <div>
            <div className="text-3xl md:text-xl font-semibold text-gray-900 mb-3">
              How to Choose Car Insurance
            </div>
            <div className="text-xl  md:text-base font-light text-gray-900 mb-3">
              As a general rule, it’s best to first decide what type or types of
              car insurance you wish to purchase, and comparing a few different
              insurance companies before making your final decision.
            </div>
            <ul className="list-disc pl-6">
              <li className="text-xl md:text-base font-light text-gray-900">
                <span className="font-bold">Rate: </span> A couple of dollars
                difference in monthly payments might not seem like much, but
                stretch that out over 12 months, 24 months, or 60 months and it
                can start to have a big impact.
              </li>
              <li className="text-xl md:text-base font-light text-gray-900">
                <span className="font-bold">Level of coverage: </span> Check out
                reviews of the best car insurance companies to make sure you’re
                well informed. For a general assessment of company reputation
                and customer satisfaction , you can also check how the company
                is rated by the Better Business Bureau.
              </li>
              <li className="text-xl md:text-base font-light text-gray-900">
                <span className="font-bold">Reputation: </span> A couple of
                dollars difference in monthly payments might not seem like much,
                but stretch that out over 12 months, 24 months, or 60 months and
                it can start to have a big impact.
              </li>
              <li className="text-xl md:text-base font-light text-gray-900">
                <span className="font-bold">Driver reward programs: </span> Does
                the insurance company offer any discounts or driver rewards?
                Examples include rewards for not getting into accidents for a
                specific time period or for agreeing to sending the insurance
                company data on your driving behavior. Some of the best car
                insurance companies like National Family may have a driver
                reward program so it's worth looking into.
              </li>
            </ul>
          </div>

          <div>
            <div className="text-3xl  md:text-xl font-semibold text-gray-900 mb-3">
              How to Purchase Car Insurance
            </div>
            <div className="text-xl md:text-base   font-light text-gray-900 mb-3">
              To get started, just go to the company’s website and request a
              quote. You’ll be asked to fill in a few details about yourself and
              your vehicle. Within a few seconds you’ll be redirected to a
              screen with your quote or, in some cases, you’ll be emailed the
              quote. You can then choose whether or not to go ahead and complete
              your application.
            </div>
            <div className="text-xl md:text-base font-light text-gray-900 mb-3">
              The key to getting the best rate for your needs is to compare
              quotes and policies from multiple providers. The more companies
              you compare, the more time it will require—but the more money it
              may end up saving you in the long run.
            </div>
            <div className="text-xl md:text-base font-light text-gray-900 mb-3">
              Get started now by requesting your quote from National Family
            </div>
          </div>
        </div>
        <WelcomeModal visible={modalIsVisible} handleSubmit={handleSubmit} />
      </Layout.Content>
      <Layout.Footer>
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
export default IndexPage
