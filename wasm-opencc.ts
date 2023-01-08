const { DictSource, Converter } = require('wasm-opencc')
const dictSource = new DictSource('s2t.json');

dictSource.get().then((args) => {
  const converter = new Converter(...args)
  console.log(converter.convert('繁体'))
  // 注意當不再需要使用converter時，請調用delete方法以釋放內存
  converter.delete()
});
