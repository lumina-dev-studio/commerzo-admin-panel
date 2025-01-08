import UpdateCategory from "@/components/Category/CategoryList/UpdateCategory";
import Container from "@/components/Container/Container";

const Page = async (props: { params: Promise<any> }) => {
  const params = await props.params;


  return (
    <Container>
      <UpdateCategory params={params} />
    </Container>
  );
};

export default Page;
