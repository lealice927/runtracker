import React, { Component, Fragment } from 'react';
// import './assets/css/app.scss';
import './run_map.scss';
import { Route } from 'react-router-dom';
import RunResult from './run_results';
import RunStats from './run_stats';
import RunMap from './run_map';
import LastRunResult from './last_run_result';


class RunRoute extends Component {

    render() {
        const { url, path, params, isExact } = this.props.match;
        // console.log('url: ', url)
        // console.log('path: ', path)
        // console.log(this.props.match)

        return (
            <Fragment>
                <Route path="/runmap" exact component={RunMap} />
                <Route path="/runmap/results/:id" component={RunResult} />
                <Route exact path="/runmap/results/" component={LastRunResult} />
                <Route path="/runmap/stats" component={RunStats} />
            </Fragment>
        )
    }
}

export default RunRoute;
