import { Builder } from './builder';
import { Animal } from './animal';

let cat: Animal;
cat =  Builder<Animal>().id(13).name('Felix').weight(900).build();

console.log(cat);
