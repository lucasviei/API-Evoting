

mnemonic = 'stool orient ceiling book model time carpet federal attend nose sauce profit'
endpoint = 'https://rinkeby.infura.io/v3/5af36a149d9848d9a1248a97a740e1c9';
contractAddress = '0x45f1bb85ab6345b626598dfe6038c2812bfb591a';

contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_plate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_tokenUser",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_votingId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_votingTime",
				"type": "string"
			}
		],
		"name": "incluirRegistroVoto",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "novoProprietario",
				"type": "address"
			}
		],
		"name": "mudarProprietario",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_votingId",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "indexes",
				"type": "uint256[]"
			}
		],
		"name": "apuracaoVotos",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "contadorVotos",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.Chapa[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contador",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numExec",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "proprietario",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_votingId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenUser",
				"type": "string"
			}
		],
		"name": "recuperarRegistroEleitor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_votingId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_plate",
				"type": "uint256"
			}
		],
		"name": "recuperarResultados",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = {
	mnemonic,
	endpoint,
	contractAbi,
	contractAddress
};