import { companies } from '@/data/companies'
import FilterList from '@/components/FilterList'
import Header from '@/components/Header'
import CompanyCard from '@/components/CompanyCard'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex max-w-screen-2xl flex-col items-center gap-10 pt-10 md:pt-0">
        <FilterList
          level={'Senior'}
          languages={['HTML', 'Javascript']}
          role={'Frontend'}
          tools={['SASS', 'Babel', 'Babel2', 'Babe3']}
        />
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
    </>
  )
}

export default Home
