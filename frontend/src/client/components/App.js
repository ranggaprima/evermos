import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { getMovie } from '../../store/reducers';

import Card from './Card'
import './css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      searchvalue: '',
    }
  }

  static propTypes = {
    getMovieList: PropTypes.func.isRequired,
    movieData: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  }

  componentWillMount() {
    this.props.getMovieList();
  }

  searchHandleClick = e => {
    e.preventDefault()
    const inputValue = document.getElementById('search').value;
    this.setState({ searchvalue: inputValue })
    console.log('Value: ', inputValue)
  }

  render() {
    const { loading, error, movieData } = this.props
    const { searchvalue } = this.state

    return (
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="search"
            />
            <button className="search_button" onClick={this.searchHandleClick}>Search</button>
          </div>
          <div className="content flexWrap">
            {loading ? 'Loading...' : error ? 'OOPS!!! There was an error connection' : (
              movieData
              .filter(data => new RegExp(searchvalue, "i").test(data.title) ||
              new RegExp(searchvalue, "i").test(data.description) ||
              new RegExp(searchvalue, "i").test(data.director)
              )
              .map((card, index) => (
                <Card
                  key={index}
                  id={card.id}
                  director={card.director}
                  title={card.title}
                  description={card.description}
                  producer={card.producer}
                  release_date={card.release_date}
                  rt_score={card.rt_score}
                />
              ))

            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieData: state.movieData,
    error: state.error,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieList: (url) => dispatch(getMovie(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


