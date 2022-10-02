import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const RightSide: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className={bem('top-bar-right')} {...props}>
      {children}
    </div>
  );
};
