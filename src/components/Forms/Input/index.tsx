import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { FormError, InputStyle } from '..';

interface InputProps {
  name: string,
  id?: string,
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <InputStyle ref={inputRef} defaultValue={defaultValue} {...rest} onFocus={clearError}/>
      { !!error && <FormError> { error } </FormError>}
    </div>
  );
};

export default Input;