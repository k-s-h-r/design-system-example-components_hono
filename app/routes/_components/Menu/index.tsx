import { Link } from '@/components/$Link';

const Menu = () => (
  <div className='grid gap-6 justify-items-start'>
    <a href='/'>
      <h1 className='text-std-20B-5'>
        デジタル庁
        <br />
        デザインシステム
        <br />
        サンプル実装
        <br />
        HonoX(React + React Aria)版
      </h1>
    </a>

    <div className='grid gap-2 justify-items-start'>
      <h2 className='text-std-16B-7'>コンポーネント</h2>
      <ul className='grid gap-1 justify-items-start'>
        <li>
          <Link href='/components/button'>Button</Link>
        </li>
        <li>
          <Link href='/components/checkbox'>Checkbox</Link>
        </li>
        <li>
          <Link href='/components/link'>Link</Link>
        </li>
        <li>
          <Link href='/components/radio'>Radio</Link>
        </li>
      </ul>
    </div>
  </div>
);

export { Menu };
