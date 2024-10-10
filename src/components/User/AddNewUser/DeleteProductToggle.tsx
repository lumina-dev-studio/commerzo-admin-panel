const DeleteProductToggle = ({deleteProduct,setDeleteProduct}:any) => {
  return (
    <div>
  
    <div className="space-y-2 mt-7">
    <h3 className="text-[15px] font-bold" style={{ fontFamily: 'var(--font-inter)' }}>Delete Product</h3>
        {/* Allow option */}
        <label className={`${deleteProduct==="allow"?"bg-blue-500 ":"bg-gray-100 "} inline-flex items-center rounded-full p-2 cursor-pointer`}>
          <input
            type="radio"
            name="deleteProduct"
            value="allow"
            onChange={() => setDeleteProduct('allow')}
            className="form-radio h-5 w-5 hidden peer"
          />
          <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
            <svg
              className="  w-5 h-5 text-white peer-checked:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className={`${deleteProduct==="allow"?"text-white":"text-gray-900 "} ml-2 font-semibold peer-checked:text-white`}>Allow</span>
        </label>

        {/* Deny option */}
        <label className={`${deleteProduct==="deny"?"bg-blue-500 ":"bg-gray-100 "} ms-3 inline-flex items-center rounded-full p-2 cursor-pointer`}>
          <input
            type="radio"
            name="deleteProduct"
            value="deny"
            onChange={() => setDeleteProduct('deny')}
            className="form-radio h-5 w-5 hidden peer"
          />
       <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
            <svg
               className="  w-5 h-5 text-white peer-checked:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className={`${deleteProduct==="deny"?"text-white":"text-gray-900 "} ml-2 font-semibold peer-checked:text-white`}>Deny</span>
        </label>
      </div>
</div>
  );
};

export default DeleteProductToggle;