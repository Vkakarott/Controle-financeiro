//Constates globais
const tbody = document.querySelector('tbody');
const descItem = document.getElementById('desc');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const btnNew = document.getElementById('btnNew');
const incomes = document.querySelector('.incomes');
const expenses = document.querySelector('.expenses');
const total = document.querySelector('.total');
const menu = document.querySelectorAll('.mes');
const divMes = document.querySelectorAll('.a');
const btn = document.getElementById('btn-l');
const menuLateral = document.querySelector('.lateral');
const main = document.querySelector('main');
const final = document.getElementById('endMes');
const mesAtual = document.getElementById('end-');
const listaOpcoes = document.querySelectorAll('.mes');
const ulNav = document.getElementById('listaOpcoes');
const link = document.querySelectorAll('.txt-link');
let resumao = [];
let items;

//Carreagar dados do localStorage
loadDataFromLocalStorage();

function loadDataFromLocalStorage() {
    try {
        const savedResumao = localStorage.getItem('resumao');
        if (savedResumao) {
            resumao = JSON.parse(savedResumao);
            const lastMontData = resumao[resumao.length - 1];
            if (lastMontData) {
                incomes.textContent = lastMontData.ent;
                expenses.textContent = lastMontData.sai;
                total.textContent = lastMontData.tot;
            }
        } else {
            incomes.textContent = '0.00';
            expenses.textContent = '0.00';
            total.textContent = '0.00';
        }

        const saveBarraLateralData = localStorage.getItem('dadosBarraLateral');
        if (saveBarraLateralData) {
            const dadosBarraLateral = JSON.parse(saveBarraLateralData);
            const listaOpcoes = document.querySelectorAll('.mes');

            listaOpcoes.forEach((li, index) => {
                const dataValue = index;
                const data = dadosBarraLateral.find(item => item.dataValue === dataValue);

                console.log(data)
                if (data) {
                    li.querySelector('.exp').textContent = data.expValue;
                    li.querySelector('.inc').textContent = data.incValue;
                    li.querySelector('.tot').textContent = data.totValue;
                }
            });
        }
    } catch (error) {
        console.error('Erro ao carregar os dados do localStorage:', error);
    }
}

//Adicionar função de click ao botão
btnNew.onclick = () => {
    //validação de dados
    if (descItem.value === "" || amount.value === "") {
        return alert('Preencha todos os campos!');
    } else {
        items.push({
            desc: descItem.value,
            amount: Math.abs(amount.value).toFixed(2),
            type: type.value,
        });

        setItensBD();
        loadItens();

        descItem.value = '';
        amount.value = '';
    }
}

const getItensDB = () => JSON.parse(localStorage.getItem('db_items')) ?? [];
const setItensBD = () => 
localStorage.setItem('db_items', JSON.stringify(items));

//função que carrega itens
loadItens();

function loadItens() {
    items = getItensDB();
    tbody.innerHTML = '';
    items.forEach((item, index) => {
        insertItem(item,index);
    });

    getTotals();
}

//função que adiciona itens a tabela
function insertItem(item, index) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${item.desc}</td>
        <td>R$ ${item.amount}</td>
        <td class="columnType">${
            item.type === "Entrada"
                ? '<i class="bi bi-database-fill-up"></i>'
                : '<i class="bi bi-database-fill-down"></i>'
        }</td>
        <td class="columnAction">
            <button onclick="deleteItem(${index})" style="color: #ff696957;"><i class="bi bi-trash3"></i></button>
        </td>
    `;

    tbody.appendChild(tr);
}

//função que caucula e distribui os totais em suas respectivas div's
function getTotals() {
    try {
        const amountIncomes = items
            .filter((item) => item.type === 'Entrada')
            .map((transaction) => Number(transaction.amount));

        const amountExpenses = items
            .filter((item) => item.type === 'Saída')
            .map((transaction) => Number(transaction.amount));

        const totalIncomes = amountIncomes
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);

        const totalExpenses = Math.abs(
            amountExpenses.reduce((acc, cur) => acc + cur, 0)
        ).toFixed(2);

        const totalItems = (totalIncomes - totalExpenses).toFixed(2);

        incomes.innerHTML = totalIncomes;
        expenses.innerHTML = totalExpenses;
        total.innerHTML = totalItems;
    } catch (error) {
        console.error('Erro ao calcular totais:', error);
    }
}

//função para deletar itens da tabela
function deleteItem(index) {
    items.splice(index, 1)
    setItensBD();
    loadItens();
}

//função que adiciona estilo a barra lateral
menu.forEach((item) => item.addEventListener('click', select));

function select() {
    menu.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

//Adiciona evento de click no botão de expandir o menu lateral
btn.addEventListener('click', function() {
    menuLateral.classList.toggle('expandir');
    divMes.forEach((item) => item.classList.toggle('expan'));
    btn.addEventListener('click', () => {
        menu.forEach((item) => item.classList.remove('ativo'));
    });
})

//resetar o main apos finalizar o mes
const resetMainData = () => {
    incomes.textContent = '0.00'
    expenses.textContent = '0.00'
    total.textContent = '0.00'

    tbody.innerHTML = '';

    resumao = [];

    localStorage.removeItem('resumao');
    localStorage.removeItem('db_items');
}

//adiciona função ao clicar em finalizar mes
final.onclick = () => {
    const valorSel = mesAtual.value;

    if (valorSel === '12') {
        return alert('Selecione o mes de fechamento!');
    } else {
        resumao.push({
            ent: incomes.textContent,
            sai: expenses.textContent,
            tot: total.textContent,
        })

        let liCorrespondente;

        listaOpcoes.forEach((li) => {
            const valorLi = li.getAttribute('data-value');

            if (valorLi === valorSel) {
                liCorrespondente = li;

                const spanEx = liCorrespondente.querySelector('.exp');
                const spanIn = liCorrespondente.querySelector('.inc');
                const spanTo = liCorrespondente.querySelector('.tot');
                spanEx.textContent = resumao[0].sai;
                spanIn.textContent = resumao[0].ent;
                spanTo.textContent = resumao[0].tot;
            }
        })

        localStorage.setItem('resumao', JSON.stringify(resumao));
        saveBarraLateralData();
        resetMainData();
    }
}

//função que salva a barra lateral
function saveBarraLateralData() {
    const dadosBarraLateral = [];

    listaOpcoes.forEach((li, index) => {
        const dataValue = index;
        const expValue = li.querySelector('.exp').textContent;
        const incValue = li.querySelector('.inc').textContent;
        const totValue = li.querySelector('.tot').textContent;

        dadosBarraLateral.push({
            dataValue: dataValue,
            expValue: expValue,
            incValue: incValue,
            totValue: totValue,
        })
    })

    localStorage.setItem('dadosBarraLateral', JSON.stringify(dadosBarraLateral));
}
