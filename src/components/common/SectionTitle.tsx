
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '', 
  subtitleClassName = '' 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-10',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-elvec-900">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg text-gray-600',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
