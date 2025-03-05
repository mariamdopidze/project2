import React from 'react'

const General = () => {
  return (
    <div>
        <table className="w-full border-collapse text-center">
  <thead>
    <tr>
      <th className="border-b-2 border-gray-400 pb-2"></th> {/* ჰორიზონტალური ხაზი */}
    </tr>
  </thead>
  <tbody className="grid grid-cols-3 gap-4 mt-4">
    <tr className="flex flex-col items-center">
      <td className="h-[100px] w-[2px] bg-gray-400"></td> {/* ვერტიკალური ხაზი */}
      <td className="mt-2">Information 1</td>
    </tr>
    <tr className="flex flex-col items-center">
      <td className="h-[100px] w-[2px] bg-gray-400"></td> {/* ვერტიკალური ხაზი */}
      <td className="mt-2">Information 2</td>
    </tr>
    <tr className="flex flex-col items-center">
      <td className="h-[100px] w-[2px] bg-gray-400"></td> {/* ვერტიკალური ხაზი */}
      <td className="mt-2">Information 3</td>
    </tr>
  </tbody>
</table>

      
    </div>
  )
}

export default General
