import { Fragment, useState } from 'react';

// ICONS
import { FaBox, FaUser, FaFileInvoice } from 'react-icons/fa';

// COMPONENTS
import { Breadcrumb, FormWizard } from 'src/components/core';
import { MobileToolbar } from 'src/components/navigation';

// SECTION
import {
  SelectRecipientSection,
  CreateShipmentSection,
  ShipmentSummary,
  AddItemsSection,
} from 'src/sections/shipments';

const CreateShipment = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const breadcrumbItems = [
    {
      to: '/shipments/clients',
      title: 'Select client',
    },
    {
      to: '/shipments/create-shipment',
      title: 'Select recipient',
    },
  ];
  const tabs = [
    {
      tabID: 1,
      icon: FaUser,
      title: 'Select Recipient',
      slug: 'select-recipient-tab',
    },
    {
      tabID: 2,
      icon: FaBox,
      title: 'Create Shipment',
      slug: 'create-shipment-tab',
    },
    {
      tabID: 3,
      icon: FaBox,
      title: 'Add Items',
      slug: 'add-items-tab',
    },
    {
      tabID: 4,
      icon: FaFileInvoice,
      title: 'Shipment Summary',
      slug: 'shipment-summary-tab',
    },
  ];

  return (
    <Fragment>
      <MobileToolbar />

      <div className="top-nav msb-32">
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

      <FormWizard>
        <FormWizard.Wrapper>
          <FormWizard.Panel
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          <FormWizard.Content tabID={1} selectedTab={selectedTab}>
            <div className="ps-30 w-100">
              <SelectRecipientSection />
            </div>
          </FormWizard.Content>

          <FormWizard.Content tabID={2} selectedTab={selectedTab}>
            <div className="ps-30 w-100">
              <CreateShipmentSection />
            </div>
          </FormWizard.Content>

          <FormWizard.Content tabID={3} selectedTab={selectedTab}>
            <div className="ps-30 w-100">
              <AddItemsSection />
            </div>
          </FormWizard.Content>

          <FormWizard.Content tabID={4} selectedTab={selectedTab}>
            <div className="ps-30 w-100">
              <ShipmentSummary />
            </div>
          </FormWizard.Content>
        </FormWizard.Wrapper>
      </FormWizard>
    </Fragment>
  );
};

export { CreateShipment as default };
