import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from "date-fns/locale/pt-BR"; // the locale you want
import { FormError, InputStyle } from '..';

interface DatePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        locale={ptBR}
        customInput={<InputStyle/>}
        dateFormat={'dd/MM/yyyy'}
        {...rest}
      />
      { !!error && <FormError> { error } </FormError>}
    </div>
  );
};
export default DatePicker;