import * as React from 'react';
import { Tooltip, Button, Icon } from 'components/atoms';
import { ButtonSize } from 'components/atoms/Button/Button';

interface Sort {
  title: React.ReactNode;
  value: string;
  type?: 'asc' | 'desc';
}

export interface SortByProps {
  title?: string;
  sortByTitle?: string;
  value?: string;
  options: Sort[];
  size?: ButtonSize;
  onChange: (newValue: string) => void;
}

export const SortBy: React.FC<SortByProps> = ({
  title = 'Sort By',
  sortByTitle = 'by',
  size = 'medium',
  options,
  value,
  onChange,
}) => {
  const [selected, setSelected] = React.useState(options.find((item) => item.value === value?.replace('-', '')));
  const [type, setType] = React.useState(value?.charAt(0) === '-' ? 'desc' : 'asc');

  React.useEffect(()=> {
    if (selected) {
      onChange((type === 'asc' ? '' : '-') + selected?.value);
    } else {
      onChange('');
    }
  }, [selected, type]);

  const onChangeHandler = React.useCallback((newValue) => {
    setSelected((prevActive) => prevActive?.value !== newValue.value ? newValue : undefined);
  }, []);

  const onChangeType = () => {
    if (!selected && options.length) {
      setSelected(options[0]);
    }
    setType((s) => (s === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className={`ebs-sort-by__wrapper ebs-sort-${type}`}>
      <Button type="ghost" icon="sort" size={size} onClick={onChangeType} />
      <Tooltip
        bodyClass="ebs-sort-by__tooltip"
        trigger="click"
        placement="bottom"
        tooltip={
          <>
            <div className="ebs-sort-by__tooltip-title">{title}</div>
            <div className="ebs-sort-by__tooltip-items">
              {options && options.map((item) => {
                const active = selected?.value === item.value;
                return (
                  <div
                    key={item.value}
                    className={`ebs-sort-by__tooltip-item${active ? ' ebs-sort-by__tooltip-item--active' : ''}`}
                    onClick={() => onChangeHandler(item)}
                  >
                    {item.title}
                    {active && <Icon type="check" model="bold" />}
                  </div>
                );
              })
              }
            </div>
          </>
        }
      >
        <Button type="ghost" size={size} className={`ebs-sort-by__tooltip-button ebs-sort-${type}`}>
          {selected ? `${sortByTitle} ${selected.title}` : title}
        </Button>
      </Tooltip>
    </div>
  );
};
