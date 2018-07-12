import baseEditForm from '../_classes/component/Component.form';

import DayEditDisplay from './editForm/Day.edit.display';
import DayEditValidation from './editForm/Day.edit.validation';

export default function(...extend) {
  return baseEditForm(...extend, [
    {
      key: 'display',
      components: DayEditDisplay
    },
    {
      key: 'validation',
      components: DayEditValidation
    }
  ]);
}