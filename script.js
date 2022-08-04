async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/%22");
  const x = resp.result[0];
  console.log(x.gender);
}

const div = document.getElementById("div-user-card");
const img = document.getElementById("img-profile");
const names = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const button = document.getElementById("btn-random");

button.onclick = () => {
  names.innerText =  ${x.name.title} ${x.name.first} ${x.name.last};
  email.innerText = ${x.email};
  address.innerText = ${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode};
};