import { Fragment } from 'react';

// COMPONENTS
import { Breadcrumb } from 'src/components/core';
import { MobileToolbar } from 'src/components/navigation';
import { TrackItemPanel, FalseTrackingBar } from 'src/components/core';

const AirwayTrackShipment = () => {
  const breadcrumbItems = [
    {
      to: '/shipments',
      title: 'Shipments',
    },
    {
      to: '/airway-bill/track-shipment/1',
      title: 'Track Shipment',
    },
  ];

  const trackingTimestamps = [
    {
      date: '20th November, 2021',
      items: [
        {
          time: '6:45pm',
          description: 'Delivered to SSAF facility'
        },
        {
          time: '7:34am',
          description: 'Item in transit for final delivery'
        },
      ]
    },
    {
      date: '19th November, 2021',
      items: [
        {
          time: '6:45pm',
          description: 'Item in transit'
        }
      ]
    },
    {
      date: '18th November, 2021',
      items: [
        {
          time: '3:18pm',
          description: 'Left FedEx facility'
        },
        {
          time: '3:18pm',
          description: 'Picked up'
        },
      ]
    }
  ];

  const renderTrackItems = () => {
    return trackingTimestamps.map((item, index) => (
      <TrackItemPanel key={index} item={item} />
    ));
  }

  return (
    <Fragment>
      <MobileToolbar />
      <div className="top-nav">
        <div className="visible hide-md" />
        <div className="top-nav__breadcrumb hide visible-md">
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </div>

        <div className="top-nav__actions">
          <div className="top-nav__copy fw-normal ft-16">
            Acting as{' '}
            <span className="fw-medium top-nav__link app-text-primary pointer">
              John Doe
            </span>
          </div>
        </div>
      </div>


      <div className="w-100 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            className="sub-nav mst-32 ft-16 fw-semi-bold lh-24 app-text-primary msr-16"
          >
            Track another shipment
          </div>

          <div
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            className="sub-nav mst-32 ft-16 fw-semi-bold lh-24 app-text-primary"
          >
            Refresh Page
          </div>
        </div>

        <div>
          <div className="fs-14 lh-20 fw-normal app-text-gray-dark msb-5">Estimated Delivery Date</div>
          <div className="fs-16 lh-24 fw-bold fw-normal">21st, November, 2021</div>
        </div>
      </div>

      <div className="d-flex mst-16 justify-content-start">
        <div className="status fw-normal ft-16 lh-24">Status: <span className="fw-bold">Ready for pickup</span></div>
        <div className="status__timestamp fw-normal msl-8 mst-5 ft-12 lh-16 app-text-secondary">
          Updated 1 min ago
        </div>
      </div>

      <div className="w-100 track-shipment__section grid place-items-center msy-60">
        <div className="track-shipment__bar">
          <FalseTrackingBar />
        </div>
      </div>

      <div className="w-100 msb-100">
        {renderTrackItems()}
      </div>
    </Fragment>
  );
};

export { AirwayTrackShipment as default };
