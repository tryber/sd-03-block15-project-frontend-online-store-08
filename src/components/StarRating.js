import React from 'react';
import BeautyStars from 'beauty-stars';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    const readProduct = this.lastAvaliation();

    if (typeof (readProduct) !== 'undefined') {
      const { productId, value, comment } = readProduct;
      this.state = ({ productId, value, comment, previous: true });
    } else {
      this.state = ({ productId: '', value: 0, comment: '', previous: false });
    }

    this.isAlreadyVariableOnLocalStorage = this.isAlreadyVariableOnLocalStorage.bind(this);
    this.lastAvaliation = this.lastAvaliation.bind(this);
    this.saveRating = this.saveRating.bind(this);
    this.getIndexOfProduct = this.getIndexOfProduct.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  getIndexOfProduct() {
    let prevRating = [];
    prevRating = JSON.parse(localStorage.getItem('rating'));
    const { id } = this.props;
    let index;
    prevRating.forEach((e, idx) => {
      if (e.productId === id) {
        index = idx;
      }
    });
    return index;
  }

  isAlreadyVariableOnLocalStorage() {
    let prevRating = [];
    if (JSON.parse(localStorage.getItem('rating'))) {
      prevRating = JSON.parse(localStorage.getItem('rating'));
    }

    return prevRating;
  }

  lastAvaliation() {
    const prevRating = this.isAlreadyVariableOnLocalStorage();
    const { id } = this.props;
    let readProduct;

    if (prevRating.length) {
      readProduct = prevRating.find((e) => e.productId === id);
    }
    /*
    if (typeof (readProduct) !== 'undefined') {
      return readProduct;
    }
    */
   return readProduct;
  }

  updateComment(comment) {
    this.setState({ comment });
  }

  saveRating() {
    const { id } = this.props;
    let prevRating = this.isAlreadyVariableOnLocalStorage();
    const rating = {
      productId: id,
      value: this.state.value,
      comment: this.state.comment,
    };

    if (this.state.previous) {
      prevRating[this.getIndexOfProduct()] = rating;
    } else if (prevRating.length) {
      prevRating = [...prevRating, rating];
    } else {
      prevRating = [rating];
    }

    localStorage.setItem('rating', JSON.stringify(prevRating));
    this.setState({ comment: '' }, window.location.reload(true));
  }

  render() {
    let comment = '';
    if (this.state.previous) { comment = this.lastAvaliation().comment; }
    return (
      <div>
        <BeautyStars
          value={this.state.value}
          onChange={(value) => this.setState({ value },
              () => this.saveRating())
          }
          size="10px"
        />
        <label htmlFor="userComment">Escreva seu comentário:</label>
        <div>
          <input
            type="textArea" name="userComment"
            onChange={(e) => this.updateComment(e.target.value)}
            data-testid="product-detail-evaluation"
          />
          <button onClick={() => this.saveRating()}>Enviar</button>
        </div>
        <div>
          {this.state.previous &&
          <div>
            <p>Último Comentário: {comment}</p>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default StarRating;
