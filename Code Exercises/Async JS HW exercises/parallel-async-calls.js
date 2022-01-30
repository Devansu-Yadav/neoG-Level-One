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

// Making parallel Async calls using Promises
const parallelCallsToServer = async (msg1, msg2) => {
    const [msgData1, msgData2] = await Promise.all([fakeFetch(msg1), fakeFetch(msg2)]);
    console.log(msgData1, msgData2);
}

parallelCallsToServer("Hello", "World!!");