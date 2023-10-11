import { SimpleSubject, SimpleSubjectSubscription } from './SimpleSubject';

export class SimpleBehaviorSubject<T> extends SimpleSubject<T> {
  constructor(private _value: T) {
    super();
  }

  get value(): T {
    return this._value;
  }

  next(value: T): void {
    super.next((this._value = value));
  }

  subscribe(cb: (val: T) => void): SimpleSubjectSubscription {
    const sub = super.subscribe(cb);
    cb(this.value);
    return sub;
  }
}
