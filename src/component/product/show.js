import React, { useState, useEffect } from "react";
import { Title } from "../../util";
import { useQuery, useMutation } from "react-apollo";
import {
  GET_PRODUCT,
  ADD_COMMENT,
  PRODUCT_COMMENTS,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from "./graphql";
import { useParams } from "react-router-dom";
import { MDBView } from "mdbreact";
import { MDBMask, MDBMedia } from "mdbreact";
import { MDBInput } from "mdbreact";
import { MDBCard } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { MDBIcon } from "mdbreact";
import { MDBContainer } from "mdbreact";
import { MDBCol } from "mdbreact";

const ProductShow = () => {
  let { id } = useParams();
  id = parseInt(id);

  const { error, loading, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (error) return <div>Error</div>;
  return (
    <React.Fragment>
      <div className="container">
        <Title title={data.product.name} />
        <NewsImage image={data.product.images[0].filename} />

        <CommentList />
        <MDBMedia list className="mt-3">
          <MDBMedia tag="li">
            <MDBMedia left href="#">
              <MDBMedia
                object
                src="http://via.placeholder.com/64x64"
                alt="Generic placeholder image"
              />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>MDBMedia heading</MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <MDBMedia>
                <MDBMedia left href="#">
                  <MDBMedia
                    object
                    src="http://via.placeholder.com/64x64"
                    alt="Generic placeholder image"
                  />
                </MDBMedia>
                <MDBMedia body>
                  <MDBMedia heading>Nested media heading</MDBMedia>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
        <div id="#comment"> hello</div>
      </div>
    </React.Fragment>
  );
};

const Delete = (props) => {
  const { id } = useParams();
  const [deleteProduct, { data }] = useMutation(DELETE_COMMENT, {
    variables: { productId: parseInt(id) },
  });

  if (data) console.log(data);

  const submit = () => {
    deleteProduct({ variables: { id: props.id } });
    console.log(props.id);
  };
  return (
    <React.Fragment>
      <MDBBtn color="danger" className="text-danger" flat onClick={submit}>
        Delete
      </MDBBtn>
    </React.Fragment>
  );
};

const NewsImage = (props) => (
  <MDBView hover className="rounded z-depth-3 mb-4 view-image-news" waves>
    <img
      className="img-fluid"
      src={"http://localhost:5000/images/" + props.image}
      alt=""
    />
    <MDBMask overlay="white-slight" />
  </MDBView>
);

const CommentList = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  const [commentId, setCommentId] = useState(null);
  const [value, setValue] = useState("");
  const [textInput, setTextInput] = useState(null);

  const [updateComment, { error: up_Error, loading: up_Loading }] = useMutation(
    UPDATE_COMMENT
  );

  const handleClick = (value, commentId) => {
    textInput.focus();
    setValue(value);
    setCommentId(commentId);
    console.log(textInput.value);
  };

  const handleUpdateSummit = (value) => {
    console.log("it worked");
    updateComment({
      variables: value,
    });
  };

  const setRef = (ref) => setTextInput(ref);

  const { error, loading, data } = useQuery(PRODUCT_COMMENTS, {
    variables: { productId: parseInt(id) },
  });

  if (error) return <div>Error</div>;

  return (
    <React.Fragment>
      <CommentInput
        id={commentId}
        refer={setRef}
        value={value}
        submit={handleUpdateSummit}
      />
      {data.comments.map((comment) => (
        <MDBMedia key={comment.id} className="py-3">
          <MDBMedia left href="#comment">
            <MDBMedia
              object
              className="container"
              // src={
              //   "http://localhost:5000/images/" +
              //   data.product.images[0].filename
              // }
              alt="Generic placeholder image"
            />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>{comment.comment}</MDBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus
            <Edit
              value={comment.comment}
              id={comment.id}
              focusInput={handleClick}
            />
            <Delete id={comment.id} />
          </MDBMedia>
        </MDBMedia>
      ))}
    </React.Fragment>
  );
};

const Edit = (props) => {
  const handleClick = () => {
    // console.log(props.value);
    props.focusInput(props.value, props.id);
  };
  return (
    <React.Fragment>
      <MDBBtn
        flat
        className="text-info"
        style={{ marginLeft: "0px" }}
        onClick={handleClick}
      >
        Edit
      </MDBBtn>
    </React.Fragment>
  );
};

const CommentInput = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  const [comment, setComment] = useState("Comment......");
  const [commentId, setCommentId] = useState(props.id);

  const [addComment] = useMutation(ADD_COMMENT, {
    variables: { productId: id },
  });

  useEffect(() => {
    console.log(props);
    if (!props.value == "") {
      setComment(props.value);
      setCommentId(props.id);
      console.log("prop value init :" + props.value, props.id);
    }
  }, [props.value]);

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const submit = () => {
    addComment({
      variables: {
        comment: comment,
        productId: id,
      },
    });
    setComment("");
  };

  const update = () => {
    props.submit({ comment: comment, id: commentId });
    setComment("");
    setCommentId(null);
  };
  return (
    <MDBContainer className="my-5">
      <MDBCol md="8" className="px-3">
        <MDBCard>
          <p className="h5 text-center my-3">Write Comment</p>
          <div className="px-3">
            <MDBInput
              type="textarea"
              rows="3"
              label="Your Comment"
              icon="pencil-alt"
              name="comment"
              value={comment}
              inputRef={(input) => props.refer(input)}
              onChange={handleChange}
            />
          </div>

          <div className="text-right">
            <MDBBtn
              outline
              color="secondary"
              onClick={commentId ? update : submit}
            >
              Post <MDBIcon icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default ProductShow;
