'use client'
import { db } from '@lib/firebase'
import { useState } from 'react'
import { auth } from '@lib/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
const Details = () => {
  const [user, loading] = useAuthState(auth)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await db.collection('users').add({
        name,
        age,
        phoneNumber,
      })
      // Reset form fields
      setName('')
      setAge('')
      setPhoneNumber('')
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  return (
    <div className="flex items-center justify-center pt-24">
      <form className="glassmorphism" onSubmit={handleSubmit}>
        <p> Welcome {user.displayName}</p>
        <div class="mb-6">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Dasha Dsouza"
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your age
          </label>
          <input
            type="text"
            id="age"
            placeholder="18"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="repeat-password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Phone no.
          </label>
          <input
            type="text"
            id="phone"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            placeholder="7021022888"
          />
        </div>
        <div class="mb-6 flex items-start">
          <div class="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              required
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <label
            for="terms"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{' '}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add details
        </button>
      </form>
    </div>
  )
}

export default Details
