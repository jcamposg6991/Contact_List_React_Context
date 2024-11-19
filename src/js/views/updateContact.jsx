import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";

export const UpdateContact = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.contacts);
    console.log(params);
     const [inputName, setInputName] = useState(store.contacts[params.theid].name);
    const [inputEmail, setInputEmail] = useState(store.contacts[params.theid].email);
    const [inputPhone, setInputPhone] = useState(store.contacts[params.theid].phone);
    const [inputAddress, setInputAddress] = useState(store.contacts[params.theid].address);

    return (
        <div className="row">
            <div className="col-lg-4 col-10 m-auto">
                <form>
                    <div className="mb-3">
                        <h5><label htmlFor="fullName" className="form-label">Full Name</label></h5>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Type full name"
                           value={inputName}
                            onChange={(event) => setInputName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h5><label htmlFor="email" className="form-label">Email</label></h5>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Type email address"
                            value={inputEmail}
                            onChange={(event) => setInputEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h5><label htmlFor="phone" className="form-label">Phone</label></h5>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Type phone number"
                            value={inputPhone}
                            onChange={(event) => setInputPhone(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h5><label htmlFor="address" className="form-label">Address</label></h5>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Type address"
                            value={inputAddress}
                            onChange={(event) => setInputAddress(event.target.value)}
                        />
                    </div>
                    <div className="row">
                        <div className="col-6 text-start">
                            <Link to="/" className="btn btn-success w-100">Back</Link>
                        </div>
                        <div className="col-6 text-end">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                // onClick={() => {
                                //     actions.addContact(inputName, inputEmail, inputPhone, inputAddress)
                                //         .then(() => {
                                //             setInputName("");
                                //             setInputEmail("");
                                //             setInputPhone("");
                                //             setInputAddress("");
                                //         })
                                //         .catch((error) => console.log(error));
                                // }}
                            >
                                Update
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateContact.propTypes = {
	match: PropTypes.object
};
