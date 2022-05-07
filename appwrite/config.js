import { Appwrite } from "appwrite";
const app = new Appwrite();

app
  .setEndpoint("https://ec2-65-1-110-75.ap-south-1.compute.amazonaws.com/v1")
  .setProject("6276945952266f6d7951");

export default app;
