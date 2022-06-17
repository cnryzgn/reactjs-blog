import React from 'react'

import Post from './Post'
import Aside from './Aside/Aside'

const Main = () => {
  return (
    <main>
      <div>
        <Post />
        <Post />
        <Post />
      </div>

      <Aside />
    </main>
  )
}

export default Main