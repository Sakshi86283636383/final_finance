const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Finance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreatedIndex:true
  })
  .then(() => {
    console.log(`connection successful for finance`);
  })
  .catch((e) => {
    console.log(e);
  });
