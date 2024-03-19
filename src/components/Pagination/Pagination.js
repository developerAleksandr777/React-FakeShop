import React from "react";
import { Pagination } from "antd";
import "./Pagination.css";

const AntdPagination = ({
  postPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  handlePaginationChange,
  paginationState,
}) => {
  return (
    <Pagination
      current={paginationState.page}
      pageSize={postPerPage}
      total={totalPosts}
      onChange={handlePaginationChange}
    />
  );
};

export default AntdPagination;
