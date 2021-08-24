function listCandidatos(){
    fetch('https://localhost:5001/api/candidatos').then(async function (response) {
            let candidatos = await response.json();
            console.log(candidatos);
            let html = "";
            for(let i=0;i<candidatos.length; i++)
            {
                html += `
                <tr>
                    <th>${candidatos[i].id}</th>
                    <td>${candidatos[i].nome}</td>
                    <td>${candidatos[i].nascimento}</td>
                    <td>${candidatos[i].cep}</td>
                    <td>${candidatos[i].telefone}</td>
                    <td>${candidatos[i].email}</td>
                    <td><a href="./vaga_id.html?id_vaga=${candidatos[i].profissaoId}">${candidatos[i].profissaoId}</a></td>
                </tr>
                `
            }
            document.querySelector("tbody").innerHTML = html
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
}

listCandidatos();