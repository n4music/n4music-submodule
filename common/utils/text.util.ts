export function removeVietnameseTones(str: string): string {
  const accents = 'àáảãạâầấẩẫậêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụûừứửữựỳýỷỹỵđ';
  const withoutAccents = 'aaaaaaeeeeeiiooooouuuuuuyd';

  return str
    .split('')
    .map((char) => {
      const index = accents.indexOf(char);
      return index !== -1 ? withoutAccents[index] : char;
    })
    .join('');
}
