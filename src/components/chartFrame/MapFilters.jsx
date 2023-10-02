"use client";

import React, { useEffect, useState } from "react";
import { ComboboxDemo } from "@/components/ui/Combobox";
import Loading from "../body/Loading";
import Countries from "@/data/countries.json";
import Map from "../charts/Map";

const MapFilters = ({ data }) => {
  const [countries, setCountries] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(Year[0].value);
  // const [selectedData, setSelectedData] = useState(null);

  // useEffect(() => {
  //   // Use the data passed as props to filter and select the object with the chosen year.
  //   const selectedYear = parseInt(value);
  //   const selectedObject = data.find((item) => item.Year === selectedYear);

  //   setSelectedData(selectedObject);
  // }, [value, data]);

  // const handleSelectValue = (currentValue) => {
  //   setValue(currentValue);
  //   setOpen(false);
  // };

  // const mapCountries = Countries;

  // useEffect(() => {
  //   if (selectedData) {
  //     // Check if selectedData is defined before processing it
  //     processData(selectedData.Data);
  //   }
  // }, [selectedData]);

  // const processData = (countriesData) => {
  //   const updatedMapCountries = mapCountries.features.map((mapCountry) => {
  //     const countryData = countriesData.find(
  //       (countryData) => countryData.ISO_A3 === mapCountry.properties.ISO_A3
  //     );

  //     const name = countryData ? countryData.name : "";

  //     return {
  //       ...mapCountry,
  //       properties: {
  //         ...mapCountry.properties,
  //         name,
  //       },
  //     };
  //   });

  //   setCountries(updatedMapCountries);
  // };

  useEffect(() => {
    setCountries(data[0].Data);
  }, [data]);

  return (
    <div>
      <div className="m-auto max-w-screen-xl pt-4">
        <div className="mx-auto items-center justify-center">
          <div>
            {countries.length === 0 ? <Loading /> : <Map Data={countries} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapFilters;
