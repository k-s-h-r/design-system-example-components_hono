import { Container } from '@/layout/Container';
import { Base } from '@/routes/_components/Base';
import { createRoute } from 'honox/factory';
import { Disabeld, Example, Invalid, Readonly, Size } from './_components/$Preview';

export default createRoute((c) => {
  return c.render(
    <Base>
      <Container>
        <div className='grid gap-4 justify-items-start'>
          <Example />
          <Disabeld />
          <Invalid />
          <Readonly />
          <Size />
        </div>
      </Container>
    </Base>,

    { title: 'Link' },
  );
});
