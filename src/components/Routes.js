import { Router, Switch, Route } from 'react-router-dom';
import Delete from './Delete';
import Update from './Update';
import Recipes from './Recipes';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Recipes /></Route>
            </Switch>
            <Switch>
                <Route path="/delete"><Delete /></Route>
            </Switch>
            <Switch>
                <Route path="/update"><Update /></Route>
            </Switch>
        </div>
    );
};

export default Routes;