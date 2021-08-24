function listavagas() {
    fetch('https://localhost:5001/api/Profissoes').then(async function (response) {
        let vagas = await response.json();
        console.log(vagas);
        let html = "";
        for (let i = 0; i < vagas.length; i++) {
            html += `
                <div class="box column is-6 is-flex is-inline-block">
                    <div>
                        <figure class="image is-32x32">
                            <img src="./resources/job-icon.png" alt="job-icon">
                        </figure>
                        
                            <span>IDVAGA: <span class="has-text-primary">#${vagas[i].id}</span></span>
                    </div>
                        <div class="column">
                            <h3 class="title is-6">${vagas[i].nome}</h3>
                            <p>Descrição:</p>
                            <p>${vagas[i].descricao}</p>
                        </div>
                        <div class="column">
                            <a href="./html/cadastro_candidato.html?id_vaga=${vagas[i].id}" class="button is-primary ">Candidate-se</a>
                        </div>
                    </div>
                </div>
                `

        }
        document.getElementById("lista_vagas").innerHTML = html
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

listavagas();