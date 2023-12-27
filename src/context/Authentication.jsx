import { createContext, useState, useEffect } from "react";
  import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { db } from "../firebase/config";
import { collection, getDocs, addDoc } from 'firebase/firestore'

const getUsers = async () => {
    const collectionRef = collection(db, 'users'); 

    try {
        const snapshot = await getDocs(collectionRef); 
        const documents = snapshot.docs.map(doc => doc.data());  

        console.log(documents);
     } catch (error) {
        console.error('Error fetching documents: ', error);
    }
};


 
const UserContext = createContext()

export default function ProviderUser({ children }) {


    const usersCollection = collection(db, 'users');
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const [userdetails, setUserdetails] = useState({});
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const logout = async () => {
        try {
            const res = await auth.signOut();

        }
        catch (error) {
            console.error('Logout error:', error.message);
            setError(error.message);
        }
    }

    const login = async (body) => {

        try {
            setError(null);

            const { email, password } = body;
            console.log(email);
            console.log(password);

            if (auth.currentUser !== null) {
                console.log("User is already logged in.");
                return false;
            }

            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user.uid)
            setUserId(res.user.uid)


            if (res.user !== null) {
                console.log("User logged in:", res.user);
                return true;
            }
        } catch (error) {
            console.error('Login error:', error.message);
            setError(error.message);
        }
        return false;
    };




    const register = async (body) => {



        try {
            setError(null);
            const res = await createUserWithEmailAndPassword(auth, body.email, body.password);
            console.log("user sign in:", res.user);
            console.log(res.user.uid)
            setUserId(res.user.uid)
            console.log(userId)

            setUserdetails({
                id: res.user.uid,
                role: body.role,
                email: body.email,
                password: body.password
            });

            await addDoc(usersCollection,
                {
                    id: res.user.uid,
                    role: body.role,
                    email: body.email,
                    password: body.password
                });


        }
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    };



    const shared = { register, login, userId, currentUser, userdetails, logout }

    return (
        <UserContext.Provider value={shared}>
            {children}
        </UserContext.Provider>
    )


}


export { UserContext };
