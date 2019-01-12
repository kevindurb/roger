class Container {
  constructor() {
    this.factories = {};
    this.instances = {};
  }

  add(name, factory) {
    this.factories[name] = factory;
  }

  get(name) {
    if (!this.instances[name]) {
      const factory = this.factories[name];

      if (!factory) {
        console.trace();
        throw new Error(`Could not find factory: ${name}`);
      }

      this.instances[name] = factory(this);
    }

    return this.instances[name];
  }
}

module.exports = Container;
