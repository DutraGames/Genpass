import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User
} from 'firebase/auth'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../config/firebaseConfig'



export default function useAuth() {
    const [usermain, setUsemain] = useState<User>()


    const onAuth = () => {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        })
    }

    const create = async (email: string, pass: string, nome: string) => {

        await createUserWithEmailAndPassword(auth, email, pass)
            .then(async (userCredencial) => {
                const user = userCredencial.user
                setUsemain(user)
                //await update(nome)
                //await sendEmail()
                toast.success("Conta Criada!")
            })
            .catch((error) => {
                console.log(error.message)
                toast.error("Falha na criação!")
            })
    }

    const login = async (email: string, pass: string) => {
        await signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user
                setUsemain(user)
                toast.success("Entrou com sucesso!")

            })
            .catch((error) => {
                console.log(error.message)
                toast.error("Falha no login!")

            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            })
    }

    /* const update = async (name: string) => {
        await updateCurrentUser(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log("o nome é: ", auth.currentUser?.displayName)
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    const sendEmail = async () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("foi")
            });
    } */

    return {
        onAuth,
        create,
        login,
        logout,
    }
}