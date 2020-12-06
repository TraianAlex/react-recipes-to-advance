/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends React.Component {
  state = { animating: false };

  onClick = e => {
    e.stopPropagation();
    this.setState({ animating: true });
    setTimeout(() => {
      this.setState({ animating: false });
    }, 250);
    this.props.onClick();
  };

  render() {
    const { animating } = this.state;
    const { active } = this.props;

    return (
      <div
        className={classNames('mr1 inline-block animated', {
          bounceIn: animating,
        })}
        role="button"
        aria-label="favorite"
        onClick={this.onClick}
      >
        {active ? '✅' : '⬜️'}
      </div>
    );
  }
}

Checkbox.propTypes = {
  active: PropTypes.bool,
  // animationActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  active: false,
};

export default Checkbox;
