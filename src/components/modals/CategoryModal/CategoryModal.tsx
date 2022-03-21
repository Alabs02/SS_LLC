import "./CategoryModal.scss";
import { Modal } from "../../core";
import { Fragment, useState } from "react";
import { IoSearch } from "react-icons/io5";

const CategoryModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Modal>
                <Modal.Cover
                    isOpen={isOpen}
                    showCloseBtn={true}
                    onClose={() => setIsOpen(false)}
                    modalTitle = "Select A Category"
                    >
                    <div className="justify-content-start msl-92 ft-14 lh-20 mst-46 fw-medium app-text-tonic">
                        Categories
                    </div>
                    <div className="search d-flex align-items-start msl-92 msr-92 mst-24">
                        <input type="text" name="search" className="search__input fw-medium" placeholder="Search for item model" />
                        <button className="btn-white search__btn d-grid place-items-center "><IoSearch /></button>
                    </div>
                    <div className="main__categories msl-92 msr-92">
                        <div className="ft-14 lh-20 fw-medium app-text-primary mst-24">
                            Main Categories
                        </div>
                        <div className="cards mst-8 d-flex gap-53 msb-36 f-wrap">
                            <div className="btn btn-lg">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                            <div className="btn btn-lg ">
                                <div className="head ft-16 fw-medium lh-24 app-text-dark mst-38 msb-38 ">Home & Office</div>
                            </div>
                        </div>
                    </div>
                    <Modal.Content>
                        
                    </Modal.Content>
                </Modal.Cover>
            </Modal>
            <div className="grid place-items-center w-full h-full">
                <h4 className="mst-50">Category Modal</h4>
                <button onClick={() => setIsOpen(true)} className="btn btn-success text-capitalize">test modal</button>
            </div>
            
        </Fragment>
    )
}

export { CategoryModal as default };