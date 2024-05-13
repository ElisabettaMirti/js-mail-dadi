
const guestListMail = ['mamamoo@mail.com', 'ali@mail.com', 'mothermother@mail.com', 'kenshiyonezu@mail.com', 'subsonica@mail.com', 'icani@mail.com', 'theandre@mail.com'];

const userEMail = prompt("Type your email address");

if (guestListMail.includes(userEMail.toLowerCase)) {
    alert("Good, you're on the list")
} else {
    alert("Sorry, you have not been invited")
}