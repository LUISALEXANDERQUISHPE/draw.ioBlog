import Image from 'next/image';

interface SectionProps {
  id: string;
  title: string;
  description1?: string;
  description2?: string;
  description3?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'image-text' | 'image-text-reverse';
  image?: string;
  imageClassName?: string;
}

export function Section({
  id,
  title,
  description1,
  description2,
  description3,
  children,
  variant = 'default',
  image,
  imageClassName,
}: SectionProps) {
  if (variant === 'image-text' || variant === 'image-text-reverse') {
    return (
      <section id={id} className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              variant === 'image-text-reverse' ? 'md:grid-cols-2' : ''
            }`}
          >
            {variant === 'image-text-reverse' && (
              <div className="order-2 md:order-2">
                <div className="bg-white h-96 rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden relative">
                  {image ? (
                    <Image
                      src={image}
                      alt="section image"
                      fill
                      className={imageClassName || 'object-cover'}
                    />
                  ) : (
                    '[Image Placeholder]'
                  )}
                </div>
              </div>
            )}
            <div className={variant === 'image-text-reverse' ? 'order-1 md:order-1' : ''}>
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>
              {description1 && (
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty text-justify">
                  {description1}
                </p>
              )}
              {children}
            </div>
            {variant === 'image-text' && (
              <div>
                <div className="bg-white h-96 rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden relative">
                  {image ? (
                    <Image
                      src={image}
                      alt="section image"
                      fill
                      className={imageClassName || 'object-cover'}
                    />
                  ) : (
                    '[Image Placeholder]'
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-blue-50 to-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">{title}</h2>
        {description1 && (
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty text-justify">
            {description1}
          </p>
        )}
        {description2 && (
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty text-justify">
            {description2}
          </p>
        )}
        {description3 && (
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty text-justify">
            {description3}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
