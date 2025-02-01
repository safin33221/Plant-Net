import { Helmet } from 'react-helmet-async'
import AddPlantForm from '../../../components/Form/AddPlantForm'
import { imageUpload } from '../../../api/Utils'
import useAuth from '../../../hooks/useAuth'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'

const AddPlant = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const image = form.image.files[0];
    const imageURl = await imageUpload(image)
    const sellerInfo = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email
    }
    const plantData = {
      name,
      category,
      description,
      price,
      quantity,
      image: imageURl,
      sellerInfo
    }

    try {
      setLoading(true)
      await axiosSecure.post('/plant', plantData)
      toast.success('data added succefully')
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }

  }
  return (
    <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddPlantForm handleSubmit={handleSubmit} 
      loading={loading} />
    </div>
  )
}

export default AddPlant
