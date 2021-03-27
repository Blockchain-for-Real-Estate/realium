import React, {useState} from "react"
import * as bs from "react-bootstrap"
// import { DetailsTable } from "../marketplace/details-table";

export function Modal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
      <>
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-weight-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 mb-6" onClick={handleShow}>
          {props.text}
        </button>

        <bs.Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <bs.Modal.Header closeButton>
            <bs.Modal.Title>
                PURCHASE A FRACTIONAL SHARE
            </bs.Modal.Title>
          </bs.Modal.Header>
          <bs.Modal.Body>
          </bs.Modal.Body>
          <bs.Modal.Footer>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 mb-6">
                CONFIRM TRANSACTION
            </button>
          </bs.Modal.Footer>
        </bs.Modal>
      </>
    );
  }
