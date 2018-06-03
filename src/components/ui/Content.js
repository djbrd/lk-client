import React from 'react'
import Game from './Game'
import Reward from './Reward'
import { Switch, Route } from 'react-router-dom'

const Content = () =>
    <Switch>
        <Route path='/game' component={Game}/>
        <Route path='/reward' component={Reward}/>
    </Switch>

export default Content