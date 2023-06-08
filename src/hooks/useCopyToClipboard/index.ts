import { useCallback, useState } from 'react';

type CopyToClipboardProps = {
    error: Error | null,
    text: string | null
}

type CopyToClipboardCallback = (value: string) => void;

export function useCopyToClipboard(): [CopyToClipboardProps, CopyToClipboardCallback] {
    const [state, setState] = useState<CopyToClipboardProps>({
        error: null,
        text: null
    });

    const copyToClipboard = useCallback<CopyToClipboardCallback>(async (value) => {
        if (!navigator?.clipboard) {
            return setState({
                error: new Error("Clipboard not supported"),
                text: null
            });
        }

        const handleSuccess = () => {
            setState({
                error: null,
                text: value
            });
        };

        const handleFailure = (e: Error) => {
            setState({
                error: e,
                text: null
            });
        };

        navigator.clipboard.writeText(value).then(handleSuccess, handleFailure);
    }, []);

    return [state, copyToClipboard];
}