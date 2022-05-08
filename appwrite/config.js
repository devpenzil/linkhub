import { Appwrite } from "appwrite";
const app = new Appwrite();

app.setEndpoint(process.env.ENDPOINT).setProject(process.env.PROJECTID);

export default app;
