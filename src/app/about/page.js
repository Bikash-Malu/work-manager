import React from 'react'

async function takeTime(){
  await new Promise((res)=>{
    setTimeout(res,3000)
  })
}
const page = () => {
  takeTime()
  return (
    <div>About page</div>
  )
}

export default page