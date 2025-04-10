const Table = () => {
   return (
     <div className="bg-white p-4 rounded-lg shadow">
       <table className="w-full">
         <thead>
           <tr className="bg-gray-200">
             <th className="p-3 text-left">Name</th>
             <th className="p-3 text-left">Age</th>
             <th className="p-3 text-left">Status</th>
           </tr>
         </thead>
         <tbody>
           <tr className="border-b">
             <td className="p-3">John Doe</td>
             <td className="p-3">45</td>
             <td className="p-3 text-green-500">Active</td>
           </tr>
           <tr className="border-b">
             <td className="p-3">Jane Smith</td>
             <td className="p-3">30</td>
             <td className="p-3 text-red-500">Inactive</td>
           </tr>
         </tbody>
       </table>
     </div>
   );
 };
 
 export default Table;
 