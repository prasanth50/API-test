const app = require('express')();
const PORT = '8080';

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt : '👕',
        size: 'Large'
    })
});

app.listen(PORT, () => console.log(`It's live on http://localhost:${PORT}`));