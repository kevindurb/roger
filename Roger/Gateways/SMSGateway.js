const Twilio = require('twilio');

class SMSGateway {
  constructor(sid, token) {
    this.client = new Twilio(sid, token);
  }
}

module.exports = SMSGateway;
