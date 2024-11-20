import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = () => {
    const { store, actions } = useContext(Context);

    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        actions.createAgenda();
        actions.loadContacts();
    }, []);

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId); 
        setShowModal(false); 
    };

    return (
        <>
            {store.contacts.map((item, index) => (
                <div key={index} className="row my-2 border border-success bg-light">
                    <div className="col-lg-2 col-3 m-auto">
                        <img src="https://picsum.photos/200" className="w-75 rounded-circle my-2" alt={item?.name || 'Imagen'} />
                    </div>
                    <div className="col-lg-8 col-6 text-start align-content-center">
                        <h2 className="ms-lg-5">{item.name}</h2>
                        <h6 className="ms-lg-5"><i className="fa-solid fa-location-dot me-2"></i>{item.address}</h6>
                        <h6 className="ms-lg-5"><i className="fa-solid fa-phone me-2"></i>{item.phone}</h6>
                        <h6 className="ms-lg-5"><i className="fa-solid fa-envelope me-2"></i>{item.email}</h6>
                    </div>
                    <div className="col-lg-2 col-3 d-flex align-items-center justify-content-around">
                        <Link className="btn border border-0 bg-light" to={"/updateContact/" + index}>
                            <i className="fa-solid fa-pen-to-square fs-2"></i>
                        </Link>
                        <button
                            className="border border-0 bg-light"
                            onClick={() => {
                                setContactToDelete(item);
                                setShowModal(true);
                            }}
                        >
                            <i className="fa-solid fa-trash fs-2"></i>
                        </button>
                    </div>
                </div>
            ))}

            {showModal && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete <strong>{contactToDelete?.name}</strong>?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(contactToDelete.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
