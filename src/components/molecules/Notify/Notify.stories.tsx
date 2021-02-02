import * as React from 'react';
import { Space, Button, ButtonGroup, Label } from 'components/atoms';
import { SpaceSize } from 'components/atoms/Space/Space';
import { Notify } from './Notify';
import { NotifyItem, NotifyItemProps } from './NotifyItem';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Notify', 'molecules'),
  component: Notify,
  subcomponents: { NotifyItem },
};

const SizeSwitcher: React.FC<{ children: (size: SpaceSize) => React.ReactNode }> = ({ children }) => {
  const [size, setSize] = React.useState<SpaceSize>('medium');

  return (
    <>
      <ButtonGroup className="mb-30">
        <Button size="small" type={size === 'small' ? 'primary' : 'fill'} onClick={() => setSize('small')}>
          Small
        </Button>

        <Button size="small" type={size === 'medium' ? 'primary' : 'fill'} onClick={() => setSize('medium')}>
          Medium
        </Button>

        <Button size="small" type={size === 'large' ? 'primary' : 'fill'} onClick={() => setSize('large')}>
          Large
        </Button>
      </ButtonGroup>

      {children(size)}
    </>
  );
};

export const Regular = (): React.ReactNode => {
  const [list, setList] = React.useState<any[]>([]);

  const onAddItem = (type): void => {
    let item: NotifyItemProps = {
      title: 'Success',
      description: 'This is an example component',
    };

    switch (type) {
      case 'regular':
        item = {
          ...item,
          title: 'Regular',
          type: 'regular',
        };
        break;
      case 'primary':
        item = {
          ...item,
          title: 'Primary',
          type: 'primary',
        };
        break;
      case 'danger':
        item = {
          ...item,
          title: 'Danger',
          type: 'danger',
        };
        break;
      case 'info':
        item = {
          ...item,
          title: 'Info',
          type: 'info',
        };
        break;
      case 'warning':
        item = {
          ...item,
          title: 'Warning',
          type: 'warning',
        };
        break;
    }

    setList((i) => [...i, item]);
  };

  return (
    <>
      <SizeSwitcher>{(size) => <Notify size={size} list={list} />}</SizeSwitcher>
      <Space justify="space-between">
        <Button className="mr-15" size="small" type="fill" onClick={() => onAddItem('regular')}>
          Regular
        </Button>
        <Button className="mr-15" size="small" type="primary" onClick={() => onAddItem('primary')}>
          Primary
        </Button>
        <Button className="mr-15" type="text">
          <Label status="success" type="fill" circle text="Success" onClick={() => onAddItem('success')} />
        </Button>
        <Button className="mr-15" type="text">
          <Label status="danger" type="fill" circle text="Danger" onClick={() => onAddItem('danger')} />
        </Button>
        <Button className="mr-15" type="text">
          <Label status="info" type="fill" circle text="Info" onClick={() => onAddItem('info')} />
        </Button>
        <Button className="mr-15" type="text">
          <Label status="warning" type="fill" circle text="Warning" onClick={() => onAddItem('warning')} />
        </Button>
      </Space>
    </>
  );
};
