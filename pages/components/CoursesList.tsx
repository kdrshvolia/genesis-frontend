import React from "react";
import { Course } from "@/pages/common/types";
import { CourseItem } from "@/pages/components/Course";
import {Box, Pagination} from "@mui/material";
import { usePagination } from "@/hooks/usePagination";

interface CoursesListProps {
  courses: Course[];
}

export const CoursesList = ({ courses }: CoursesListProps) => {
  const ITEMS_PER_PAGE = 10;

  const { currentPage, pagesCount, setCurrentPage , showedData } = usePagination(
    courses,
    ITEMS_PER_PAGE
  );

  const handleChange = (_: any, p: number) => {
    setCurrentPage(p);
  }

  return (
    <Box display="grid" gridTemplateColumns="100%" justifyContent="center" gap="15px" maxWidth="1300px" margin="0 auto">
      {showedData.map((item) => {
        return <CourseItem course={item} key={item.id} />;
      })}
      <Pagination
        count={pagesCount}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
};
