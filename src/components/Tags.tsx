import { CompanyType } from '@/data/companies'

const Tags: React.FC<
  Pick<CompanyType, 'languages' | 'role' | 'level' | 'tools'>
> = ({ languages, level, role, tools }) => {
  const buttonStyle =
    'rounded-md bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary hover:bg-primary hover:text-rear md:h-fit'

  return (
    <section className="flex flex-row flex-wrap gap-5 md:justify-end">
      <button className={`${buttonStyle}`}>{role}</button>
      <button className={`${buttonStyle}`}>{level}</button>
      {languages.map((language, id) => (
        <button key={id} className={`${buttonStyle}`}>
          {language}
        </button>
      ))}
      {tools.length !== 0 ? (
        tools.map((tool, id) => (
          <button key={id} className={`${buttonStyle}`}>
            {tool}
          </button>
        ))
      ) : (
        <></>
      )}
    </section>
  )
}

export default Tags
