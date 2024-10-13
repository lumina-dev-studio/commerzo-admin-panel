'use client'


import StatusProductOrganizationThemeTemplate from "./StatusProductOrganizationThemeTemplate/StatusProductOrganizationThemeTemplate"




const ProductFromPartTow= ({

  status,setStatus,
  themeTemplate,setThemeTemplate
}:any) => {
 



  return (
    <div>


      <StatusProductOrganizationThemeTemplate 
       status={status}
       setStatus={setStatus}
       themeTemplate={themeTemplate}
 
 setThemeTemplate={setThemeTemplate}
      />
    </div>
  );
};

export default ProductFromPartTow;
