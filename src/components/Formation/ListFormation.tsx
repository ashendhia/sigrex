import React from "react";
import { Button } from "@/components/ui/button";
import { Chip } from "@mui/material";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FormationInfo from "./FormationInfo";
const ListFormation = ({ FilterClicked, setFilterClicked }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 12;

  // const totalPages = Math.ceil(items.length / itemsPerPage);

  // const getCurrentItems = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   return items.slice(startIndex, endIndex);
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // };

  return (
    <div className="flex flex-col  w-full mt-32  py-10  ">
      {/* <h1 className="text-3xl">
        {" "}
        Dans quelle domaine souhaitez vous vous former
      </h1> */}
      {/* <div className="flex flex-row flex-wrap mt-5">
        <div className="mr-4">
          <Button variant="destructive">Informatique</Button>
        </div>

        {/* Onclick 
        <div className="mr-4">
          <Button variant="destructive">Elec</Button>
        </div>
      </div> */}

      {/* !!!!!!!!!!!!!!!!!!! Liste des fomation  */}
      <h1 className="text-3xl">Liste des Formation</h1>
      <Chip
        label={FilterClicked ? FilterClicked : "hello"}
        variant="outlined"
        className="w-fit"
      />
      <div className="flex flex-row flex-wrap w-full justify-center  ">
        <div className="w-72 h-fit mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-72 h-fit mx-8 my-6">
          <FormationInfo />
        </div>

        <div className="w-72 h-fit mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-72 h-fit mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-72 h-fit mx-8 my-6">
          <FormationInfo />
        </div>
        <div className="w-72 h-fit mx-8 my-6">
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ListFormation;
