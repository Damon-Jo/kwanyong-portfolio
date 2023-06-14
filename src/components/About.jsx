import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Kwanyong Jo, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            I'm a skilled software developer with a passion for creating exceptional user experiences.<br/>
            With a strong background in React, Node.js, MongoDB, and Python, I bring over 2 years of experience in developing and maintaining websites and applications.<br/><br/>
            I hold a Diploma in Computer Science from BCIT.<br/>
            </p>
            <p className='hidden sm:block'>
            My educational background, combined with my hands-on experience in programming languages <br/>such as React, JavaScript, Python, Java and Next.js, has equipped me with a solid foundation in computer science principles and the ability to adapt to new technologies quickly.<br/><br/>
            Thank you for taking the time to learn about me. I eagerly anticipate the possibility of working together and contributing to the advancement of software development.<br/>
            </p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About