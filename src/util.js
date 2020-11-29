import React, {useState} from 'react';
import { Tooltip } from 'reactstrap';
import { MDBContainer } from 'mdbreact';
import classNames from 'classnames';

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

export const AppTooltip = props=>{
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <React.Fragment>
      {props.children}
      <Tooltip placement="top" isOpen={tooltipOpen} target={props.id} toggle={toggle}>
        {props.text}
      </Tooltip>
    </React.Fragment>
  )
}

export const SectionContainer = ({
  children,
  className,
  dark,
  description,
  header,
  noBorder,
  noBottom,
  style,
  title,
  flexCenter,
  flexCenterVert,
  flexColumn
}) => {
    const classes = classNames(
      "section",
      !noBottom && "mb-5",
      !noBorder ? "border p-3" : "px-0",
      dark && "grey darken-3",
      flexCenter && "d-flex justify-content-center align-items-center",
      flexCenterVert && "d-flex align-items-center",
      flexColumn && "flex-column",
      className
    );

  description = description ? <p>{description}</p> : "";
  title = title ? <h2 className="mb-3">{title}</h2> : "";
  header = header ? <h4 className="mb-2">{header}</h4> : "";

  return (
    <>
      {title}
      {header}
      <MDBContainer fluid className={className + "section" + "border p-3"} style={style}>
        {description}
        {children}
      </MDBContainer>
    </>
  );
};
