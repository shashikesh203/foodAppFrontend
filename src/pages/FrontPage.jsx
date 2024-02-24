import React from 'react'
import list from '../Data'
import Card from '../component/Card'

const FrontPage = () => {
  return( <section>
    {
        list.map((item)=>(
            <Card item={item} key={item.id}  />
        ))
    }
</section>)
}

export default FrontPage