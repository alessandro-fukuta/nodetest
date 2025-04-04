const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

router.post("/pergunta", (req,res) => {

    // o body do post, vem com o json { pergunta: "a pergunta" };
    // pegando o conteudo da pergunta

    var pergunta = req.body.pergunta; 

    if (pergunta === undefined) {
        res.status = 400;
        res.json({err: "Dados Inválidos"});
    } else {

        // inserir a pergunta no BD.

        var SQL = "INSERT INTO perguntas values ?";
        var values = [
            [pergunta]
        ];

        connection.query(sql, [values], function(err,result) {
            if (err) {
                res.sendStatus(401).json({err: "A pergunta não cadastrada !"});
            }
            res.status(201).json({OK: "Pergunta Feita"});
        })

    }

});

module.exports = router;