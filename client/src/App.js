import React,{useState,useEffect} from 'react'
import './App.css';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {Room,Star} from '@material-ui/icons';
import axios from 'axios'
import { format } from 'timeago.js';

const url = 'https://mern-travel-app.cyclic.app/api'

function App() {

  const myStorage = window.localStorage; 
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 21.7679,
    longitude: 78.8718,
    zoom: 4
  });

  const [currentUser,setCurrentUser] = useState(myStorage.getItem("user"));
  const [pins , setPins] = useState([]);
  const [currentPlaceId , setCurrentPlaceId] = useState(null);
  const [newPlace , setNewPlace] = useState(null);
  const [title,setTitle] = useState(null);
  const [desc,setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const[showRegister,setShowRegister] = useState(false);
  const[showLogin,setShowLogin] = useState(false);


  useEffect(() => {
      const getPins = async () =>{
          try{
            const res = await axios.get(`${url}/pins`);
            console.log(res) 
            setPins(res.data)  
          }catch(err){
             console.log(err)
          }
      }
      getPins()
  }, [])

  const handleClick = (id,lat,long) =>{
    setCurrentPlaceId(id)
    setViewport({...viewport , latitude:lat, longitude:long})
  };

  const handleAddPlace = (e) =>{
    const [long,lat] = e.lngLat

    console.log(e)
    setNewPlace({
      lat,long
    })
    
  };

  const handlePlaceSubmit = async (e) =>{
     e.preventDefault()
     const newPin = {
       username : currentUser,
       title,
       desc,
       rating : star,
       lat : newPlace.lat,
       long : newPlace.long,
     }
     try{
         const res = await axios.post('/pins',newPin);
         setPins([...pins, res.data])
         setNewPlace(null)
     }catch(err){
       console.log(err)
     }
  };

  const handleLogout = () =>{
    myStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div className="App">
         <ReactMapGL {...viewport}
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle = 'mapbox://styles/dkmap397787/ckswt1nbw55ml18o277cfsfh2'
            onDblClick={handleAddPlace}
            transitionDuration = '200' >
            
           
            {
               pins.map(p => (
                <>
                  <Marker 
                  key={p._id}
                    latitude ={p.lat} 
                    longitude={p.long} 
                    offsetLeft={-viewport.zoom * 3.5} 
                    offsetTop={-viewport.zoom * 7}>
                   <Room style={{fontSize : viewport.zoom * 7,color: p.username === currentUser ? '#ff5e57': '#0984e3', cursor:'pointer' }}
                   onClick={() => handleClick(p._id, p.lat,p.long)}/>
                  </Marker>

                { 
                  p._id === currentPlaceId && 
                  
                  <Popup
                      latitude={p.lat}
                      longitude={p.long}
                      closeButton={true}
                      closeOnClick={false}
                      onClose={() => setCurrentPlaceId(null)}
                      anchor="left" >
                      <div className="card">
                        <label>Place</label>
                        <h4 className="place">{p.title}</h4>
                        <label>Review</label>
                        <p className="desc">{p.desc}</p>
                        <label>Rating</label>
                        <div className="stars">
                        {Array(p.rating).fill(<Star className="star" />)}
                        </div>
                        <label>Information</label>
                        <span className="username">Created by <b>{p.username}</b></span>
                        <span className="date">{format(p.createdAt)}</span>
                      </div>
                  </Popup>
                  
                }


                </>
              ))
            }


              {
                 newPlace && (
                <>
                  <Marker
                     latitude={newPlace.lat}
                     longitude={newPlace.long}
                     offsetLeft={-3.5 * viewport.zoom}
                     offsetTop={-7 * viewport.zoom}
                    >
                  <Room
                    style={{fontSize: 7 * viewport.zoom,color: "tomato",cursor: "pointer"}}
                   />
                      </Marker>
                   
                      <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form onSubmit={handlePlaceSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
            </Popup>
                  </>
                )}
            
            {
              currentUser ? (
                 <button className="button logout" onClick={handleLogout}>
                    Logout
                 </button>
                 ) :
               (
                 <div className="buttons">
                   <button className="button login" onClick={()=>setShowLogin(true)}>Login</button>
                   <button className="button register" onClick={()=>setShowRegister(true)}>Register</button>
                 </div>
               )
            }
             {showRegister && (<Register setShowRegister={setShowRegister}/>)}
             {showLogin && (
                <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser}/>)}
             

         </ReactMapGL>
    </div>
  );
}

export default App;
