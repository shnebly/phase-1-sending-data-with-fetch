// Add your code here

function submitData(userName, userEmail){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            userName: `${userName}`,
            userEmail: `${userEmail}`,
        })      
    })
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        alert("Try Again");
        console.log(error.message);
    })
};

submitData("Shelby", "snm@gmail.com");


// const formData = {
//     dogName: "Yoshi",
//     dogBreed: "Aussie",
// }
// const configObj = {
//     // method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// }
// fetch("http://localhost:3000/dogs", configObj)
//     .then(resp => {
//         return resp.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         alert("Whoops");
//         console.log(error.message);
//     });