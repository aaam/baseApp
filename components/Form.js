import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InputContainer = styled.View`
  padding: 5px;
  margin: 5px;
`;

const InputLabel = styled.Text`
  font-size: 15px;
`;

const InputError = styled.Text`
  font-size: 10px;
  color: red;
`;

const InputField = styled.TextInput`
  border-radius: 3px;
  background-color: white;
  border-width: 1px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
`;

export function Input({ control, errors, loading, label, name, ...rest }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Controller
        as={InputField}
        control={control}
        name={name}
        label={label}
        editable={loading}
        onChange={args => args[0].nativeEvent.text}
        {...rest}
      />
      <InputError>{errors && <Text>This field is required</Text>}</InputError>
    </InputContainer>
  );
}

export function RequiredInput({
  control,
  loading,
  errors,
  label,
  name,
  ...rest
}) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Controller
        as={InputField}
        editable={loading}
        control={control}
        name={name}
        label={label}
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        {...rest}
      />
      <InputError>{errors && <Text>This field is required</Text>}</InputError>
    </InputContainer>
  );
}

export function EmailInput({ control, loading, errors, label, name, ...rest }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Controller
        as={InputField}
        control={control}
        name={name}
        label={label}
        onChange={args => args[0].nativeEvent.text}
        editable={loading}
        rules={{
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },
        }}
        {...rest}
      />
      <InputError>
        {errors && <Text>Please enter a valid email adres</Text>}
      </InputError>
    </InputContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  color: #ffffff;
  background-color: #33c3f0;

  display: inline-block;
  height: 38px;

  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  box-sizing: border-box;
`;

export function Button({ text, action, to, ...props }) {
  const navigation = useNavigation();

  if (action === 'navigate') {
    return (
      <ButtonContainer onPress={() => navigation.navigate(to)}>
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
  return (
    <ButtonContainer {...props}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
}
