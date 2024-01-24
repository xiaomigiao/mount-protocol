export const erc6551RegistryABI = [
    {
        "type": "function",
        "name": "account",
        "inputs": [
            {
                "name": "implementation",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "salt",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "chainId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "tokenContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "createAccount",
        "inputs": [
            {
                "name": "implementation",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "salt",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "chainId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "tokenContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "ERC6551AccountCreated",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "implementation",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "salt",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "chainId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "tokenContract",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AccountCreationFailed",
        "inputs": []
    }
] as const;

export const erc6551Implementation: `0x${string}` = "0x23fbB2E55745c6924B6F9fe5A22213c639Bc0e75"