import { Menu } from '../Menu';

type Props = {
  children: React.ReactNode;
};

const Base = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-[auto_1fr]'>
      <aside className='w-64 py-8 px-4 border-r min-h-screen'>
        <Menu />
      </aside>
      <div className='pt-8'>{children}</div>
    </div>
  );
};

export { Base };
