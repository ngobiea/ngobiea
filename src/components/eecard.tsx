import {
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from '@/components/materialTailwind';

import type { ReactNode } from 'react';
import { Card } from '@/components/card';
interface EECardProps {
  title: string;
  institution: string;
  date: string;
  icon: ReactNode;
  isLast: boolean;
}

export default function EECard({
  date,
  icon,
  institution,
  title,
  isLast,
}: Readonly<EECardProps>) {
  return (
    <TimelineItem className='h-40'>
      {isLast && <TimelineConnector className='!w-[78px]' />}
      <Card>
        <TimelineHeader className='relative rounded-xl border text-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 hover:cursor-default'>
          <TimelineIcon className='p-3' variant='ghost' color='white'>
            {icon}
          </TimelineIcon>
          <div className='flex flex-col gap-1'>
            <Typography
              variant='h6'
              color='white'
              className='text-xs sm:text-sm'
            >
              {title}
            </Typography>
            <Typography
              variant='h6'
              color='white'
              className='text-xs sm:text-sm'
            >
              {institution}
            </Typography>
            <Typography variant='small' color='white' className='font-normal'>
              {date}
            </Typography>
          </div>
        </TimelineHeader>
      </Card>
    </TimelineItem>
  );
}
