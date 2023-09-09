import React from 'react'

const Questions = () => {
    const questions = [
        {
            q: 'What does HTML stand for?',
            opt: [
                'Hyper Text Markup Language',
                'High Technology Modern Language',
                'Hyperlink and Text Manipulation Language',
                'Home Tool Markup Language',
            ],
            ans: 1,
        },
        {
            q: 'What does CSS stand for?',
            opt: [
                'Cascading Style Sheet',
                'Computer Style Sheet',
                'Colorful Style Sheet',
                'Creative Style System',
            ],
            ans: 1,
        },
        {
            q: 'Which HTML tag is used for creating a hyperlink?',
            opt: [
                '<link>',
                '<a>',
                '<href>',
                '<url>',
            ],
            ans: 2,
        },
        {
            q: 'What CSS property is used to set the background color of an element?',
            opt: [
                'bg-color',
                'background-color',
                'color-background',
                'element-background',
            ],
            ans: 2,
        },
        {
            q: 'Which HTML element is used for inserting a line break within text?',
            opt: [
                '<newline>',
                '<break>',
                '<lb>',
                '<br>',
            ],
            ans: 4,
        },
    ]
    return (
        <div className='w-[75%] mx-auto'>
        <h1 className='my-5 mb-2 text-xl font-bold dark:text-gray-400'>Questionnaire</h1>
        <form>
        {
            questions.map((values, index) => (
                
                <div key={index} className='my-4 hover:shadow-2xl shadow-md mx-auto'>
                    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                            {values.q}
                        </h5>
                        <ul className="my-4 space-y-3">
                            {
                                values.opt.map((values, index) => (
                                <li key={index}>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <span className="flex-1 ml-3 whitespace-nowrap">{values}</span>
                                </a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            ))
        }
        <button>Submit</button>
        </form>
        </div>
    )
}

export default Questions
