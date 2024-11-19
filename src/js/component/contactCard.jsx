import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const ContactCard = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <>
            {store.contacts.map((item) => (
                <div key={item.id} className="row my-2 border border-success bg-light">
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
                        <i className="fa-solid fa-pen-to-square fs-2"></i>
                        <i className="fa-solid fa-trash fs-2"></i>
                    </div>
                </div>
            ))}
        </>
    );
};

