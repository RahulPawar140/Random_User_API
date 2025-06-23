// var gender_value = document.getElementById('gender');
// var userinfo_page = document.getElementById('user_info');
function uploadProject() {
    return new Promise(function (resolve, reject) {
        let state = true;
        if (state) {
            resolve(state);
        }
        else {
            reject("something went wrong");
        }
    });
};
console.log(uploadProject());

uploadProject().then(
    function (projectState) {
        console.log("Good Job", projectState);
    }).then(
        function () {
            console.log("Hfg");
        }).catch(function (error) {
            console.log("Try Again", error);

        })

function getUserData() {
    fetch("https://randomuser.me/api/")
        .then((data) => {
            // console.log(data);
            var res = data.json();
            console.log(res);
            return res;
        }).then((res) => {
            console.log(res);
            var user_data = res.results;
            console.log(user_data);
            var user_name = user_data[0].name;
            console.log(user_name);
            let { title, first, last } = user_name;
            document.getElementById('user-name').innerText = "Name:- " + `${title} ${first} ${last}`;
            var user_pic = user_data[0].picture.large;
            // console.log(user_pic);
            document.getElementById('profile-pic').src = user_pic;
            var user_dob = user_data[0].dob.date;
            console.log(user_dob);
            let userdob = new Date(user_dob);
            userdob = `${userdob.getDate()}/${userdob.getMonth() + 1}/${userdob.getFullYear()}`;
            console.log(userdob);
            document.getElementById('dob').innerText = "Date of Birth:- " + userdob;
            var user_gender = user_data[0].gender;
            console.log(user_gender);
            document.getElementById('gender').innerText = "Gender:- " + user_gender;
            var user_age = user_data[0].dob.age;
            console.log(user_age);
            document.getElementById('age').innerText = "Age:- " + user_age;
            var user_email = user_data[0].email;
            console.log(user_email);
            document.getElementById('email').innerText = "Email:- " + user_email;
            var user_phone = user_data[0].phone;
            console.log(user_phone);
            document.getElementById('phone').innerText = "Phone:- " + user_phone;
            var user_street = user_data[0].location.street;
            console.log(user_street);
            let { number, name } = user_street;
            document.getElementById('street').innerText = "Street:- " + `${number} ${name}`;
            var user_location = user_data[0].location;
            console.log(user_location);
            let { city, state, country, postcode } = user_location;
            document.getElementById('location').innerText = `City: ${city}\nState: ${state}\nCountry: ${country}\nPostCode: ${postcode}`;
            var user_coordinates = user_data[0].location.coordinates;
            console.log(user_coordinates);
            let { latitude, longitude } = user_coordinates;
            document.getElementById('coordinates').innerText = `Latitude: ${latitude}\n Longitude ${longitude} `;
            var user_timezone = user_data[0].location.timezone;
            console.log(user_timezone);
            let { offset, description } = user_timezone;
            document.getElementById('timezone').innerText = `Offset: ${offset}\n Description: ${description} `;
        }).catch((err) => {
            // document.getElementById('data-not-found').innerText = message;

            document.getElementById('user_info').style.display = 'none';
            document.getElementById('data-not-found').style.display = 'block';

        })
}

getUserData();
// console.log(getUserData());

function restart() {
    window.location.reload();
}
// document.getElementById('btn1').addEventListener('click',function(){
//     if(gender_value.includes("male")){
//         document.getElementById('user_info').style.display="none";
//         alert("Please reload the page again");
//     }
// })