export default function DivisionOne({ text }: { text: string }) {
  return (
    <div className="flex relative pt-80 bg-slate-200 -z-50 text-4xl justify-center md:pl-32 md:justify-start">
      <h1 className="pb-8 font-semibold">{text}</h1>
    </div>
  );
}
