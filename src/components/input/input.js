import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

import SearchIcon from '../../res/search.svg';

import './input.scss';

function Input({ className = '', size = '', defaultValue = '', placeholder = '', type = '', onSubmit, onChange, disabled, inputRef }) {
  return (
    <div className='search-input'>
      <div className='search-icon'>
        <SvgIcon>
          <SearchIcon />
        </SvgIcon>
      </div>
      <input
        ref={inputRef}
        className={`outline-input ${className} ${size}`}
        onKeyUp={event => {
          if (!onSubmit) {
            return
          }
          if (type === 'search' && event.key === 'Escape') {
            return onSubmit(event, '')
          }
          if (event.key === 'Enter') {
            return onSubmit(event, event.target.value)
          }
        }}
        onBlur={event => onSubmit && onSubmit(event, event.target.value)}
        onChange={event => onChange && onChange(event)}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.any
}

export default Input
