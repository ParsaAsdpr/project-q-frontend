interface Props {
  children: React.ReactNode;
  className?: string;
}
const SectionLayout = ({ children, className }: Props) => {
  return (
    <section
      className={`${className} rounded-lg bg-white w-full h-full p-3.5 shadow-[0_0px_10px_-16px_rgba(0,0,0,0.3)]`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
