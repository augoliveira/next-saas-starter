type Props = {
  title: string;
};
export default function Headline({ title }: Props) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="h-[2px] w-[100px] bg-green-600"></div>
      <h1 className="text-gry-600 uppercse text-2xl">{title}</h1>
      <div className="h-[2px] w-[100px] bg-green-600"></div>
    </div>
  );
}
