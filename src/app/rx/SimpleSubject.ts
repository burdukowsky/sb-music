import { removeFromArray } from 'src/app/utils/common.ts';

class SimpleSubjectObserver<T> {
  private readonly cb: (val: T) => void;

  constructor(cb: (val: T) => void) {
    this.cb = cb;
  }

  next(val: T): void {
    this.cb(val);
  }
}

export interface SimpleSubjectSubscription {
  unsubscribe: () => void;
}

export class SimpleSubject<T> {
  private observers: SimpleSubjectObserver<T>[] = [];

  next(val: T): void {
    for (const observer of this.observers) {
      observer.next(val);
    }
  }

  subscribe(cb: (val: T) => void): SimpleSubjectSubscription {
    const observer = new SimpleSubjectObserver(cb);
    this.observers.push(observer);
    const unsubscribe = (): void => removeFromArray(this.observers, observer);
    return { unsubscribe };
  }
}
