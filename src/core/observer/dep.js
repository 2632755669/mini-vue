
export default class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    if (!sub.update) return;
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => sub());
  }
}