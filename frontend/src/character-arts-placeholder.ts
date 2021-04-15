import img1 from './assets/chara.png';
import img2 from './assets/chara-2.png';
import img3 from './assets/chara-3.png';
import img4 from './assets/chara-4.png';
import { ICharacter } from './interfaces';

const allImages = [img1, img2, img3, img4];

export function getCharacterArt(character: ICharacter) {
  if (!character) {
    return null;
  }

  return allImages[character.id % allImages.length];
}