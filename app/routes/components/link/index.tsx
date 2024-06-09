import { Link } from '@/components/$Link';
import { Container } from '@/layout/Container';
import { Base } from '@/routes/_components/Base';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
    <Base>
      <Container>
        <div className='grid gap-4 justify-items-start'>
          <Link href='#'>リンク</Link>

          <Link href='https://www.digital.go.jp' target='_blank'>
            外部リンク
          </Link>

          <p>
            これは<Link href='#'>文中のリンク</Link>です。
          </p>
          <p>
            これは
            <Link href='#' isDisabled>
              isDisabledのリンク
            </Link>
            です。
          </p>

          <p>
            これは
            <Link>hrefなしのリンク</Link>
            です。
          </p>
        </div>
      </Container>
    </Base>,

    { title: 'Link' },
  );
});
