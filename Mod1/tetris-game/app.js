console.log(chroma('#D4F880').darken().hex());  // #a1c550);

const scale = chroma.scale(['white', 'red']);
console.log(scale(0.5).hex());