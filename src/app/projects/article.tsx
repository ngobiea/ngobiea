import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa';

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className='p-4 md:p-8'>
        <div className='flex justify-between gap-2 items-center'>
          <span className='text-xs duration-1000 text-gray-200 group-hover:text-white group-hover:border-gray-200 drop-shadow-orange'>
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className='text-gray-500 text-xs  flex items-center gap-1'>
            <FaRegEye className='w-4 h-4' />{' '}
            {Intl.NumberFormat('en-US', { notation: 'compact' }).format(views)}
          </span>
        </div>
        <h2 className='z-20 text-xl font-medium duration-1000 lg:text-3xl text-gray-200 group-hover:text-white font-display'>
          {project.title}
        </h2>
        <p className='z-20 mt-4 text-sm  duration-1000 text-gray-400 group-hover:text-gray-200'>
          {project.description}
        </p>
      </article>
    </Link>
  );
};
