import {useEffect} from 'react';

export const useEvent = (message: string | object): void => {
    return useEffect(() => {
        chrome.runtime.sendMessage(message);
    });
};
