import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ plant }) => {
  return (
    <Link
      to={`/plant/${plant.id}`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={plant.image}
            alt={plant.name}
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>{plant.name}</div>
        <div className='font-semibold text-lg'>Category: {plant.category}</div>
        <div className='font-semibold text-lg'>Quantity: {plant.quantity}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'> Price: {plant.price}$</div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Card

