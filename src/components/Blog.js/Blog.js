import React from 'react'
import Card from '../Card/Card'
import blog1 from '../../assets/blog1.png'

const Blog = () => {
  return (
    <div>
        <Card ImgUrl={blog1} title={'Study Blog'} info={'Its my study Space'} cardLink={'https://libguides.com.edu/'}/>
    </div>
  )
}

export default Blog