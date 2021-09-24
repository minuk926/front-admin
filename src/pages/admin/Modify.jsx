/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 min-w-0">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
                  Jobs
                </a>
              </div>
            </li>

          </ol>
        </nav>

      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-300" aria-hidden="true" />
            Edit
          </button>
        </span>

      </div>
    </div>
  )
}
