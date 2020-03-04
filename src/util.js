import React from 'react';

export const Title = props => {
    return (
      <React.Fragment>
        <div className="title-style mb-50 md-mb-30">
          <h2 className="margin-0 text-capitalize h1-responsive font-weight-bold">{props.title}</h2>
          <span className="line-bg left-line y-b pt-10"></span>
        </div>
      </React.Fragment>
    );
  };