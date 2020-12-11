import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Tab } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { ADD_COMMENT, PRODUCT_COMMENTS } from "../graphql";

const ListComments = ({ comments }) => {
  return (
    <React.Fragment>
      <div className="review-wrapper">
        {comments?.map((comment, index) => {
          return <SingleComment comment={comment} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
};

const ProductReview = () => {
  let { id } = useParams();

  const [comments, setComments] = useState([]);

  const { loading, error, data } = useQuery(PRODUCT_COMMENTS, {
    variables: { productId: parseInt(id), limit: 5 },
  });
  useEffect(() => {
    setComments(data?.comments.comments);
  }, [data]);


  const updateComments = (comment) => {
    if (comment) {
      let array = Array.from(new Set([...comments, comment]));
      setComments(array);
    }
  };
  return (
    <React.Fragment>
      <Tab.Pane eventKey="productReviews">
        <div className="row">
          <div className="col-lg-7">
            <ListComments comments={comments} />
          </div>
          <div className="col-lg-5">
            <CommentInput setComments={updateComments} />
          </div>
        </div>
      </Tab.Pane>
    </React.Fragment>
  );
};

const SingleComment = (props) => {
  return (
    <div className="single-review">
      <div className="review-img">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/testimonial/1.jpg"}
          alt=""
        />
      </div>
      <div className="review-content">
        <div className="review-top-wrap">
          <div className="review-left">
            <div className="review-name review-rating">
              <h4>{props.comment?.user?.username}</h4>
            </div>
            {/* style={{color: "#ffa900"}}  to be used later*/}
            <div className="review-rating">
              <Rating
                fractions={2}
                readonly
                initialRating={props.comment?.rating?.rating || 1}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
              />
            </div>
          </div>
        </div>
        <div className="review-bottom">
          <p>
            {props.comment?.comment +
              `Vestibulum ante ipsum primis aucibus orci luctustrices posuere
            cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper
            euismod vehicula. Phasellus quam nisi, congue id nulla.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export const CommentInput = ({ setComments }) => {
  const [comment, setComment] = useState({
    comment: "",
    rating: 0,
  });
  let { id } = useParams();

  const [addComment, { loading, data, error }] = useMutation(ADD_COMMENT, {
    refetchQueries: PRODUCT_COMMENTS,
    variables: { productId: parseInt(id) },
  });

  useEffect(() => {
    setComment({
      comment: "",
      rating: 0,
    });
    if (data) setComments(data?.createComment);
  }, [data]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      comment: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    addComment({
      variables: {
        comment: comment.comment,
        rating: parseInt(comment.rating),
        productId: parseInt(id),
      },
    });
    console.log(comment);
  };
  return (
    <React.Fragment>
      <div className="ratting-form-wrapper ">
        <h3>Add a Review</h3>
        <div className="ratting-form">
          <form action="#">
            <div className="star-box">
              <span>Your rating:</span>
              <div
                style={{ marginLeft: "8px" }}
                className="review-rating ratting-star"
              >
                <Rating
                  onChange={(rate) =>
                    setComment({
                      ...comment,
                      rating: rate,
                    })
                  }
                  initialRating={comment.rating}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rating-form-style form-submit">
                  <textarea
                    name="comment"
                    onChange={handleChange}
                    placeholder="Message"
                    value={comment.comment}
                  />
                  <input
                    type="submit"
                    disabled={loading}
                    onClick={submit}
                    defaultValue="Submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductReview;
