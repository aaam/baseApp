import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useTransition } from 'react-spring';

import Toast from './Toast';

const Wrapper = styled.div`
  position: absolute;
  right: 50%;
  top: 0;
  z-index: 1;
`;

const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, toast => toast.id, {
    from: { top: '-100%' },
    enter: { top: '0%' },
    leave: { top: '-100%' },
  });

  return createPortal(
    <Wrapper>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} id={item.id} style={props}>
          {item.content}
        </Toast>
      ))}
    </Wrapper>,
    document.body
  );
};

export default ToastContainer;
