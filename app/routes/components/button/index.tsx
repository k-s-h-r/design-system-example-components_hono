import { Button } from '@/components/$Button';
import { Container } from '@/layout/Container';
import { Base } from '@/routes/_components/Base';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
    <Base>
      <Container>
        <div className='grid gap-4 justify-items-start'>
          <Button>ボタン</Button>
          <Button variant='primary' size='lg'>
            ボタン
          </Button>
          <Button variant='primary' size='md'>
            ボタン
          </Button>
          <Button variant='primary' size='sm'>
            ボタン
          </Button>
          <Button variant='primary' size='xs'>
            ボタン
          </Button>
          <Button variant='secondary' size='lg'>
            ボタン
          </Button>
          <Button variant='secondary' size='md'>
            ボタン
          </Button>
          <Button variant='secondary' size='sm'>
            ボタン
          </Button>
          <Button variant='secondary' size='xs'>
            ボタン
          </Button>
          <Button variant='tertiary' size='lg'>
            ボタン
          </Button>
          <Button variant='tertiary' size='md'>
            ボタン
          </Button>
          <Button variant='tertiary' size='sm'>
            ボタン
          </Button>
          <Button variant='tertiary' size='xs'>
            ボタン
          </Button>
        </div>
      </Container>
    </Base>,

    { title: 'Button' },
  );
});
