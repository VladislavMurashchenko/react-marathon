const toCapitalizeFirstLetter = (text: string) => {
  if (!text) {
    return '';
  }

  if (text.length === 1) {
    return text.toUpperCase();
  }

  return text[0].toUpperCase().concat(text.slice(1).toLowerCase());
};

export default toCapitalizeFirstLetter;
