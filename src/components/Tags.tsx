import { CompanyType } from '@/data/companies'

type Props = {
  tags: Array<string>
}

const Tags: React.FC<Props> = ({ tags }) => (
  <section className="flex flex-row flex-wrap gap-5 md:justify-end">
    {tags.map((tag) => (
      <button
        key={tag}
        type="button"
        className="rounded-md bg-secondary-dark bg-opacity-10 px-3 py-1 text-lg font-bold text-primary duration-200 hover:bg-primary hover:text-rear md:h-fit"
      >
        {tag}
      </button>
    ))}
  </section>
)

export default Tags
