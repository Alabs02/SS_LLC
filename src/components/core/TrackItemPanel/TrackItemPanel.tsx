// STYLES
import './TrackItemPanel.scss';

import { Fragment } from 'react';

interface Item {
  time: string;
  description: string;
}

interface TrackItem {
  date: string;
  items: Array<Item>;
}

interface IProps {
  item: TrackItem;
}

const TrackItemPanel = ({ item }: IProps) => {
  const renderItems = (items: Array<Item>) => {
    return items.map((_item, index) => (
      <div key={index} className="track-panel__content-item ft-16 lh-24 msb-16">
        {_item?.time} - <span className="fw-bold">{_item.description}</span>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="track-panel">
        <div className="track-panel__header psy-8 psx-30 ft-16 lh-24 fw-semi-bold">
          {item.date}
        </div>

        <div className="track-panel__content psx-30 psy-24">
          {renderItems(item.items)}
        </div>
      </div>
    </Fragment>
  );
};

export { TrackItemPanel as default };
