const port = 3003
const bodyParser = require("body-parser")
const express = require("express")
var cors = require('cors');
const server = express();
var timeout = require('connect-timeout');
const blockchain = require("./blockchain");

//Comment 2
server.use(bodyParser.urlencoded({ extended:true }));
server.use(bodyParser.json());
server.use(cors());
server.use(timeout('1000s'));

server.post('/balance', async function (req, res) {
    if (req.body.address != null) {
      const balance = await blockchain.web3.eth.getBalance(req.body.address);
      res.send({ message: balance + ' ETH' });
    } else {
      res.status(400).send({ message: 'Campo endereço inválido' });

    }
  });


server.post('/recuperarRegistroEleitor', async function (req, res) {
    const dado = await blockchain.instance.methods.recuperarRegistroEleitor(req.body.votingId, req.body.tokenUser).call();
    return res.send({ registro: dado });
});

server.post('/recuperarResultados', async function (req, res) {
  const dado = await blockchain.instance.methods.recuperarResultados(req.body.votingId, req.body.plate).call();
  return res.send({ registro: dado });
});

server.post('/apuracaoVotos', async function (req, res) {
  const dado = await blockchain.instance.methods.apuracaoVotos(req.body.votingId, req.body.indexes).call();
  return res.send({ registro: dado });
});

server.post('/incluirRegistroVoto', async function (req, res) {
  
  const logBlockchain = await blockchain.instance.methods.incluirRegistroVoto(
    req.body.plate,
    req.body.tokenUser,
    req.body.votingId,
    req.body.votingTime
  ).send({
    from: '0x8ec943e38c0722079944d90f85045a2b25849351',
    gas: '5000000'
  }).catch(err => {
    console.log('erro : ', err)
  });
  return res.send({ registro: logBlockchain });
});


server.listen(process.env.PORT || port, function(){
	console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server