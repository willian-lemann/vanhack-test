import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

interface InputProps {
   name: string;
   type: string;
   required?: boolean;
   placeholder?: string;
   color?: string;
}

const Input: React.FC<InputProps> = ({ name, ...otherProps }) => {
   const { fieldName, registerField, error } = useField(name);
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current,
         path: 'value',
      });
   }, [fieldName, registerField]);

   return (
      <>
         <input ref={inputRef} style={{ borderColor: error ? 'red' : '' }} {...otherProps} />
         <span style={{ color: 'red' }}>{error && error}</span>
      </>
   );
};

export default Input;
