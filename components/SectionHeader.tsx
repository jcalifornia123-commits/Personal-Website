type SectionHeaderProps = {
  title: string;
  description?: string;
};

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
        {title}
      </div>
      {description ? <p className="max-w-2xl text-lg text-slate-300">{description}</p> : null}
    </div>
  );
}
