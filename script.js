function loadDataFromLocalStorage() {
    try {
        const savedResumao = localStorage.getItem('resumao')
        if (savedResumao) {
            resumao = JSON.parse(savedResumao)
            const lastMontData = resumao[resumao.length - 1]
            if (lastMontData) {
                const incomes = document.querySelector('.incomes');
                const expenses = document.querySelector('.expenses');
                const total = document.querySelector('.total');
                incomes.textContent = lastMontData.ent;
                expenses.textContent = lastMontData.sai;
                total.textContent = lastMontData.tot;
            }
        }else {
            const incomes = document.querySelector('.incomes');
            const expenses = document.querySelector('.expenses');
            const total = document.querySelector('.total');
            incomes.textContent = '0.00'
            expenses.textContent = '0.00'
            total.textContent = '0.00'
        }

        const saveBarraLateralData = localStorage.getItem('dadosBarraLateral');
        if (saveBarraLateralData) {
            const dadosBarraLateral = JSON.parse(saveBarraLateralData);
            const listaOpcoes = document.querySelectorAll('.mes');

            listaOpcoes.forEach(li => {
                const dataValue = li.getAttribute('data-value');
                const data = dadosBarraLateral.find(item => item.dataValue === dataValue);

                if (data) {
                    li.querySelector('.exp').textContent = data.expValue
                    li.querySelector('.inc').textContent = data.incValue
                    li.querySelector('.tot').textContent = data.totValue
                }
            });
        }
    } catch (error) {
        console,error('Erro ao carregar os dados do LocalStorage:', error);
    }
}

const tbody = document.querySelector('tbody');
const descItem = document.querySelector('#desc');
const amount = document.querySelector('#amount');
const type = document.querySelector('#type');
const btnNew = document.querySelector('#btnNew');

const incomes = document.querySelector('.incomes');
const expenses = document.querySelector('.expenses');
const total = document.querySelector('.total');

let items;

loadDataFromLocalStorage();

btnNew.onclick = () => {
    if (descItem.value === "" || amount.value === "") {
        return alert('Preencha todos os campos!');
    }

    items.push({
        desc: descItem.value,
        amount: Math.abs(amount.value).toFixed(2),
        type: type.value,
    });

    setItensBD();

    loadItens();

    descItem.value = '';
    amount.value = '';
};

function deleteItem(index) {
    items.splice(index, 1)
    setItensBD();
    loadItens();
}

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

function loadItens() {
    items = getItensBD();
    tbody.innerHTML = '';
    items.forEach((item, index) => {
        insertItem(item, index);
    });

    getTotals();
}

function getTotals() {
    try {
        const amountIncomes = items
            .filter((item) => item.type === 'Entrada')
            .map((transaction) => Number(transaction.amount));

        const amountExepenses = items
            .filter((item) => item.type === 'Saída')
            .map((transaction) => Number(transaction.amount));

        const totalIncomes = amountIncomes
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);

        const totalExpenses = Math.abs(
            amountExepenses.reduce((acc, cur) => acc + cur, 0)
        ).toFixed(2);

        const totalItems = (totalIncomes - totalExpenses).toFixed(2);

        incomes.innerHTML = totalIncomes;
        expenses.innerHTML = totalExpenses;
        total.innerHTML = totalItems;
    } catch (error) {
        console.error('Erro ao caucular totais:', error);
    }
}

const getItensBD = () => JSON.parse(localStorage.getItem('db_items')) ?? [];
const setItensBD = () =>
  localStorage.setItem('db_items', JSON.stringify(items));

loadItens();

var menu = document.querySelectorAll('.mes');

function select() {
    menu.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}
menu.forEach((item) => item.addEventListener('click', select));

var car = document.querySelectorAll('.a');
var btn = document.querySelector('#btn-l');
var men = document.querySelector('.lateral');
var main = document.querySelector('main');
var header = document.querySelector('header');
btn.addEventListener('click', function(){
    men.classList.toggle('expandir');
    car.forEach((item) => item.classList.toggle('expan'));
    document.body.classList.toggle('barra-fechada', !men.classList.contains('expandir'));
    btn.addEventListener('click', () => {
        menu.forEach((item) => item.classList.remove('ativo'));
      });
})


const final = document.querySelector('#endMes');
const mesAtual = document.querySelector('#end-');
const listaOpcoes = document.querySelectorAll('.mes');
var resumao = []

const resetMainData = () => {
    const tbody = document.querySelector('tbody');
    const incomes = document.querySelector('.incomes');
    const expenses = document.querySelector('.expenses');
    const total = document.querySelector('.total');

    incomes.textContent = '0.00'
    expenses.textContent = '0.00'
    total.textContent = '0.00'

    tbody.innerHTML = ''

    resumao = []

    localStorage.removeItem('resumao');
    localStorage.removeItem('db_items')
}

final.onclick = () => {
    const valorSel = mesAtual.value;

    if (valorSel === '0') {
        return alert('Selecione um mes de fechamento!')
    }else {
        resumao.push({
            ent: incomes.textContent,
            sai: expenses.textContent,
            tot: total.textContent,
        })

        let liCorrespondente;

        listaOpcoes.forEach(li => {
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

        resetMainData();
        localStorage.setItem('resumao', JSON.stringify(resumao));
        saveBarraLateralData();
    }
};

function saveBarraLateralData() {
    const listaOpcoes = document.querySelectorAll('.mes')
    const dadosBarraLateral = []

    listaOpcoes.forEach(li => {
        const dataValue = li.getAttribute('data-value')
        const expValue = li.querySelector('.exp').textContent
        const incValue = li.querySelector('.inc').textContent
        const totValue = li.querySelector('.tot').textContent

        dadosBarraLateral.push({
            dataValue: dataValue,
            expValue: expValue,
            incValue: incValue,
            totValue: totValue,
        })
    })

    localStorage.setItem('dadosBarraLateral', JSON.stringify(dadosBarraLateral))
}
