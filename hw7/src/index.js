import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';


ReactDOM.render(
        <Router>
            <Layout/>
        </Router>,
    document.getElementById('root'));


