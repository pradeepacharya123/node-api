const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pradeep035:acharya123@pradeep.xlnrdcd.mongodb.net/?retryWrites=true&w=majority",
    {
        useUnifiedtopology: true,
        useNewUrlParser: true,

    }
)
    .then((response) => {
        console.log("Connected to database ")
    }
    )
    .catch((error) => {
        console.log(error);

    }
    );

