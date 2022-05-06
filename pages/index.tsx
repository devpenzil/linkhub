import type { NextPage } from 'next'
import app from '../appwrite/config'

const Home: NextPage = () => {
  const handleClick = () => {
    app.account.create('123sss45','ajoalex012aa@gmail.com','Ajo@2001','Ajo Alex').then((Response)=>{
      console.log(Response);
      
    }).catch((Error)=>{
      console.log(Error);
      
    })
  }
  return (
    <div >
     <button onClick={handleClick}>
       login
     </button>
    
    </div>
  )
}

export default Home
