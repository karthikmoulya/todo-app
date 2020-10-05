import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/CreateTodo/CreateTodo';
import EditTodo from './components/EditTodo/EditTodo';
import TodosList from './components/TodosList/TodosList';

import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='/'>
              <img
                src={logo}
                width='30'
                height='30'
                alt='CodingTheSmartWay.com'
              />
            </a>
            <Link to='/' className='navbar-brand'>
              Todo App
            </Link>
            <div className='collpase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Todos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/create' className='nav-link'>
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
