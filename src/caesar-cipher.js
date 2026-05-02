/**
 *
 * @param {String} text
 * @param {Number} code
 * @returns {String}
 */
export function caesarCipher(text, code) {
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    const codeChar = text.charCodeAt(i);
    let newCode;
    let step;
    switch (true) {
      case codeChar < 65:
        newCode = codeChar;
        break;
      case codeChar < 91:
        newCode = 65 + ((((codeChar - 65 + code) % 26) + 26) % 26);
        break;
      case codeChar < 97:
        newCode = codeChar;
        break;
      case codeChar < 123:
        newCode = 97 + ((((codeChar - 97 + code) % 26) + 26) % 26);
        break;
      default:
        newCode = codeChar;
        break;
    }

    const encodedLetter = String.fromCharCode(newCode);
    encodedText += encodedLetter;
  }
  return encodedText;
}
