import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from "./Compoenets/Home"
import HelpCenter from './Compoenets/HelpCenter'
import Contact from './Compoenets/Contact'
import PrivacyPolicy from './Compoenets/PrivacyPolicy'

export class AppRoutes extends Component {
    render() {
        return (
           <Switch>
               <Route exact path="/"><Home></Home></Route>
               <Route  path="/HelpCenter"><HelpCenter></HelpCenter></Route>
               <Route  path="/Contact"><Contact></Contact></Route>
               <Route path="/PrivacyPolicy"><PrivacyPolicy></PrivacyPolicy></Route>
           </Switch>
        )
    }
}

export default AppRoutes
