export const checkUserPassword = (login, password) => new Promise((resolve, reject) => {
    (login.length + 1 === password.length) ? resolve(): reject();
});