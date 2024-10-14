'use client'


import StatusProductOrganizationThemeTemplate from "./StatusProductOrganizationThemeTemplate/StatusProductOrganizationThemeTemplate"




const ProductFromPartTow= ({

  status,setStatus,
  themeTemplate,setThemeTemplate,register
}:any) => {
 



  return (
    <div>


      <StatusProductOrganizationThemeTemplate 
       status={status}
       setStatus={setStatus}
       themeTemplate={themeTemplate}
       register={register}
 setThemeTemplate={setThemeTemplate}
      />
    </div>
  );
};

export default ProductFromPartTow;
