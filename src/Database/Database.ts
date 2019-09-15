var mongoose = require('mongoose');

export class Database {
    public ConnnectDatabase(uri: string) {
        mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true  },(err: any) => {
            if (err) {
              console.log(err.message);
            } else {
              console.log("Successfully Connected!");
            }
          });
    }
}