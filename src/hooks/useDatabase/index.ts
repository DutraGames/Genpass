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
        await push(referencial, dadinhos)
    };

    const onData = useCallback(async () => {
        return new Promise<Dado[]>((resolve) => {
            const referencial = ref(database, `${auth.currentUser?.uid}`);
            onValue(referencial, (snapshot) => {
                const data = Object.entries(snapshot.val() ?? {}).map(([chave, valor]) => {
                    if (typeof valor === 'object' && valor !== null) {
                        return {
                            chave,
                            senha: (valor as { senha: string }).senha,
                        };
                    } else {
                        // Valor ignorado ou tratamento apropriado
                        return null; // ou {}
                    }
                }) as Dado[]
                resolve(data);
            });
        });
    }, [])

    const DeleteData = (key: string) => {
        const referencial = ref(database, `${auth.currentUser?.uid}/${key}`)
        remove(referencial)
    }


    return {
        sendData,
        onData,
        DeleteData
    };
}