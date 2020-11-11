const create_account = (email, password) => {   
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
            console.error(error);
    });
};

const login = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        console.error(error);
    });
};