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
    {
        job: 'Training Facilitator < 1 Mi//ion > Program - Rwanda',
        company: 'The Gym Rwanda',
        date: 'May 2025 - Present',
        responsibilities: [
            'Facilitating beginners in web development fundamentals',
            'Providing guidance',
            'Practical Demonstration',
            'Feedbacks to support trainee learning'
        ]
    },
    {
        job: 'Professional Foundation Trainee',
        company: 'Alx Rwanda',
        date: 'May 2024 - Present',
        responsibilities: [
            'Agile project management',
            'Teamwork',
            'Communication',
            'Digital age workplace skills'
        ]
    },
    {
        job: 'Front-End Development Trainee',
        company: 'Alx Rwanda',
        date: 'May 2024 - Present',
        responsibilities: [
            'Design and built Responsive and user-friendly web interface',
            'Learn modern framework to improve functionality and design in web development',
        ]
    },
]


  return (
    <div className='flex md:flex-row sm:flex-col gap-5 items-center justify-between'>
        {experiences.map((experience, index) => {
            return (
                <>
                    <SingleExperience key={index} experience={experience} />
                    {/* {experiences.length -1  === 0 ? (<FaArrowRight className={`text-orange lg:block sm:hidden ${experiences.length < 2 ? 'text-6xl' : 'text-3xl'}`} />) : ('')} */}
                </>
            )
        })}
    </div>
  )
}

export default AllExperinces