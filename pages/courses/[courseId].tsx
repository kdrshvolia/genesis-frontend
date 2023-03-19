import React from "react";
import { CourseItem } from "../../common/types";
import { getCourseById } from "../../api/requests";
import { Course } from "../../components/Course";
import { GetServerSideProps } from "next";

interface PageProps {
  course: CourseItem;
}

const Page = ({ course }: PageProps) => {
  return <Course course={course} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const courseId = query.courseId as string;

  const course = await getCourseById(courseId);

  return {
    props: {
      course,
    },
  };
};
export default Page;
