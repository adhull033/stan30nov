import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import Our_story from './components/Our_story';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Properties from './components/Properties';
// import Detailing_page from './components/Detailing_page';
import Details from './components/Datails';
import Footer from './components/Footer';
import Send_enquiry from './components/Send_enquiry';
// import Detail_Testing from './components/Detail_Testing';
import PrivacyPolicy from './components/PrivacyPolicy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { propertyData, searchData } from './Redux/Slice';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/properties?populate=deep`)
    .then((response) => {
        // SetpropertyList(response?.data?.data)
        dispatch(propertyData({ propertyLists: response?.data?.data }))
        dispatch(searchData({ searchLists: [] }))
    })
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/ourstory' element={<Our_story/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/:slug' element={<Details/>} />
          <Route path='/send' element={<Send_enquiry/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        </Routes>
        <Footer/>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
