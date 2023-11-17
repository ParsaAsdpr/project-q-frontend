import { useState, useEffect } from 'react';

function useNumberFormatter(initialNumber: number) {
  const [number, setNumber] = useState(initialNumber);
  const [formattedNumber, setFormattedNumber] = useState(formatNumberWithSuffix(number));

  useEffect(() => {
    setFormattedNumber(formatNumberWithSuffix(number));
  }, [number]);

  return {
    number,
    setNumber,
    formattedNumber,
  };
}

function formatNumberWithSuffix(number: number) {
  switch (true) {
    case number >= 1000000:
      return (number / 1000000).toFixed(1) + ' میلیون';
    case number >= 1000:
      return (number / 1000).toFixed(1) + ' هزار';
    default:
      return number.toString();
  }
}

export default useNumberFormatter;
