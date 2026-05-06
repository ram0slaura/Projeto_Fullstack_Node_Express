// fetch('http://localhost:5000/pacientes')
// .then(response => response.json())
// .then(pacientes => {
//     const lista = document.getElementById('lista-pacientes')

//     pacientes.forEach(c => {
//         const ol = document.createElement('ol')
//         ol.innerHTML = `${c.nomePaciente}
//         <button onclick ="prepararEdicao('${c.id}','${c.nomePaciente}')">Editar</button>

//         <button onclick="removerPaciente(${c.id})">Excluir</button>`
//         lista.appendChild(ol)
//     })

// })

// fetch('http://localhost:5000/medicos')
// .then(response => response.json())
// .then(x => {
//     const lista = document.getElementById('lista-medicos')

//     x.forEach(c => {
//         const ol = document.createElement('ol')
//         ol.innerHTML = `${c.nome} - ${c.especialidade}`
//         lista.appendChild(ol)
//     })

// })

// async function buscarNome() {
//     const nomeDigitado = document.getElementById('nomePaciente').value.toLowerCase()
//     console.log(nomeDigitado);
    

   

//     const pacientes =   await fetch('http://localhost:5000/pacientes').then(r => r.json())
//     const medicos =     await fetch('http://localhost:5000/medicos').then(r => r.json())
//     const consultas =   await fetch('http://localhost:5000/consultas').then(r => r.json())

//     const resultado = consultas.map(consulta => {
//         const paciente = pacientes.find(p => p.id === consulta.idPaciente)
//         const medico = medicos.find(m => m.id === consulta.idMedico)

//         return {
//             nomePaciente: paciente?.nomePaciente,
//             nomeMedico: medico?.nome,
//             especialidade: medico?.especialidade,
//             data: consulta?.data
//         }

       
//     })
    
    
//     .filter(item => item.nomePaciente.toLowerCase().includes(nomeDigitado))

//     const apresentar = document.getElementById('filtro-pesquisa')
    
//     apresentar.innerHTML = ''

//     resultado.forEach(item => {
//         const ol = document.createElement('ol')
//         ol.innerHTML = `${item.nomePaciente} - ${item.nomeMedico} - ${item.especialidade} ${item.data}`
//         apresentar.appendChild(ol)
//     })

//     console.log(resultado);
    

// }

// async function cadastrarPaciente() {
//     const pacienteNovo = document.getElementById('novo-paciente').value.toLowerCase()

//     await fetch('http://localhost:5000/pacientes', {
//         method:'POST',
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify({
//             nomePaciente:pacienteNovo

//         })
        
//     })

//     .then(response => response.json())
//         .then(dados => {
//             alert('Paciente Cadastrado com sucesso!')
//             console.log(dados);
//         })
// }

// let pacienteEditando = null;

// function prepararEdicao(id, nome){
//     document.getElementById('novo-paciente').value = nome

//     pacienteEditando = id
// }

// async function atualizarPaciente() {

//     if(!pacienteEditando){
//         alert("Clique no editar antes burra burra")
//         return
//     }

//     const nome = document.getElementById('novo-paciente').value

//     console.log(nome);
    

//     await fetch(`http://localhost:5000/pacientes/${pacienteEditando}`, {
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             nomePaciente: nome
//         })
//     })
    
//     alert("Paciente atualizado com sucesso!")

//     pacienteEditando = null;
// }

// async function removerPaciente(id) {

//     const confirmar = confirm("Desejar Excluir o Paciente")

//     if(!confirmar) return

//     await fetch(`http://localhost:5000/pacientes/${id}`,{
//         method:'DELETE'

//     })

//     alert("Cliente removido com sucesso!")
    
// }


fetch('http://localhost:5000/pacientes')
.then(response => response.json())
.then(pacientes => {
    const lista = document.getElementById('lista-pacientes')

    pacientes.forEach(c => {
        const ol = document.createElement('ol')
        ol.innerHTML = `${c.nomePaciente}

        <button onclick ="prepararEdicao('${c.id}','${c.nomePaciente}')">Editar</button>

        <button onclick="removerPaciente(${c.id})">Excluir</button>

        `

        lista.appendChild(ol)
    })

})

fetch('http://localhost:5000/medicos')
.then(response => response.json())
.then(x => {
    const lista = document.getElementById('lista-medicos')

    x.forEach(c => {
        const ol = document.createElement('ol')
        ol.innerHTML = `${c.nome} - ${c.especialidade}`
        lista.appendChild(ol)
    })

})

async function buscarNome() {
    const nomeDigitado = document.getElementById('nomePaciente').value.toLowerCase()
    console.log(nomeDigitado);
    

   

    const pacientes =   await fetch('http://localhost:5000/pacientes').then(r => r.json())
    const medicos =     await fetch('http://localhost:5000/medicos').then(r => r.json())
    const consultas =   await fetch('http://localhost:5000/consultas').then(r => r.json())

    const resultado = consultas.map(consulta => {
        const paciente = pacientes.find(p => p.id === consulta.idPaciente)
        const medico = medicos.find(m => m.id === consulta.idMedico)

        return {
            nomePaciente: paciente?.nomePaciente,
            nomeMedico: medico?.nome,
            especialidade: medico?.especialidade,
            data: consulta?.data
        }

        
    })

    .filter(item => item.nomePaciente.toLowerCase().includes(nomeDigitado))

    const apresentar = document.getElementById('filtro-pesquisa')
    
    apresentar.innerHTML = ''

    resultado.forEach(item => {
        const ol = document.createElement('ol')
        ol.innerHTML = `${item.nomePaciente} - ${item.nomeMedico} - ${item.especialidade} ${item.data}`
        apresentar.appendChild(ol)
    })
    

}

async function cadastrarPaciente() {

    const pacienteNovo = document.getElementById('novo-paciente').value

    await fetch('http://localhost:5000/pacientes', {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            nomePaciente:pacienteNovo
        })
    })

    .then(response => response.json())
    .then(dados => {
        alert('Paciente Cadastrado com sucesso!')
        console.log(dados);
    })
}

let pacienteEditando = null;

function prepararEdicao(id, nome){
    document.getElementById('novo-paciente').value = nome

    pacienteEditando = id
}

async function atualizarPaciente() {

    if(!pacienteEditando){
        alert("Clique no editar antes burra burra")
        return
    }

    const nome = document.getElementById('novo-paciente').value

    console.log(nome);
    

    await fetch(`http://localhost:5000/pacientes/${pacienteEditando}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            nomePaciente: nome
        })
    })
    
    alert("Paciente atualizado com sucesso!")

    pacienteEditando = null;
}

async function removerPaciente(id) {

    const confirmar = confirm("Desejar Excluir o Paciente")

    if(!confirmar) return

    await fetch(`http://localhost:5000/pacientes/${id}`,{
        method:'DELETE'

    })
    alert("Cliente removido com sucesso!")
    
}