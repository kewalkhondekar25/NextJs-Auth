import React from 'react'

const DynoProfilePage = ({params}:any) => {
  return (
    <section className='container-fluid bg-dark text-white vh-100 '>
      this is profile page and this is url value : {params.id}
    </section>
  )
}

export default DynoProfilePage
