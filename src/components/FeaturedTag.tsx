import { CompanyType } from '@/data/companies'

const FeaturedTag: React.FC<Pick<CompanyType, 'featured'>> = ({ featured }) =>
  featured ? (
    <p className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-light">
      FEATURED
    </p>
  ) : (
    <p className="hidden"></p>
  )

export default FeaturedTag
