import { Button } from "@/components/ui/button";
import FormationInfo from "./FormationInfo";
const ListFormation = () => {
  return (
    <div className="flex flex-col  w-full mt-32  p-10 ">
      <h1 className="text-3xl">
        {" "}
        Dans quelle domaine souhaitez vous vous former
      </h1>
      <div className="flex flex-row flex-wrap mt-5">
        <div className="mr-4">
          <Button variant="destructive">Informatique</Button>
        </div>
        <div className="mr-4">
          <Button variant="destructive">Elec</Button>
        </div>
      </div>

      {/*!!!!!!!!!!!!!!!!!!! Liste des fomation  */}
      <h1 className="text-3xl">Liste des Formation</h1>

      <div className="flex flex-row flex-wrap w-full justify-center  ">
        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>

        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-96 h-full mx-8 my-6">
          <FormationInfo />
        </div>

        {/* <div className='w-96 h-52 mx-8'>
      <FormationInfo/>
      
      </div>
      <div className='w-96 h-52 mx-8 my-10'>
      <FormationInfo/>
      </div>
      <div className='w-96 h-52 mx-8'>
      <FormationInfo/>
      </div>
      <div className='w-96 h-52 mx-8'>
      <FormationInfo/>
      </div> */}
      </div>
    </div>
  );
};

export default ListFormation;
