import React, { SFC } from 'react'

import './layout.css'

interface LayoutProp {}

const Layout: SFC<LayoutProp> = props => {
  return <div>{props.children}</div>
}

export default Layout
