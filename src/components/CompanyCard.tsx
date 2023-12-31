import FeaturedTag from '@/components/FeaturedTag'
import NewTag from '@/components/NewTag'
import Tags from '@/components/Tags'
import { CompanyType } from '@/data/companies'

type Props = {
  company: CompanyType
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  const {
    id,
    tools,
    company: companyName,
    contract,
    featured: isFeatured,
    languages,
    level,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
    role,
  } = company

  const tags = [role, level, ...languages, ...tools]

  return (
    <section
      key={id}
      className={`${
        isFeatured ? 'border-l-8 border-primary' : ''
      } shrink-1 flex w-11/12 flex-col justify-center gap-5 rounded-xl bg-white px-7 py-5 shadow-xl md:w-full md:flex-row md:justify-between md:pt-5`}
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="-mt-10 md:mt-0 md:flex md:w-[88px] md:items-center">
          <picture>
            <img src={logo} alt={`icon ${companyName} `} />
          </picture>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 md:flex-row">
            <p className=" py-1 pr-5 font-bold text-secondary-dark ">
              {companyName}
            </p>
            <NewTag new={isNew} />
            <FeaturedTag featured={isFeatured} />
          </div>
          <p className="font-bold text-secondary duration-200 hover:cursor-pointer hover:text-primary md:text-2xl">
            {position}
          </p>
          <div className="flex font-medium text-secondary-dark">
            {postedAt}&nbsp;&nbsp;•&nbsp;&nbsp;
            {contract}&nbsp;&nbsp;•&nbsp;&nbsp;
            {location}
          </div>
        </div>
      </div>
      <hr className="block md:hidden" />
      <Tags tags={tags} />
    </section>
  )
}

export default CompanyCard
