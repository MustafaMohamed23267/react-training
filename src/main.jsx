import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/header.jsx'
import App from './App.jsx'
import Footer from './components/footer.jsx'
import Cars from './components/cars.jsx'
import Card from './components/Card.jsx'
import './Style/footer.css'
import './Style/index.css'
import './Style/card.css'
import './Style/header.css'
import './Style/Characters.css'
import './Style/State.css'
import './Style/task.css'
import Students from './components/Characters.jsx'
import State from './components/State.jsx'
import Changeform from './components/onChange.jsx'
import Carchangefunction from './components/carChange.jsx'
import UpdateFood from './components/foodArrayUpdate.jsx'
import ChangeMovie from './components/movieArrayObject.jsx'
import Tasks from './components/TasksControl.jsx'

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)



createRoot(document.getElementById("card")).render(
  <StrictMode>
    <Card/>
  </StrictMode>
)

createRoot(document.getElementById("cars")).render(
  <StrictMode>
    <Cars/>
  </StrictMode>
)

createRoot(document.getElementById("count")).render(
  <StrictMode>
    <State/>
  </StrictMode>
)

createRoot(document.getElementById("onChange")).render(
  <StrictMode>
    <Changeform/>
  </StrictMode>
)


createRoot(document.getElementById("carChange")).render(
  <StrictMode>
    <Carchangefunction/>
    <UpdateFood/>
    <ChangeMovie/>
  </StrictMode>
)


createRoot(document.getElementById("tasks")).render(
  <StrictMode>
  
    <Tasks/>
  </StrictMode>
)


createRoot(document.getElementById("footer")).render(
  <StrictMode>
    <Footer/>
  </StrictMode>
)
/*
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App/>
  </StrictMode>
)








*/ 