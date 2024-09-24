// Para trabalhar com banco nesse arquivo, precisamos chamar a config do firebase.
import { db } from "../firebase/config";
//import { auth } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassowrd,
    updateProfile,
    signOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup limpar funções
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    // função de registro

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            return user
        }catch(e){
            console.log(e)
            console.log(typeof e.message)

            let systemErrorMessage
            if(e.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"                                
            }else if(e.message.includes("auth/email-already-in-use")){
                systemErrorMessage = "E-mail já cadastrado"
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor, tente novamente mais tarde."
            }
            setError(systemErrorMessage);
        }
        setLoading(false)
    }

    //
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth, createUser, error, loading
    }
}