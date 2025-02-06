const posts = require("../data/posts");

// index
function index(req, res) {
    // res.json(posts);
    // filter 
    let filteredPosts = posts
    if (req.query.tag) {
        filteredPosts = posts.filter(el=> el.tags.includes(req.query.tag))
    };

    res.json(filteredPosts);
};

//show
function show(req, res) {
    // res.send(`Visione del post ${req.params.id}`);
    let post = posts.find((el) => el.id === parseInt(req.params.id));

    //per id inesistenti
    if (!post) {
        res.status(404);
        return res.json({post:"not found"});
    }

    res.json(post);
};

//create
function create(req, res) {
    res.send("Creazione nuovo post");
};

//update
function update(req, res) {
    res.send(`Modifica del post ${req.params.id}`);
};

//destroy
function destroy(req, res) {
    // res.send(`Eliminazione del post ${req.params.id}`);
    let post = posts.find((el) => el.id === parseInt(req.params.id));

    //per id inesistenti
    if (!post) {
        res.status(404);
        return res.json({post:"not found"});
    }

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);
};

//export
module.exports = { index, show, create, update, destroy };