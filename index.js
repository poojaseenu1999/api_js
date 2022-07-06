fetch('https://api.github.com/users/hadley/orgs').then((response) => {
    return response.json();
}).then((objectData) => {
    let output = "";
    objectData.map((values) => {
        output += ` <tr>
        <td>${values.login}ja</td>
        <td>${values.id}</td>
    </tr>`
    })
    document.getElementById('table_body').innerHTML = output;
})

