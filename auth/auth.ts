import authConfig from "./config";
import { authorize } from "react-native-app-auth";


const signIn = async () => {
    try {
        const authState = await authorize(authConfig); 
    } catch (error) {
        console.log(error);
        //@ts-ignore
        console.log(error.message);
    }   
};

export {signIn}