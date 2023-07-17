import { useState } from "react";


const todoApp = () => {
    const [list,setList]=useState([]);
    const [item,setItem]=useState("")

    const addTodoList=()=>{
        list.push(item)
        setList([...list])
    }
    const removeList=(index)=>{
        list.splice(index,1);
        setList([...list])

    }
    return (
        <>
        <h1 className="text-4xl text-center font-bold mt-4 text-gray-700">Todo List</h1>
        <div className="w-full flex p-16  rounded-lg">
            <div className="w-1/2 bg-gray-100 p-6 rounded-s-xl">
            <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900">Todo Item</label>
            <div className="flex gap-3">

            <input onChange={(e)=>setItem(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
            <button onClick={addTodoList} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>

          
            </div>
            <div className="w-1/2 bg-gray-200 p-6 rounded-e-xl">

                
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Todo name
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody>
        {
                        list.length !==0?(
                        list.map((element,index)=>{
                           return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{element}</td>
                                <td className="px-6 py-4">
                                    <button onClick={()=>{
                                    removeList(index)
                                }}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">delete</button>
                                </td>
                            </tr>
                           )
                        })
                        ):(<tr></tr>)
                    }
           
 
                
       
            
        </tbody>
    </table>
</div>

           
            </div>
           
          
        </div>
        </>
        
    );
};

export default todoApp;