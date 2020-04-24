// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request) => {
    // onMessage must return "true" if response is async.
    const isResponseAsync = false;

    console.log(request);

    return isResponseAsync;
});
