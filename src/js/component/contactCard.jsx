import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.createAgenda();
        actions.loadContacts();
    }, []);

    return (
        <>
            {store.contacts.map((item, index) => (
                <div key={index} className="row my-2 border border-success bg-light">
                    <div className="col-lg-2 col-3 m-auto">
                        <img src="https://picsum.photos/200" className="w-75 rounded-circle my-2" alt={item?.name || 'Imagen'} />
                    </div>
                    <div className="col-lg-8 col-6 text-start align-content-center">
                        <h2 className="ms-lg-5">{item.name}</h2>
                        <h6 className="ms-lg-5"><i class="fa-solid fa-location-dot me-2"></i>{item.address}</h6>
                        <h6 className="ms-lg-5"><i class="fa-solid fa-phone me-2"></i>{item.phone}</h6>
                        <h6 className="ms-lg-5"><i class="fa-solid fa-envelope me-2"></i>{item.email}</h6>
                    </div>
                    <div className="col-lg-2 col-3 d-flex align-items-center justify-content-around">
                        <Link className="btn border border-0 bg-light" to={"/updateContact/"+index}>
                            <i className="fa-solid fa-pen-to-square fs-2"></i>
                        </Link>
                        <button className="border border-0 bg-light" onClick={() => {
                            actions.deleteContact(item.id)
                        }}><i className="fa-solid fa-trash fs-2" ></i></button>
                    </div>
                </div>
            ))}
        </>
    );
};

