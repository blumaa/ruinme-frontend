import React, { Component } from "react";
import { Statistic, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchReviews } from "../store/actions/reviews";

class UserAnalytics extends Component {
  componentDidMount() {
    this.props.getReviews();
  }

  render() {
    let reviews;
    if (this.props.reviews) {
      console.log(this.props.reviews);
      reviews = this.props.reviews.map(rev => {
        return (
          <Statistic color="red" key={rev.id}>
            <Statistic.Label>{rev.comment}</Statistic.Label>
          </Statistic>
        );
      });
    }
    return (
      <div className="ui main">
        <Header>Your Reviews</Header>
        <Statistic.Group>{reviews ? reviews : "Date more people"}</Statistic.Group>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.Review.currentUserReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getReviews: () => dispatch(fetchReviews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAnalytics);
