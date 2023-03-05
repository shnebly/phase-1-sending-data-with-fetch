// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        })      
    })
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data);
        document.querySelector("body").append(data.id);
    })
    .catch(error => {
        alert("Try Again");
        console.log(error.message);
        document.querySelector("body").append(error.message);
    })
};

submitData("Steve", "steve@steve.com");
submitData("Sam", "sam@sam.com");


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