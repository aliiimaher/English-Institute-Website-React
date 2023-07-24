export default function persianToEnglishNumerals(
  persianNumber: string
): string {
  const persianNumerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let result = persianNumber;
  for (let i = 0; i < persianNumerals.length; i++) {
    const persianNumeral = persianNumerals[i];
    const englishNumeral = englishNumerals[i];
    const regExp = new RegExp(persianNumeral, "g");
    result = result.replace(regExp, englishNumeral);
  }
  return result;
}
