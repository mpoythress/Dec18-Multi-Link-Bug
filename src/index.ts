/**
 * This is a scaffold for defining a Workbook with Sheets and Portals.
 * Test this scaffold using the sample file in examples/sample-uploads/my-sheet-sample.csv.
 *
 * See examples/workbooks/FullExample.ts for a full, working example of a Workbook.
 */

import {
  LinkedField,
  Sheet,
  TextField,
  Workbook,
} from '@flatfile/configure'

/**
 * Sheets
 * Define your Sheet configuration and Fields here, or import them:
 * import { YourSheet } from './path-to-your-sheet/your-sheet.ts'
 */
const Persons = new Sheet('Persons', {
  PersonID: TextField({
    label: 'Person ID',
    unique: true,
    required: true,
    primary: true,
  }),

  LegalName: TextField({
    label: 'Legal Name',
    description: 'This is a more detailed description of the field',
    required: true,
  }),
},
{
  previewFieldKey: 'LegalName',
})

const Directors = new Sheet('Directors', {
  DirectorID: TextField({
    label: 'Director ID',
  }),

  PersonID: LinkedField({
    label: 'Person',
    sheet: Persons,
    required: true,
  }),

  ElectedDate: TextField({
    label: 'Elected Date',
  }),
})


// Workbook  - Update to reference your Workbook with Sheet(s) and Portal(s)
export default new Workbook({
  name: 'Dec18-Multi-Link-Bug',
  namespace: 'Dec18-Multi-Link-Bug',
  sheets: {
    Persons,
    Directors
  },
})
