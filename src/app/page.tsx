
import { DeleteAlias } from "@/components/DeleteAlias";
import { DeleteRichMenu } from "@/components/DeleteRichMenu";
import { GetAlias } from "@/components/GetAlias";
import { GetRichMenu } from "@/components/GetRichMenu";
import { MyProvider } from "@/context/IdsContext";


export default function Home() {

  return (
    <MyProvider>
      <main>
        <div>
          <GetRichMenu />
        </div>
        <div>
          <GetAlias />
        </div>
        <div>
          <DeleteRichMenu />
        </div>
        <div>
          <DeleteAlias />
        </div>
      </main>
    </MyProvider>
  );
}
