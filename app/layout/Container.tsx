type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props)=> {
  return (
    <main>
      <div className="w-full max-w-[950px] px-8 mx-auto">
        {children}
      </div>
    </main>
  )
}
