const express = require('express');
const app = express();
const PORT = '8080';

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt : '👕',
        size: 'Large'
    })
});
// You can get the API listener output for the t-shirt from the following console log
app.listen(PORT, () => console.log(`It's live on http://localhost:${PORT}`));
