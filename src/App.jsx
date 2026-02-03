
import conf from './conf/conf';
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);//isme issue aayega
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(conf.appwriteUrl);
  

  return (
    <>
      <h1>A blog App with Appwrite</h1>
    </>
  )
}

export default App
