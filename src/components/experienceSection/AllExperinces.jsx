import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

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
    }
]

  return (
    <div>
        {experiences.map((experience, index) => {
            return (
                <>
                    {/* <SingleExperience key={index} experience={experience} />
                    {index < 2 ? (<FaArrowRight />) : ""} */}
                </>
            )
        })}
    </div>
  )
}

export default AllExperinces