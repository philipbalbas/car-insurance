import React from "react"
import { Link } from "gatsby"
import { useResponsive } from "ahooks"
import StickyImage from "./StickyBackgroundImage"

const StickyBanner = () => {
  const { md, lg } = useResponsive()
  return (
    <div
      style={{
        maxWidth: 288,
      }}
    >
      <Link
        className="fixed bottom-0 left-0 lg:sticky lg:top-0 lg:bottom-auto lg:left-auto w-full block"
        to="/"
      >
        {lg ? (
          <div className="border border-solid border-gray-400 text-gray-800">
            <StickyImage
              className="text-lg font-bold uppercase text-center p-4"
              style={{
                height: 215,
              }}
            />
            <div className="px-5">
              <div className="text-center text-base py-4 border-b border-solid border-gray-400">
                Save money
                <br />
                on your car insurance
              </div>
              <div className="text-center text-base py-4 border-b border-solid border-gray-400">
                Save time
                <br />
                top carriers in one place
              </div>
              <div className="text-center text-base py-4">
                Choose from
                <br />
                relevant insurance carriers
              </div>
            </div>
            <div className="py-3 px-4">
              <button className="inline-block h-10 bg-blue-700 text-white w-full rounded shadow-lg font-semibold outline-none transition-all  duration-500 ease-in-out transform hover:scale-105">
                Get Free Quotes
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-blue-700 text-white h-12 text-base md:text-xl flex items-center justify-center">
            Save up to 50% {md ? "on your car insurance!" : ""} - Get free
            quotes ❯
          </div>
        )}
      </Link>
    </div>
  )
}

export default StickyBanner
