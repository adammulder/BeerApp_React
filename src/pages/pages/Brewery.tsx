import axios from 'axios'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Brewery() {
    const [image, setImage] = useState()
  const [name, setName] = useState()
  const [info, setInfo] = useState()


  const getImg = () => {
    axios.get('https://api.unsplash.com/photos/random?client_id=GN2vpisa82WF1jPM9gplg-y1LgpvETWSILxrwNOVi1k&query=beer')
    .then(response => {
      console.log(response)
      console.log(response.data.urls.small)
      setImage(response.data.urls.small_s3)
    }).catch(err => {
      console.log(err)
    })
  }

  const getName = () => {
    axios.get('https://api.punkapi.com/v2/beers/random')
    .then(beer => {
      console.log(beer)

      setName(beer.data[0].name)
    }).catch(err => {
      console.log(err)
    })
  }

  const getInfo = () => {
    axios.get('https://api.punkapi.com/v2/beers/random')
    .then(beer => {
      console.log(beer)

      setInfo(beer.data[0].description)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <div>
        <div className='flex justify-center pt-20 p-5 bg-gradient-to-t from-red-500 to-[#38b6ff]'>
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
            sx={{ height:300 }}
            image={image}
            title="beer"
             />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {info}
                </Typography>
            </CardContent>
            <CardActions>
                <button className='bg-red-400 border-solid rounded-lg border-5 p-3 text-white hover:bg-[#38b6ff]' onClick={() =>{getImg(); getName(); getInfo();}}>
                    Click Me!
                </button>
            </CardActions>
        </Card>
        </div>
        <div className='flex justify-center pt-10 p-5 bg-gradient-to-t h-[45vh] from-[#38b6ff] to-red-500'>
           <h1 className='text-white text-8xl'>Beer Randomizer</h1>

        </div>


        {/* <div className='flex justify-center static h-screen bg-gradient-to-t from-red-500 to-[#38b6ff] p-5 pt-40'>
            <div className='flex box-border h-[55vh] w-[35vw] p-5 border-4 shadow-2xl bg-white'>
                <img src={image} alt="" />
                <button onClick={() =>{getImg();}}>click</button>
            </div>
            <div className='flex absolute bg-transparent justify-start bottom-32 tracking-wide '>
            <h1 className='text-white text-7xl font-bold shadow-xl align-top p-4'>Brewery</h1>
            <h1 className='text-white text-7xl font-bold shadow-xl p-4'>Randomizer</h1>
        </div>
            
        
     
        </div> */}
    </div>
  )
}

export default Brewery