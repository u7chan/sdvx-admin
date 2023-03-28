import { FC } from 'react'
import { List as RaList, Datagrid, TextField, ChipField, ArrayField, SingleFieldList } from 'react-admin'

export const List: FC = () => (
  <RaList>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='artist' />
      <ArrayField source='tags'>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source='platforms'>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source='difficulties'>
        <SingleFieldList>
          <ChipField source='level' />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </RaList>
)
