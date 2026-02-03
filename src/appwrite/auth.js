import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {//ye class h jb bhi iska object bnega to constructor chalega
    Client = new Client();
    account;
    constructor() {//ye dekh k likha h documentation se hmne
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.Client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount= await this.account.create({userId:ID.unique(),email,password,name});
            if(userAccount){
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession({email,password});
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser :: error",error);
           
        }
        return null;//agr account hi nhi hua to ye andr if else lga kr bhi kr skte the pr aise kia
    }
    async logout(){
        try {
             await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}

const authService=new AuthService();//object h


export default authService;