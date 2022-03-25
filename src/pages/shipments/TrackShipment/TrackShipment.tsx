import { Fragment } from "react";
import { Breadcrumb } from "src/components/core";
import { MobileToolbar } from "src/components/navigation";

const TrackShipment = () => {

    const breadcrumbItems = [
        {
            to: "/shipments",
            title: "Shipments",
        },
        {
            to: "/shipments/view-shipment",
            title: "View Shipment"
        },
        {
            to: "/shipments/view-shipment/track-item",
            title: "Track Item"
        }
    ]

    return (
        <Fragment>
            <MobileToolbar />
            <div className="top-nav">
                <div className="top-nav__breadcrumb">
                    <Breadcrumb breadcrumbItems={breadcrumbItems} />
                </div>

                <div className="top-nav__actions">
                    <div className="top-nav__copy fw-normal ft-16">
                        Acting as <span className="fw-medium top-nav__link app-text-primary pointer">John Doe</span>
                    </div>
                </div>
            </div>

            <div className="sub-nav mst-32 ft-16 fw-medium lh-24 app-text-primary">
                Retrack this item
            </div>
            <div className="d-flex mst-16 justify-content-start">
                <div className="status fw-normal ft-16 lh-24">Status:</div>
                <div className="status__report fw-medium ft-16 lh-24">Delivered</div>
                <div className="status__timestamp fw-normal msl-4 mst-5 ft-12 lh-16 app-text-gray">Updated 1 min ago</div>
            </div>

            <div className="track__content">
                <div className="title bg-primary-light">
                    20th November 2021
                </div>
            </div>
        </Fragment>
    )

}

export { TrackShipment as default }