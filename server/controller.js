let customFortune = {};

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["All your hard work will soon pay off", "Believe it can be done", "You will be successful in your work"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createFortune: (req, res) => {
        console.log(req, res);
        customFortune = req.body;
        res.sendStatus(200);
    },

    getCustomFortune: (req, res) => {
        res.status(200).send(customFortune);
    },

    editCustomName: (req, res) => {
        const { newName } = req.params;
        customFortune.name = newName;
        res.sendStatus(200);
    },

    deleteCustomFortune: (req, res) => {
        customFortune = {};
        res.sendStatus(200);
    }
}