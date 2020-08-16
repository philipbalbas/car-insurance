import React from "react"
import { MDXProvider } from "@mdx-js/react"

const H2 = props => <h2 className="text-xl text-gray-900">{props.children}</h2>

const P = props => (
  <p className="text-base text-gray-900 font-light">{props.children}</p>
)

const components = {
  h2: props => (
    <h2 className="text-xl md:text-2xl text-gray-900">{props.children}</h2>
  ),
  p: props => (
    <p className="text-base text-gray-900 font-light">{props.children}</p>
  ),
  ul: props => (
    <ul className="text-base text-gray-900 list-disc pl-6">{props.children}</ul>
  ),
  ol: props => (
    <ol className="text-base list-decimal pl-6">{props.children}</ol>
  ),
  li: props => <li className="mb-3"> {props.children} </li>,
  strong: props => <strong className="font-bold">{props.children}</strong>,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}> {element} </MDXProvider>
}
