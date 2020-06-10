const server = require('./server.js')

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})