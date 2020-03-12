import React, {useState} from 'react';
import { Tooltip } from 'reactstrap';

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