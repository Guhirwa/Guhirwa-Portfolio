import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SingleExperience from './SingleExperience'

const AllExperinces = () => {

const experiences = [
    {
        job: 'IT Supporter and Customer Care Assistant',
        company: 'Gihundwe Sector',
        date: 'Dec 2022 - Sept 2023',
        responsibilities: [
            'Provided technical support',
            'System troubleshooting',
            'Customer care Assistance',
            'Insuring smooth IT operation'
        ]
    },
    {
        job: 'The Gym - software Development Trainee Program',
        company: 'The Gym Rwanda',
        date: 'November 2024 - Present',
        responsibilities: [
            'Gained hands-on experience in designing',
            'coding, testing, and maintaining applications using modern frameworks. '
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