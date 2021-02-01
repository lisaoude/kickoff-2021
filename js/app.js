const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api';
const squad = 1;
const team = 1;
const name = "Lisa"

// GET REQUEST
const teams = fetch(`${url}/squads/${squad}/teams/${team}/members?name=${name}`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));
