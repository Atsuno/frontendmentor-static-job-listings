import { CompanyType } from '@/data/companies'

const NewTag: React.FC<Pick<CompanyType, 'new'>> = ({ new: isNew }) =>
  isNew ? (
    <p className="rounded-full bg-primary px-3 py-1 font-medium text-secondary-light">
      NEW!
    </p>
  ) : (
    <p className="hidden"></p>
  )

export default NewTag
