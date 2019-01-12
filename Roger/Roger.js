const Container = require('./Container');
const SMSGateway = require('./Gateways/SMSGateway');
const SMSListener = require('./Listeners/SMSListener');

class Roger {
  constructor() {
    this.container = new Container();
    this.buildContainer();
  }

  buildContainer() {
    this.container.add('smsGateway', () => (
      new SMSGateway(
        process.env.TWILIO_SID,
        process.env.TWILIO_TOKEN
      )
    ));

    this.container.add('smsListener', (c) => (
      new SMSListener(
        c.get('smsGateway')
      )
    ));
  }

  boot() {
    this.container.get('smsListener').init();
    console.log('Roger up and running and at your service!');
  }
}

module.exports = Roger;
