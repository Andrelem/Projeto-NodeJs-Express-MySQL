const constumExpress = require("./config/constumExpress")

const app = constumExpress()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))