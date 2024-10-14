import ProductOrganization from "./ProductOrganization";
import Status from "./Status";
import ThemeTemplate from "./ThemeTemplate";

const StatusProductOrganizationThemeTemplate = ({status,register,setStatus,themeTemplate,setThemeTemplate}:any) => {
  return (
    <div>
      <Status
      
      status={status}
      setStatus={setStatus}
      />
      <ProductOrganization  register={register}/>

      <ThemeTemplate themeTemplate={themeTemplate} setThemeTemplate={setThemeTemplate}/>
    </div>
  );
};

export default StatusProductOrganizationThemeTemplate;