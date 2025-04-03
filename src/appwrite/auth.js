import config from "../config/config";
import { Client,Account,ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
  
    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount) {
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch(error) {
            throw error;
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error.message);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("User details:", user);
            return user;
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error.message);
            return null;
        }
    }
    

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;