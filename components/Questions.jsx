'use client'
import { useState } from 'react'

const Questions = () => {
  const [score, setScore] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    let newScore = 0

    if (formData.get('html') === 'Hyper Text Markup Language') {
      newScore += 1
    }

    if (formData.get('css') === 'Cascading Style Sheet') {
      newScore += 1
    }

    if (formData.get('hyperlink') === 'a') {
      newScore += 1
    }

    if (formData.get('background') === 'background-color') {
      newScore += 1
    }

    setScore(newScore)
  }

  return (
    <div className="mx-auto w-[75%] pb-96">
      <h1 className="my-5 mb-2 text-xl font-bold dark:text-gray-400">
        Questionnaire
      </h1>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="html"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          What does HTML stand for
        </label>
        <select
          id="html"
          name="html"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>Hyper Text Markup Language</option>
          <option>High Technology Modern Language</option>
          <option>Hyperlink and Text Manipulation Language</option>
          <option>Home Tool Markup Language</option>
        </select>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          What does CSS stand for?
        </label>
        <select
          id="css"
          name="css"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>Cascading Style Sheet</option>
          <option>Computer Style Sheet</option>
          <option>Colorful Style Sheet</option>
          <option>Creative Style System</option>
        </select>
        <label
          htmlFor="hyperlink"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Which HTML tag is used for creating a hyperlink?
        </label>
        <select
          id="hyperlink"
          name="hyperlink"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="link">&lt;link&gt;</option>
          <option value="a">&lt;a&gt;</option>
          <option value="href">&lt;href&gt;</option>
          <option value="url">&lt;url&gt;</option>
        </select>
        <label
          htmlFor="background"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          What CSS property is used to set the background color of an element?
        </label>
        <select
          id="background"
          name="background"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>bg-color</option>
          <option>background-color</option>
          <option>color-background</option>
          <option>element-background</option>
        </select>
        <button
          type="submit"
          className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
        >
          Submit
        </button>
      </form>
      {score > 0 && (
        <p className="pt-12 text-xl font-bold">
          Your score is {score} out of 4.
        </p>
      )}
    </div>
  )
}

export default Questions
