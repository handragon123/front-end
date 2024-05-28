// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 'l',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink',
//   },
// };

export function getImageUrl(person) {
  return `https://i.imgur.com/${person.imageId}${person.imageSize}.jpg`;
}
