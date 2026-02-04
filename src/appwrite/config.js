import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    Client = new Client();
    TablesDB;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.TablesDB = new TablesDB(this.Client);
        this.bucket = new Storage(this.Client);
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.TablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteBucketId,
                rowId: ID.unique(),
                data:
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            });
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);

        }
    }
    async updatePost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.TablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteBucketId,
                rowId: ID.unique(),
                data:
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            });
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    async deletePost(rowId){
        try {
            await this.TablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteBucketId,
                rowId: rowId
            });
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }
    async getPost(){
        try {
            return await this.TablesDB.getRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteBucketId,
            rowId: ID.unique()
        })
        }catch (error) {
                console.log("Appwrite service :: getPost :: error", error);
            }
        }
    async getPosts(queries=[Query.equal("status",["active"])]){
        try {
            return await this.TablesDB.listRows({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteBucketId,
            queries:queries//or queries=[Query.equal("status",["active"])] direct yhi likh do
        })
        }catch (error) {
                console.log("Appwrite service :: getPosts :: error", error);
                return false;
            }
        }

        //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId:conf.appwriteBucketId,
                fileId:ID.unique(),
                file:file
        });
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
        });
        return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }
    async getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
        });
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return false;
        }
    }
    async getFileDownload(fileId){
        try {
            return this.bucket.getFileDownload({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
        });
        } catch (error) {
            console.log("Appwrite service :: getFileDownload :: error", error);
            return false;
        }
    }
}
const service = new Service();

export default service;
