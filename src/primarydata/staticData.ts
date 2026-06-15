import { number, string } from "zod";

export interface CompanyInfo {
    name:string;
    tagline:string;
    foundedYear:number;
    businessContacts:{
        email:string;
        phone:string;
    }
    socialLinks:{
        whatsapp:string;
        facebook?:string;
        tiktok?:string;
    };
    location:{
        country:string;
        city:string;
        street:string;
    };
}

export const companyData: CompanyInfo = {
    name:"BENKIZ CATERERS",
    tagline:"The best choice",
    foundedYear:2012,
    businessContacts:{
        email:"benkizbakers@gmail.com",
        phone:"+254 707 091 550",
    },
    socialLinks:{
        whatsapp:"+254 707 091 550",
    },
    location:{
        country:"Kenya",
        city:"Kisii",
        street:"Kisii Kilgoris - RD",
    }
}