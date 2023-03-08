

function About() {
  return (
    <div>
      <div className='bg-gradient-to-tl from-[#38b6ff] to-red-500
      h-screen w-full relative -z-10'>
        <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" className="w-full h-full object-cover absolute mix-blend-multiply"/>
        <div className='p-24'>
          <h1 className='text-white text-6xl font-bold text-center'>About</h1>
          <p className='text-white text-center pt-60 text-2xl'>Have fun at Beertopia </p>
          <p className='text-white text-center text-xl pt-4'>Learn more about Beer and just enjoy exploring the art of brewing. Enjoy! </p>
        </div>
      </div>

   </div>
  )
}

export default About