# Mailsac.com Web Socket Email Example

Example of receiving emails over a web socket.

## Requirements

- Node.js and npm
- mailsac.com paid account (for API key)

## Usage

Clone this repository and `cd` into it.

```
npm install
export MAILSAC_USER = 'your mailsac username / _id';
export MAILSAC_KEY = 'your mailsac api key'; # Obtain from https://mailsac.com/api-keys
export ADDRESSES = 'myaddress@mailsac.com,some-address@example.com' # list your emails to listen for messages
node example.js
```
