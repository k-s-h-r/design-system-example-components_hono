import { Button } from '@/components/$Button';
import Counter from '@/islands/counter';
import { Base } from '@/routes/_components/Base';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono';
  return c.render(
    <Base>
      <div>
        <h1 className='text-3xl'>Hello, {name}!</h1>
        <Counter />
        <Button>button</Button>
      </div>
    </Base>,

    { title: name },
  );
});
