import Link from 'next/link';
import type { ReactNode } from 'react';
import { Card } from '@/components/card';


interface SkillCardProps {
  title: string;
  icon: ReactNode;
  url: string;
}
export default function SkillCard({icon,title,url}: Readonly<SkillCardProps>) {
  return (
    <Card>
      <Link
        href={url}
        target='_blank'
        className='py-4 flex flex-col items-center'
      >
        {icon}
        <h1 className='text-sm sm:text-lg font-bold text-white text-center'>
          {title}
        </h1>
      </Link>
    </Card>
  );
}
