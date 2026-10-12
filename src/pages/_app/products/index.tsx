import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="container">
        <h1 className='text-black'>Olá</h1>
        <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil tempore iure voluptatibus aliquid minima, tenetur similique nemo. Inventore itaque odit corporis. Magni, recusandae molestias deleniti doloremque unde ea magnam quae?</p>
      </div>
  )
}
