import {React,useState} from 'react'

const UseStateExample = () => {
    const [name,setName]=useState("Mani");
    const[number,setNumber]=useState(0);
    const[islogged,setIslogged]=useState(false);
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        age:""
    });
      const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
   console.log(JSON.stringify(formData, null, 2));
  };

    const handleIncrement=()=>{
        setNumber(number+1)
    }
  return (
    <div>
        <h1>{name}</h1>
      <button onClick={()=>setName("Developer")}>
        Change Name
      </button>
      <button onClick={handleIncrement}>
        Click
      </button>
      <p>{number}</p>
      <button onClick={()=>setIslogged(!islogged)}>
        Toggle
      </button>
      <h1>{islogged?"HomePage":"Login"}</h1>

       <div>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <br /><br />

      <h3>Name: {formData.name}</h3>
      <h3>Email: {formData.email}</h3>
      <h3>Age: {formData.age}</h3>
      {JSON.stringify(formData,null,2)}
      
    </div>
    </div>

    
  )
}

export default UseStateExample
