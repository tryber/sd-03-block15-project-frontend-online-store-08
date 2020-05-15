import React, { Component } from "react";
import BeautyStars from "beauty-stars";

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '', 
      value: 0,
      comment: '',
    };
    this.saveRating = this.saveRating.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  componentDidMount() {
    const prevRating = JSON.parse(localStorage.getItem('rating'));
    if (prevRating) {
      const { productId, value, comment} = prevRating;
      this.setState(
        { 
          productId,
          value,
          comment,
        }
      ); 
    }
  }

  updateComment(comment){
    this.setState({comment});
  }

  saveRating() {
    const { id } = this.props;
    const rating = {};
    rating.productId = id;
    rating.value = this.state.value;
    rating.comment = this.state.comment;
    localStorage.setItem('rating', JSON.stringify(rating));
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
      <BeautyStars
        value={this.state.value}
        onChange={
          value => this.setState(
            { value },
            () => this.saveRating())
        }
        size="10px"
      />
      <label htmlFor = "userComment">Escreva seu comentário:
      </label>
      <div>
        <input
          type="textArea" name="userComment" value={this.state.comment}
          onChange={(e)=> this.updateComment(e.target.value)}
          data-testid="product-detail-evaluation" 
        />
        <button onClick={() => this.saveRating()}>Enviar</button>
      </div>
      </div>
    );
  }
}

export default StarRating;
