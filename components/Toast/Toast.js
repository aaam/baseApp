import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { useToast } from './ToastProvider';

const Wrapper = styled(animated.div)`
  margin-right: 16px;
  margin-top: 16px;
  width: 400px;
  text-align: center;
  position: relative;
  padding: 16px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  background: orange;

  color: #494e5c;
`;

const Toast = ({ children, id, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Toast;
