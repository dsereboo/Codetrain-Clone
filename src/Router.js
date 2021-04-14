import React from "react"
import{BrowserRouter as AppRouter, Route, Link} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import ServiceDetails from "./components/ServiceDetails"
import Services from "./components/Services"
const Router=()=>{
    return(
        <AppRouter>
             <nav>
                 <Link to="/">Home</Link>
                 <Link  to="/about">About</Link>
                 <Link  to="/contact">Contact</Link>
                 <Link  to="/services">Services</Link>
             </nav>
             <hr></hr>

             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route exact path="/services" component={Services}/>
             <Route path="/services/:id" component={ServiceDetails}></Route>
        </AppRouter>
       
    )
}
export default Router