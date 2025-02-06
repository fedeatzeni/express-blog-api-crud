function index(req, res) { 
    res.send("Lista dei post");
}

function show(req, res) { 
    res.send(`Visione del post ${req.params.id}`);
}

function create(req, res) { 
    res.send("Creazione nuovo post")
}

function update(req, res) { 
    res.send(`Modifica del post ${req.params.id}`);
}

function destroy(req, res) { 
    res.send(`Eliminazione del post ${req.params.id}`)
}

module.exports = {index, show, create, update, destroy}