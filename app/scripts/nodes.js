'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "SBTC",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    ETSC: "ETSC",
    EGEM: "EGEM",
    CLO: "CLO",
    CLOT: "Testnet CLO",
    EAST: "EAST",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'Rootstock': {
        'name': 'RSK Testnet',
        'blockExplorerTX': 'https://explorer.testnet.rsk.co/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.testnet.rsk.co/addr/[[address]]',
        'type': nodes.nodeTypes.RSK,
        'eip155': true,
        'chainId': 779,
        'tokenList': [],
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'ShapeShift-RSK',
        'lib': new nodes.customNode('http://192.168.42.22', 8545)
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
