import React from 'react';
import merge from 'lodash.merge';

import { styled } from '../../stitches.config';

const StyledDiv = styled('div', {});

export const MustNotBeIncluded = React.forwardRef<any, any>(
  ({ css = {}, ...props }, forwardedRef) => {
    return (
      <StyledDiv {...props} ref={forwardedRef} css={merge(css, {})}>
        MUST NOT BE INCLUDED
      </StyledDiv>
    );
  }
);
