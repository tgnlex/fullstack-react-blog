import pino from 'pino';

const send = async function (level, logEvent) {
  const url = "https://demo.parseable.io/api/v1/logstream/pinotest";

  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([logEvent]),
  });
  console.log(response);
};

const logger = pino({
  browser: {
    serialize: true,
    asObject: true,
    transmit: send,
  }
})
export {logger};