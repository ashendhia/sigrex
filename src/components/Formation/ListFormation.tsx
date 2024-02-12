import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Chip } from "@mui/material";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

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
import { Navigate } from "react-router-dom";
const ListFormation = ({ FilterClicked, setFilterClicked }) => {
  const handleNavigate = (formationId) => {
    navigation.navigate(`formations/${formationId}`, { formationId });
  };
  const [Formation, setFormation] = useState([]);
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/formation",
          {
            // params: {
            //   page: 0,
            // },
          }
        );
        // Checking if the response status is OK (200)
        if (response.status === 200) {
          // Extracting data from the response
          const data = await response.data;
          // Updating state with the fetched data
          setFormation(data);
          // Logging the fetched data
          console.log(data);
        }
      } catch (error) {
        // Handling errors
        console.error("Error fetching formations:", error);
      }
    };

    // Calling the fetchFormations function when the component mounts
    fetchFormations();
  }, []);

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
      <div className="flex flex-row">
        {" "}
        {FilterClicked.map((filter, index) => (
          <Chip
            key={index}
            label={filter}
            variant="outlined"
            className="w-fit"
          />
        ))}
      </div>

      <div className="flex flex-row flex-wrap w-full justify-center  ">
        {console.log(FilterClicked)}
        {Formation.map((formation) => (
          <div
            className="w-72 h-fit mx-8 my-6 cursor-pointer"
            onClick={() => handleNavigate(formation.id)}>
            <FormationInfo
              ThemeDesignation={formation.theme.designation}
              date={formation.dateDebut}
              description={formation.description}
              domaineName={formation.theme.domaine.designation}
            />
          </div>
        ))}

        {/* <div className="w-72 h-fit mx-8 my-6">
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
        </div> */}

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
