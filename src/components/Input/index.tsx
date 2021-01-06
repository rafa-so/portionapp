import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueProps {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, ...rest }, ref) => {
  const { defaultValue = '', fieldName, error, registerField } = useField(name);

  const inputElementRef = useRef<any>(null);
  const valueRef = useRef<InputValueProps>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: valueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        valueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        valueRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  return (
    <>
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#5E5E5E"
        defaultValue={defaultValue}
        onChangeText={(value: string) => {
          valueRef.current.value = value;
        }}
        {...rest}
      />
    </>
  );
}

export default forwardRef(Input);