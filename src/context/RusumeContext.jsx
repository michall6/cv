import { createContext, useState, useContext } from "react";
import { jsPDF } from "jspdf";
import { UserContext } from "./Authentication";

import { db } from "../firebase/config";
import {  collection, addDoc , getDocs} from 'firebase/firestore';


export const Rusume_Context = createContext({})
export default function ProviderRusume({ children }) {

 

    const resumeCollection = collection(db, 'resumes');

    const { userId, currentUser } = useContext(UserContext); 
    const { resumePerUser, setResumePerUser } = useState([]); 

    const [resume, setResume] = useState({}); 
    const [RusumeDetails, setRusumeDetails] = useState({}); 
    const [imgUrl, setImgUrl] = useState({});


 

     const createRusume = async (body) => {
        if (body)
            try {
                console.log(body)

                 setResume({
                    fullName:body.fullName,
                    experienceYears:body.experienceYears,
                    currentCompany:body.currentCompany,
                    currentExperienceYears: body.currentExperienceYears,
                    studyDetails:body.studyDetails,
                    image: body.image,
                    userId:body.cuid
                }) 

                await addDoc(resumeCollection, {
                    fullName:body.fullName,
                    experienceYears:body.experienceYears,
                    currentCompany:body.currentCompany,
                    currentExperienceYears: body.currentExperienceYears,
                    studyDetails:body.studyDetails,
                    image: body.image,
                    userId:body.cuid
                });


            } catch (error) {
                console.error('CREATE_RUSUME error:', error.message);
            }


    };

    const getResumesPerUser = async () => {
        const resumeDocs = await getDocs(resumeCollection);
        
        const resumes = resumeDocs.docs.map(doc => doc.data());
    
        console.log(resumes);
        console.log(currentUser.uid);
    
        return resumes.filter(resume => resume.userId === currentUser.uid);
    };

    const shared = {  createRusume, resume, resumePerUser , getResumesPerUser, setImgUrl }



    return (
        <Rusume_Context.Provider value={shared}>
            {children}
        </Rusume_Context.Provider>
    )
}
