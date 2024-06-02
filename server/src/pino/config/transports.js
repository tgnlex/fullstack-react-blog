import pino from 'pino';

const transport = pino.transport({
  targets: [
    {level: 'signal',  target: 'pino-pretty', 
        options: {
          colorize: true,
        },
    }, 
    {level: 'info', target: console},
    {level: 'meta', target: '../fn/transporter.js', options: {destination: '../../../logs/all/'}},
    {level: 'data', target: '../fn/transporter.js', options: {destination: '../../../logs/data/'}},
    {level: 'info', target: '../fn/transporter.js', options: {destination: '../../../logs/info/'}}, 
    {level: 'warn', target: '../fn/transporter.js', options: {destination: '../../../logs/error/'}}
  ]
})

export {transport};