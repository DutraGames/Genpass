import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { DocumentCopy, Eye, EyeSlash, Trash } from 'iconsax-react';
import { useState } from "react";
import styles from './style.module.css';

interface PassItemProps {
    senha: string;
    onDelete: () => void;
}



export default function PassItem({ senha, onDelete }: PassItemProps) {
    const [state, copyToClipboard] = useCopyToClipboard()
    const [view, setView] = useState<boolean>(false)

    const handleCopy = () => {
        copyToClipboard(senha)
    }


    return (
        <div className={styles.main}>
            {view && <p className={styles.pass}>{senha}</p>}
            {!view && <p className={styles.pass}>**********</p>}

            <div className={styles.icons}>
                <div className={styles.copy} onClick={handleCopy}>
                    <DocumentCopy size={20} />
                </div>
                <div className={styles.delete} onClick={onDelete}>
                    <Trash size={20} />
                </div>
                <div className={styles.eye} onClick={() => setView(!view)}>
                    {view ? <Eye size={20} color="#0A2FB6" /> : <EyeSlash size={20} color="#0A2FB6" />}
                </div>
            </div>
        </div>
    )
}
