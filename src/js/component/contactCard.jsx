import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = () => {

	const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, []);

	console.log(store.contacts);

    return(
        <>
        </>
    )
}