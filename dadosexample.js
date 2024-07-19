const dadosUsuario = {
    nome: "João Silva",
    imagemDePerfil: "https://lh3.googleusercontent.com/pw/AP1GczNRv5kcXNrnptXk3AR5xxecXKn8Im_sliC2H67w4tUbVH6L7GxMOhDsRssvHO4s7RxywVI-bAGB4iB-YYPEFvstdyN1r8lb1B-XBJME-VV4LmXO5X1cO0hlXXovOSW-9yCI5_hmW6zU-Z8FvwzsJAg-VcruCFGEkyYr73end6cC60Q1v01woW0DTDuMKM8xlLmvfKYXPZ8rN1dhFJSWoWXhjgF8dBHf1E3Lb0skSu-M7NTzycULJNsgGFkchJ0Z1AIsdYNQ-09oaJmC3iylWntg_2COBfISHp_bW_9EZjFDpkPcjDtU0CHJC3V-vYCL0nkTVux646VYIY359MeO4aAVxut1wEQCF4urdbf0XBrqoMjUUb6vvHpzPcRoa6TpdZv00O6ldZdaNAvRo2I5q6R9bGXSZQbWjvs5nDdGvAtLm_7_D2sXktWd3mf6TAko-ldv_hkOib1lhuun_S15E4mN4NtuR0mDAK8-cYpDRzsfH1xkPuBxxuPjde45-xflLhYwDDqwaxudmsVrYZjtR5x3VZcIROVc3twKlHrqpE2D-7AWxJWnjoTHDS9WTvbpCvO6Nh20AwKPUKdvMBWdPWArxvQQFkZTLP8hImGYYx0iYuM-qDpBrLAHsVTl1ooBk156EUMPkC3VB279kmXzO4q4WfKttJ3qjW3lShphkDlOHItcowEaSf3qGw-aEiB1GhZ_O-fS-pd7FWFW_ue85G4GSGIlRLCNgDrfSSALqus7Wqyww9NFitTUkx63kVh2SXQgBs5VJRiCDap0HNWpkkOJw6TOy6QiztpvKZ8UCpIWopW11m2opgP-baLYuZ94XziFvtOe3qmriWO-YT4rpjGYUYLdmECP86awaGBgkGcCIu9Lf-6THfFQyrSuPttaFZEuAPhaphuLzEBvp1y8lsqBMBTv9nM1zGl3-dh4aI7F8doTBPt4vborCootiwquivlayEfkbkCukkn62WlE4sCZAOVNqWY=w442-h786-s-no-gm?authuser=0"
};
  
const dadosFinanceiros = {
    dadosMensais: [
      {
        mes: "Janeiro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 200, descricao: "Venda de itens usados" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 600, descricao: "Supermercado" },
          { valor: 300, descricao: "Transporte" },
          { valor: 150, descricao: "Lazer" }
        ]
      },
      {
        mes: "Fevereiro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 150, descricao: "Venda de artesanato" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 550, descricao: "Supermercado" },
          { valor: 320, descricao: "Transporte" },
          { valor: 100, descricao: "Lazer" }
        ]
      },
      {
        mes: "Março",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 200, descricao: "Venda de itens usados" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 600, descricao: "Supermercado" },
          { valor: 300, descricao: "Transporte" },
          { valor: 150, descricao: "Lazer" }
        ]
      },
      {
        mes: "Abril",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 150, descricao: "Venda de artesanato" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 550, descricao: "Supermercado" },
          { valor: 320, descricao: "Transporte" },
          { valor: 100, descricao: "Lazer" }
        ]
      },
      {
        mes: "Maio",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 300, descricao: "Bônus de final de ano" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 700, descricao: "Supermercado" },
          { valor: 350, descricao: "Transporte" },
          { valor: 400, descricao: "Presentes de Natal" }
        ]
      },
      {
        mes: "Junho",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 200, descricao: "Venda de itens usados" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 600, descricao: "Supermercado" },
          { valor: 300, descricao: "Transporte" },
          { valor: 150, descricao: "Lazer" }
        ]
      },
      {
        mes: "Julho",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 150, descricao: "Venda de artesanato" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 550, descricao: "Supermercado" },
          { valor: 320, descricao: "Transporte" },
          { valor: 100, descricao: "Lazer" }
        ]
      },
      {
        mes: "Agosto",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 300, descricao: "Bônus de final de ano" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 700, descricao: "Supermercado" },
          { valor: 350, descricao: "Transporte" },
          { valor: 400, descricao: "Presentes de Natal" }
        ]
      },
      {
        mes: "Setembro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 200, descricao: "Venda de itens usados" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 600, descricao: "Supermercado" },
          { valor: 300, descricao: "Transporte" },
          { valor: 150, descricao: "Lazer" }
        ]
      },
      {
        mes: "Outubro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 150, descricao: "Venda de artesanato" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 550, descricao: "Supermercado" },
          { valor: 320, descricao: "Transporte" },
          { valor: 100, descricao: "Lazer" }
        ]
      },
      {
        mes: "Novembro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 300, descricao: "Bônus de final de ano" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 700, descricao: "Supermercado" },
          { valor: 350, descricao: "Transporte" },
          { valor: 400, descricao: "Presentes de Natal" }
        ]
      },
      {
        mes: "Dezembro",
        ano: 2023,
        entradas: [
          { valor: 5000, descricao: "Salário" },
          { valor: 300, descricao: "Bônus de final de ano" }
        ],
        saidas: [
          { valor: 1500, descricao: "Aluguel" },
          { valor: 700, descricao: "Supermercado" },
          { valor: 350, descricao: "Transporte" },
          { valor: 400, descricao: "Presentes de Natal" }
            ]
        }
    ]
};
  
export { dadosUsuario, dadosFinanceiros };