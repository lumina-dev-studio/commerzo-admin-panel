import ProductOrganization from "./ProductOrganization";
import Status from "./Status";
import ThemeTemplate from "./ThemeTemplate";

const StatusProductOrganizationThemeTemplate = ({status,register,setStatus,themeTemplate,setThemeTemplate,productData}:any) => {
  return (
    <div>
      <Status
      
      status={status}
      setStatus={setStatus}
      productData={productData}
      />
      <ProductOrganization  register={register}  productData={productData}/>

      <ThemeTemplate themeTemplate={themeTemplate} setThemeTemplate={setThemeTemplate}  productData={productData}/>
    </div>
  );
};

export default StatusProductOrganizationThemeTemplate;