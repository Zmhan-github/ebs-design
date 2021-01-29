import * as React from 'react';
import cn from 'classnames';

export interface CollapseGroupProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CollapseGroup: React.FC<CollapseGroupProps> = ({ children, className }) => (
  <div className={cn('ebs-collapse__group', className)}>{children}</div>
);
