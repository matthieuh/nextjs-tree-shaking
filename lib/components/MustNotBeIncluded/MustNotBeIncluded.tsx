import React from 'react';
import merge from 'lodash.merge';
// import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { styled } from '../../stitches.config';

const StyledDiv = styled('div', {});

export const MustNotBeIncluded = ({ css = {}, ...props }) => {
  return (
    <StyledDiv {...props} css={merge(css, {})}>
      MUST NOT BE INCLUDED
    </StyledDiv>
  );
};
