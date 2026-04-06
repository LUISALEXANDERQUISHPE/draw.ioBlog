import { ReactNode } from 'react';

interface PricingCardProps {
  name: string;
  price: string | ReactNode;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-8 transition-all duration-300 ${
        highlighted
          ? 'bg-primary text-primary-foreground border-2 border-primary shadow-lg'
          : 'bg-card border border-border text-foreground'
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
        {description}
      </p>
      <div className="text-4xl font-bold mb-6">{price}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent font-bold mt-1">✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
