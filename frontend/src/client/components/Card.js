import React from 'react';
import './css/Card.css';

class Card extends React.Component {

  handleMovieCard = id => {
    console.log('ID: ', id)
  }

  render() {
    return (
      <div className="card">
        <figure className="card_content">         
          <figcaption>
            <a href={`movie/${this.props.id}`}>
              <h3>{this.props.title} ({this.props.release_date})</h3>
            {/* <span className="title"
              onClick={() => this.handleMovieCard(this.props.id)}>
              <h3>{this.props.title} ({this.props.release_date})</h3>
            </span> */}
            </a>
            <hr />
            <div className="description" 
              dangerouslySetInnerHTML={{ __html: this.props.description }} 
            />
            <div className="tags">
              <div>Producer: {this.props.producer}</div>
              <div>Director: {this.props.director}</div>
              <div>Score: {this.props.rt_score}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Card;


