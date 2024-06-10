import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PetSitterProfileList } from "./petSitterProfile/PetSitterProfileList";
import { PetSitterProfileCreate } from "./petSitterProfile/PetSitterProfileCreate";
import { PetSitterProfileEdit } from "./petSitterProfile/PetSitterProfileEdit";
import { PetSitterProfileShow } from "./petSitterProfile/PetSitterProfileShow";
import { PetList } from "./pet/PetList";
import { PetCreate } from "./pet/PetCreate";
import { PetEdit } from "./pet/PetEdit";
import { PetShow } from "./pet/PetShow";
import { BillList } from "./bill/BillList";
import { BillCreate } from "./bill/BillCreate";
import { BillEdit } from "./bill/BillEdit";
import { BillShow } from "./bill/BillShow";
import { HireRequestList } from "./hireRequest/HireRequestList";
import { HireRequestCreate } from "./hireRequest/HireRequestCreate";
import { HireRequestEdit } from "./hireRequest/HireRequestEdit";
import { HireRequestShow } from "./hireRequest/HireRequestShow";
import { PurchaseList } from "./purchase/PurchaseList";
import { PurchaseCreate } from "./purchase/PurchaseCreate";
import { PurchaseEdit } from "./purchase/PurchaseEdit";
import { PurchaseShow } from "./purchase/PurchaseShow";
import { PetFoodList } from "./petFood/PetFoodList";
import { PetFoodCreate } from "./petFood/PetFoodCreate";
import { PetFoodEdit } from "./petFood/PetFoodEdit";
import { PetFoodShow } from "./petFood/PetFoodShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PetCareAndSittingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PetSitterProfile"
          list={PetSitterProfileList}
          edit={PetSitterProfileEdit}
          create={PetSitterProfileCreate}
          show={PetSitterProfileShow}
        />
        <Resource
          name="Pet"
          list={PetList}
          edit={PetEdit}
          create={PetCreate}
          show={PetShow}
        />
        <Resource
          name="Bill"
          list={BillList}
          edit={BillEdit}
          create={BillCreate}
          show={BillShow}
        />
        <Resource
          name="HireRequest"
          list={HireRequestList}
          edit={HireRequestEdit}
          create={HireRequestCreate}
          show={HireRequestShow}
        />
        <Resource
          name="Purchase"
          list={PurchaseList}
          edit={PurchaseEdit}
          create={PurchaseCreate}
          show={PurchaseShow}
        />
        <Resource
          name="PetFood"
          list={PetFoodList}
          edit={PetFoodEdit}
          create={PetFoodCreate}
          show={PetFoodShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
