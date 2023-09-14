import { CompanyType } from '@/data/companies'

const FilterList: React.FC<
  Pick<CompanyType, 'tools' | 'level' | 'role' | 'languages'>
> = ({ languages, level, role, tools }) => {
  return (
    <section className="flex w-11/12 flex-row gap-5 rounded-lg bg-secondary-light p-5 shadow-xl md:-m-7 md:w-4/5 md:justify-between ">
      <div className="flex flex-wrap gap-5">
        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary md:h-fit ">
            {role}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary md:h-fit">
            {level}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none  bg-primary  px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit "
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {languages[0]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {languages[1]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {tools[0]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {tools[1]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {tools[2]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>

        <div className="inline-flex">
          <p className="rounded-md rounded-r-none bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary  md:h-fit">
            {tools[3]}
          </p>
          <button
            type="button"
            className="rounded-md rounded-l-none bg-primary px-3 py-1 text-lg font-bold text-rear hover:bg-secondary md:h-fit"
          >
            x
          </button>
        </div>
      </div>
      <button type="button" className="font-bold text-primary hover:underline">
        Clear
      </button>
    </section>
  )
}

export default FilterList
