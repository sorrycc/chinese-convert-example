import { OpenCC } from 'opencc';

async function main() {
  const converter: OpenCC = new OpenCC('s2t.json');
  const result: string = await converter.convertPromise('汉字');
  console.log(result);
}

main()
  .catch(e => {
    console.error(e);
  })
