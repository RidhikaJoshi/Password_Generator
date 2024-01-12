import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {

  const [length,setlength]=useState(8);
  const [numbers,setNumbers]  = useState(false);
  const [specialCharacters,setSpecialCharacters]  = useState(false);
  const [password,setPassword]  = useState('');

  const PasswordRef=useRef(null);

  const passwordGenerator= useCallback(()=>
  {
    let array=[];
    for(let i=65;i<=90;i++)
    {
      array.push(String.fromCharCode(i));
    }
    for(let i=97;i<=122;i++)
    {
      array.push(String.fromCharCode(i));
    }
    if(numbers)
    {
      for(let i=0;i<=9;i++)
        array.push(i);
    }
    if(specialCharacters)
    {
      array.push('!','@','#','$','%','^','&','*','_','-',':',';','?','/');
    }
    let p='';
    for(let i=0;i<length;i++)
    {
      let n=Math.floor(Math.random()*array.length);
      p+=array[n];
    }
    setPassword(p);
  },[length,numbers,specialCharacters]);

  const copyPasswordToClipboard=()=>
  {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  useEffect(()=>{
    passwordGenerator();
  },[length,numbers,specialCharacters,passwordGenerator])
  return (
  
    // Main container
    <div className="flex flex-col justify-center items-center">
      {/* // Header */}
      <h1 className="text-4xl text-white font-bold">Password Generator</h1>
      {/* // Input and copy button */}
      <div className="h-48 w-3/5 min-w-80 mt-9 rounded-lg bg-yellow-500 flex flex-col flex-wrap justify-evenly items-center">
          <div className='h-2/5 w-5/6  min-w-80 rounded-lg p-1.5'> 
              <input className='h-full w-4/5 bg-slate-50 outline-none rounded-lg p-3.5 font-semibold	font-serif' type='text' value={password} placeholder='Password' readOnly ref={PasswordRef}/>
               <button onClick={copyPasswordToClipboard} className='h-full w-1/5 bg-blue-500 text-white font-medium font-serif rounded-lg'>copy</button>
          </div>
      {/* // Password strength */}
          <div className="h-2/5 w-5/6  rounded-lg flex flex-row flex-wrap justify-evenly items-center" >
                  <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/> 
                  <label className='mr-2'>Length: {length}</label>
              <div className="mb-[0.125rem] mr-2 inline-block min-h-[1.5rem] pl-[0.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                     onChange={()=>setNumbers((prev)=>!prev)} />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    >Numbers</label>
              </div>
              <div className="mb-[0.125rem] mr-2 inline-block min-h-[1.5rem] pl-[0.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                     onChange={()=>setSpecialCharacters((prev)=>!prev)} />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    >Special-characters</label>
              </div>

          </div>
        </div>
    </div>
  )
}

export default App
