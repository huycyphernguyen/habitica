import spells from '../../../common/script/src/content/spells/wizard';
import {each} from 'lodash';

describe('Mage Spells', () => {
  each(spells, (spell, key) => {
    describe(`${key} Spell`, () => {
      it('has a valid text attribute', () => {
        expectValidTranslationString(spell.text);
      });

      it('has a valid notes attribute', () => {
        expectValidTranslationString(spell.notes);
      });
    });
  });
});
