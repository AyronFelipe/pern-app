/* eslint-disable max-len */
import { formatDateString, truncateText } from './index';

describe('formatDateString', () => {
  it('must return an empty string if the date is undefined', () => {
    const result = formatDateString(undefined);
    expect(result).toEqual('');
  });

  it('must correctly format the date', () => {
    const result = formatDateString('2023-11-22T20:15:37.107Z');
    expect(result).toEqual('22/11/2023 20:15');
  });
});

describe('truncateText', () => {
  it('should return the same text if it is shorter than or equal to the maxLength', () => {
    const result = truncateText('Short text', 15);
    expect(result).toEqual('Short text');
  });

  it('should truncate the text correctly if it is longer than the maxLength', () => {
    const result = truncateText(
      'This is a longer text that needs to be truncated',
      15
    );
    expect(result).toEqual('This is a lo...');
  });

  it('should return an empty string if the input text is an empty string', () => {
    const result = truncateText('', 10);
    expect(result).toEqual('');
  });
});
