'use client'


import StatusProductOrganizationThemeTemplate from "./StatusProductOrganizationThemeTemplate/StatusProductOrganizationThemeTemplate"




const ProductFromPartTow= ({

  status,setStatus,
  themeTemplate,setThemeTemplate,register, productData,category,setCategory
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
 category={category} setCategory={setCategory}
      />
    </div>
  );
};

export default ProductFromPartTow;
