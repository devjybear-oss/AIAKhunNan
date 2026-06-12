type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  step?: string | number;
};

export default function FeatureCard({
  title,
  description,
  icon,
  step,
}: FeatureCardProps) {
  return (
    <div className="card card-hover p-6">
      {step !== undefined && (
        <span className="font-heading text-2xl font-bold text-primary/30">
          {step}
        </span>
      )}
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="mt-3 font-heading text-base font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
    </div>
  );
}
