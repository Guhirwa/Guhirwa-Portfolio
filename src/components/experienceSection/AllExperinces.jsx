import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SingleExperience from './SingleExperience'

const AllExperinces = () => {

const experiences = [
    {
        job: '',
        company: '',
        date: '',
        responsibilities: [
            '',
            '',
        ]
    },
    {
        job: '',
        company: '',
        date: '',
        responsibilities: [
            '',
            '',
        ]
    },
]

  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience, index) => {
            return (
                <>
                    <SingleExperience key={index} experience={experience} />
                    {index <  2 ? (<FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />) : ('')}
                </>
            )
        })}
    </div>
  )
}

export default AllExperinces