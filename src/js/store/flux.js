const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {

			loadContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/jcamposg6991/contacts")
					.then(response => response.json())
					// .then(data => console.log(data.contacts))
					.then(data => setStore({ contacts: data.contacts }))
					.catch(error => console.log(error))
			},

			addContact: (name, email, phone, address) => {
				if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && address.trim() !== "") {
					return fetch("https://playground.4geeks.com/contact/agendas/jcamposg6991/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: name,
							phone: phone,
							email: email,
							address: address,
						}),
					})
						.then((response) => response.json())
						.catch((error) => console.log(error));
				}
				console.log("No contact added");
			},

			deleteContact: (contactId) => {
				return fetch("https://playground.4geeks.com/contact/agendas/jcamposg6991/contacts/" + contactId, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((response) => response)
					.then((data) => setStore(data))
					.catch((error) => console.log(error));
			},

			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/jcamposg6991", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
				})
					.then((response) => {
						if (response.status === 400) {
							console.log("Agenda jcamposg6991already exists.");
						}
						return response.json();
					})
					.catch((error) => console.log(error));
			}

		}
	};
};

export default getState;
