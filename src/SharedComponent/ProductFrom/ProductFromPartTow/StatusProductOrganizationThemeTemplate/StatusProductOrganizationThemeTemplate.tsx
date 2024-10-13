import ProductOrganization from "./ProductOrganization";
import Status from "./Status";
import ThemeTemplate from "./ThemeTemplate";

const StatusProductOrganizationThemeTemplate = ({status,setStatus,themeTemplate,setThemeTemplate}:any) => {
  return (
    <div>
      <Status
      
      status={status}
      setStatus={setStatus}
      />
      <ProductOrganization/>

      <ThemeTemplate themeTemplate={themeTemplate} setThemeTemplate={setThemeTemplate}/>
    </div>
  );
};

export default StatusProductOrganizationThemeTemplate;