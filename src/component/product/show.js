import React, { useState, useRef, useEffect } from "react";
import { Title } from "../../util";
import { useQuery, useMutation } from "react-apollo";
import {
  GET_PRODUCT,
  ADD_PRODUCT,
  ADD_COMMENT,
  PRODUCT_COMMENTS,
  COMMENTS,
  DELETE_COMMENT
} from "./graphql";
import {
  Loading,
  useAddMutation,
  useDeleteMutation
} from "mutation-cache-update";
import { useParams, useHistory } from "react-router-dom";
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
  const [value, setValue] = useState("");
  const [textInput, setTextInput] = useState(null);

  const handleClick = value => {
    textInput.focus();
    setValue(value);
    console.log(textInput.value);
  };

  const setRef = ref => setTextInput(ref);

  const { error, loading, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <div>Error</div>;
  return (
    <React.Fragment>
      <div className="container">
        <Title title={data.product.name} />
        <NewsImage image={data.product.images[0].filename} />
        <CommentInput id={id} refer={setRef} value={value} />
        <CommentList focusInput={handleClick} />
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
      </div>
    </React.Fragment>
  );
};

const Delete = props => {
  const { id } = useParams();
  const [deleteProduct, { error, data }] = useDeleteMutation(
    DELETE_COMMENT,
    PRODUCT_COMMENTS,
    "deleteComment",
    "comments",
    { productId: parseInt(id) }
  );

  if (data) console.log(data);

  const submit = () => {
    deleteProduct({ variables: { id: props.id } });
    console.log(props.id);
  };
  return (
    <React.Fragment>
      <MDBBtn rounded outline color="danger" onClick={submit}>
        Delete
      </MDBBtn>
    </React.Fragment>
  );
};

const NewsImage = props => (
  <MDBView hover className="rounded z-depth-3 mb-4 view-image-news" waves>
    <img
      className="img-fluid"
      src={"http://localhost:5000/images/" + props.image}
      alt=""
    />
    <MDBMask overlay="white-slight" />
  </MDBView>
);

const CommentList = props => {
  let { id } = useParams();

  const { error, loading, data } = useQuery(PRODUCT_COMMENTS, {
    variables: { productId: parseInt(id) }
  });
  if (loading) return <Loading />;
  if (error) return <div>Error</div>;

  return (
    <React.Fragment>
      {data.comments.map(comment => (
        <MDBMedia key={comment.id} className="py-3">
          <MDBMedia left href="#">
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
            <Edit value={comment.comment} focusInput={props.focusInput} />
            <Delete id={comment.id} />
          </MDBMedia>
        </MDBMedia>
      ))}
    </React.Fragment>
  );
};

const Edit = props => {
  const handleClick = () => {
    // console.log(props.value);
    props.focusInput(props.value);
  };
  return (
    <React.Fragment>
      <MDBBtn rounded outline onClick={handleClick}>
        Edit
      </MDBBtn>
    </React.Fragment>
  );
};

const CommentInput = props => {
  let { id } = useParams();
  id = parseInt(id);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(null);

  const [addComment, { error, loading, data }] = useAddMutation(
    ADD_COMMENT,
    PRODUCT_COMMENTS,
    "createComment",
    "comments",
    { productId: id }
  );

  useEffect(() => {
    handleFocus()
    // setValue(props.value)
  });

  const handleFocus = e => {
    if (!props.value == "") {
      setValue(props.value);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(value);
    setComment(value);
  };

  const submit = () => {
    addComment({
      variables: {
        comment: comment,
        productId: id
      }
    });
    setComment("");
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
              value={value}
              onFocus={handleFocus}
              inputRef={input => props.refer(input)}
              onChange={handleChange}
            />
          </div>

          <div className="text-right">
            <MDBBtn
              outline
              color="secondary"
              onClick={props.sumbmit ? props.submit : submit}
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
