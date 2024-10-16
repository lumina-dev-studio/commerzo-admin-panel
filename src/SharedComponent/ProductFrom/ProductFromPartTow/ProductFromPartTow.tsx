'use client'


import StatusProductOrganizationThemeTemplate from "./StatusProductOrganizationThemeTemplate/StatusProductOrganizationThemeTemplate"




const ProductFromPartTow= ({

  status,setStatus,
  themeTemplate,setThemeTemplate,register, productData
}:any) => {
 



  return (
    <div>


      <StatusProductOrganizationThemeTemplate 
       status={status}
       setStatus={setStatus}
       themeTemplate={themeTemplate}
       register={register}
 setThemeTemplate={setThemeTemplate}
 productData={productData}
      />
    </div>
  );
};

export default ProductFromPartTow;
