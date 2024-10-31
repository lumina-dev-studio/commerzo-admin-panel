import UpdateCategory from "@/components/Category/CategoryList/UpdateCategory";
import Container from "@/components/Container/Container";

const Page = ({ params }: { params: any }) => {

  
  return (
    <Container>
      <UpdateCategory params={params} />
    </Container>
  );
};

export default Page;
