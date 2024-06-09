import { Checkbox, CheckboxGroup } from '@/components/$Checkbox';
import { Container } from '@/layout/Container';
import { Base } from '@/routes/_components/Base';
import { createRoute } from 'honox/factory';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Example = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox value='1' isSelected>
      選択肢
    </Checkbox>
    <Checkbox value='2'>選択肢</Checkbox>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Disabeld = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox value='3' isDisabled isSelected>
      選択肢
    </Checkbox>
    <Checkbox value='3' isDisabled>
      選択肢
    </Checkbox>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Invalid = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox value='1' isInvalid isSelected>
      選択肢
    </Checkbox>
    <Checkbox value='2' isInvalid>
      選択肢
    </Checkbox>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Readonly = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox value='1' isReadOnly isSelected>
      選択肢
    </Checkbox>
    <Checkbox value='2' isReadOnly>
      選択肢
    </Checkbox>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Indeterminate = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox value='1' isIndeterminate>
      選択肢
    </Checkbox>
    <Checkbox value='2' isIndeterminate isDisabled>
      選択肢
    </Checkbox>
  </div>
);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Size = (args: any) => (
  <div className='flex flex-col gap-1'>
    <Checkbox size='sm'>smaill</Checkbox>
    <Checkbox size='md'>medium</Checkbox>
    <Checkbox size='lg'>large</Checkbox>
  </div>
);

export default createRoute((c) => {
  return c.render(
    <Base>
      <Container>
        <div className='grid gap-4 justify-items-start'>
          <Example />
          <Disabeld />
          <Invalid />
          <Readonly />
          <Indeterminate />
          <Size />
        </div>
      </Container>
    </Base>,

    { title: 'Link' },
  );
});
