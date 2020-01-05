const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/autobuymarket',  {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
