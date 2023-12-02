import {config} from "dotenv";
config();
import app from "./app";
import db from "./models";

(async (port) => {
    try {
        await db.sequelize.sync({force: true});
        console.log("DataBase connected");
        app.listen(port, () => {
            console.log("server listening on port: " + port)
        })
    } catch (e) {
        console.log(e);
        throw e;
    }
})(process.env.PORT || 5000);