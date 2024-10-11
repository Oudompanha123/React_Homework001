
import React,{ useState } from 'react';
import { useRef } from 'react';
import data from "../jsondata/data.json"

function PopUpComponent({catchDataFromCard}) {
  
  const ref = useRef();
  //const ref = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    startDate: '',
    endDate: '',
    company: '',
    detail: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Position is required';
    if (!formData.company) errors.company = 'Company is required';
    if (!formData.type) errors.type = 'Type is required';
    if (!formData.startDate) errors.startDate = 'Start date is required';
    if (!formData.endDate) errors.endDate = 'End date is required';
    if (!formData.detail) errors.detail = 'Description is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("Data from submit: ", formData) 
      catchDataFromCard(formData);
      document.getElementById('my_modal_form').close();
      ref.current.reset();
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <button className='font-bold p-2 bg-slate-300 rounded-md' data-modal-target="popup-modal" data-modal-toggle="popup-modal" onClick={()=>document.getElementById('my_modal_form').showModal()}>
        Add New Project
      </button>
      <dialog id="my_modal_form" className={`modal rounded-3xl h-[500px]`}>
        <div className="modal-box relative p-5">
          <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-1 cursor-pointer" onClick={() => document.getElementById('my_modal_form').close()}>✕</div>
            <h3 className="text-lg font-semibold my-3 text-gray-900 dark:text-white">
              Input Your Information
            </h3>
            <form className="p-4 md:p-5" onSubmit={handleSubmit} ref={ref}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Position</label>
                        <input type="text" name="name" id="name" className={`bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                          placeholder="Position" required="" value={formData.name}
                          onChange={handleChange}/>
                        {errors.name && <p className="text-red-600 text-sm text-left">{errors.name}</p>}
                    </div>
                    <div className="col-span-2">
                        <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Company</label>
                        <input type="text" name="company" id="company" value={formData.company}
                          onChange={handleChange}
                          className={`bg-gray-50 border ${errors.company ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}/>
                        {errors.company && <p className="text-red-600 text-sm text-left">{errors.company}</p>}
                    </div>

                    <div className="col-span-2">
                      <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Type</label>
                      <select id="type" name='type'
                        onChange={handleChange}
                        className={`bg-gray-50 border ${errors.type ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}>
                          <option selected="">Choose</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Freelance">FreeLance</option>
                      </select>
                      {errors.type && <p className="text-red-600 text-sm text-left">{errors.type}</p>}
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1">
                      <label for="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Started Date</label>
                      <input type="date" name="startDate" id="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`bg-gray-50 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} 
                      />
                      {errors.startDate && <p className="text-red-600 text-sm text-left">{errors.startDate}</p>}
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label for="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">End Date</label>
                      <input type="date" name="endDate" id="endDate" value={formData.endDate}
                        onChange={handleChange}
                        className={`bg-gray-50 border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}/>
                      {errors.endDate && <p className="text-red-600 text-sm text-left">{errors.endDate}</p>}  
                    </div>
                    <div className="col-span-2">
                      <label for="detail" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <textarea id="detail" name='detail' rows="4" value={formData.detail}
                        onChange={handleChange}
                        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.detail ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Description of you">
                      </textarea>
                      {errors.detail && <p className="text-red-600 text-sm text-left">{errors.detail}</p>}
                    </div>
                </div>
                <div className='btn-submit flex justify-end'>
                  <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                  </button>
                </div>
            </form>
          </div>  
      </dialog>  
    </>
  )
}

export default PopUpComponent
