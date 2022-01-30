function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 3000);
    });
}

// Throws UnhandledPromiseRejection error only for first async call
const syncCallsToServer = async (msg1, msg2) => {
    const dataMsg1 = await fakeFetch(msg1, true);
    const dataMsg2 = await fakeFetch(msg2, true);
    console.log(dataMsg1, dataMsg2);
}

// syncCallsToServer("Hello", "World!!"); 

// Error Handling with async-await
const syncCallsToServerHandleError = async (msg1, msg2) => {
    // Catches only the first Promise Rejection error
    try {
        const dataMsg1 = await fakeFetch(msg1, true);
        const dataMsg2 = await fakeFetch(msg2, true);
    } catch(err) {
        console.log(err);
    }

    // Catches all the promise rejection errors
    const dataMsg1 = await fakeFetch(msg1, true).catch(err => console.log(err));
    const dataMsg2 = await fakeFetch(msg2, true).catch(err => console.log(err));
}

syncCallsToServerHandleError("Hello", "World!!");