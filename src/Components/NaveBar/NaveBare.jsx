import UpperNave from './UpperNave'
import LowerBar from './LowerBar'

const NaveBare = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40  ">
      <UpperNave/>
      <LowerBar/>
    </div>
  )
}

export default NaveBare
