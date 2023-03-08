import Background from '../../assets/images/BeerTopia1.jpg'



function Home() {
  return (
    <div>
      <div className='bg-gradient-to-tl from-[#38b6ff] to-red-500
        h-screen w-full relative -z-10'>
        <img src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        className="w-full h-full object-cover absolute mix-blend-soft-light"/>
        <div className='p-24'>
          <h1 className='text-white text-6xl font-bold  text-center pt-20 tracking-wide'>Beertopia</h1>
          <p className='text-white text-center pt-60 text-2xl'>A place for beer enthusiasts  </p>
        </div>
    </div>
 </div>
  )
}

export default Home
