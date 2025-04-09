import { AbsoluteTimePipe } from './absolute-time.pipe';

describe('AbsoluteTimePipe', () => {
  it('create an instance', () => {
    const pipe = new AbsoluteTimePipe();
    expect(pipe).toBeTruthy();
  });
});
