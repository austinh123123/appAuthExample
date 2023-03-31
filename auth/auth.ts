import authConfig from "./config";
import { authorize } from "react-native-app-auth";


const signIn = async () => {
    try {
        const authState = await authorize(authConfig); 
        console.log(authState);
        //parse the id_token
        
    } catch (error) {
        console.log(error);
        //@ts-ignore
        console.log(error.message);
    }   

};

export {signIn}