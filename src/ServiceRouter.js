import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WebtoonHome from './components/webtoon/home/WebtoonHome';
import WebtoonView from './components/webtoon/view/WebtoonView';
import WebtoonViewer from "./components/webtoon/viewer/WebtoonViewer";
import League from './components/League';
import My from './components/My';

const ServiceRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={WebtoonHome} />
            <Route path="/webtoon/list/:sort/:day?" component={WebtoonHome} />
            <Route path="/webtoon/view/:nickname" component={WebtoonView} />
            <Route path="/webtoon/viewer/:id" component={WebtoonViewer} />
            <Route path="/league" component={League} />
            <Route path="/my" component={My} />
        </div>
    </Router>
)

export default ServiceRouter;