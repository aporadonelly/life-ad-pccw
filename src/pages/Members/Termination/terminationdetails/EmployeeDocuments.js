import TableCustomized from "../../../components/common/TableCustomized";
import { Container, Card, CardContent, ButtonBase } from "@material-ui/core";
import { Button } from "@material-ui/core";
import faker from "faker";

const rows = [...Array(5).fill()].map((_, index) => ({
  id: index,
  docType: faker.name.firstName(),
  submitBy: faker.name.lastName(),
  recDate: faker.internet.email(),
  status: faker.phone.phoneNumber("916#######"),
}));

const columns = [
  {
    label: "Document Type",
    name: "docType",
  },
  {
    label: "Submitted By",
    name: "submitBy",
  },
  {
    label: "Received Date",
    name: "recDate",
  },
  {
    label: "Status",
    name: "status",
  },
];

const EmployeeDocuments = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <TableCustomized
            title=""
            rows={rows}
            columns={columns}
            stickyLabel="Action"
            renderStickyCell={(row) => {
              return (
                <>
                  <Button size="small" onClick={() => console.log(row)}>
                    VIEW
                  </Button>
                  &nbsp;
                  <Button size="small" onClick={() => console.log(row)}>
                    DELETE
                  </Button>
                </>
                // <ButtonBase onClick={() => console.log(row)}>R</ButtonBase>
              );
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmployeeDocuments;
