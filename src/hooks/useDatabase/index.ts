import { Dado } from '@/types/Dado';
import { onValue, push, ref, remove } from 'firebase/database';
import { useCallback } from 'react';
import { auth, database } from '../../config/firebaseConfig';

export default function useDatabase() {




    const sendData = async (pass: string) => {
        const dadinhos = {
            senha: pass
        }
        const referencial = ref(database, `${auth.currentUser?.uid}`)
        await push(referencial,dadinhos)
    };

    const onData = useCallback(async () => {
        return new Promise<Dado[]>((resolve) => {
            const referencial = ref(database, `${auth.currentUser?.uid}`);
            onValue(referencial, (snapshot) => {
                const data = Object.entries(snapshot.val() ?? {}).map(([chave, valor]) => {
                    return {
                        chave,
                        senha: valor.senha as string,
                    };
                });
                resolve(data);
            });
        });
    }, [])

    const DeleteData = (key:string) => {
        const referencial = ref(database, `${auth.currentUser?.uid}/${key}`)
        remove(referencial)
    }
    

    return {
        sendData,
        onData,
        DeleteData 
    };
}