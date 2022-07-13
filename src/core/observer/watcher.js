

export default class Watcher {
  constructor(cb) {
    this.cb = cb;
  }

  update() {
    this.cb();
  }
}