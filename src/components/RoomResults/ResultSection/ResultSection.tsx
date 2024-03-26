import React, { useState } from 'react';
import Filter from '../../FilterSection/Filter';
import CardContainer from '../CardContainer/CardContainer';
import { ResultSectionContainer } from './ResultSectionStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../redux/slices/roomsSlice';
import { AppDispatch, RootState } from '../../../redux/store';

const ResultContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.rooms.currentPage);

  const handleFilterChange = (filters) => {
    // Dispatch action to set current page to 1 when filter changes
    dispatch(setCurrentPage(1));
  };

  return (
    <ResultSectionContainer>
      <Filter handleFilterChange={handleFilterChange} />
      <CardContainer />
    </ResultSectionContainer>
  );
};

export default ResultContainer;
